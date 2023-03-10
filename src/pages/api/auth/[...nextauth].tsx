import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  collection,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore/lite";
import { db } from "src/firebase";
import { compare } from "bcryptjs";

const GOOGLE_CLIENT_ID = process.env.GOOGLE__CLIENT__ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE__CLIENT__SECRET || "";

const GITHUB_CLIENT_ID = process.env.GITHUB__CLIENT__ID || "";
const GITHUB_CLIENT_SECRET = process.env.GITHUB__CLIENT__SECRET || "";

const SECRET_NEXTAUTH = process.env.SECRET__NEXTAUTH || "";

const usersCollection = collection(db, "users");

export default NextAuth({
  /**
   * Configuring providers for authentication
   */
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      authorization: {
        /**
         * Configuring the parameters for the authorization
         */
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      authorization: {
        /**
         * Configuring the parameters for the authorization
         */
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("Credentials not provided");
        }

        const { email, password } = credentials;

        try {
          const q = query(
            usersCollection,
            where("email", "==", email),
            limit(1)
          );
          const querySnapshot = await getDocs(q);

          const result = querySnapshot.docs.map((doc) => doc.data());

          if (result.length <= 0) {
            throw new Error("No user Found with Email Please Sign Up...!");
          }

          const checkPassword = await compare(password, result[0].password);

          if (!checkPassword || result[0].email !== email) {
            throw new Error("Username or Password doesn't match");
          }

          const user = {
            id: "2122232323",
            email: result[0].email,
          };

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  /**
   * Configuring the secret for token encryption
   */
  secret: SECRET_NEXTAUTH,
  /**
   * Callback functions for NextAuth.js
   *
   * @typedef {Object} Callbacks
   * @property {Function} signIn - Function to run when a user signs in.
   * @property {Function} redirect - Function to run when a user is redirected.
   * @property {Function} session - Function to run when a user session is created.
   * @property {Function} jwt - Function to run when a user JWT is created.
   */
  callbacks: {
    /**
     * Function to run when a user signs in.
     *
     * @param {Object} signInObject - Object containing information about the sign in.
     * @param {Object} signInObject.user - User object returned from the authentication provider.
     * @param {Object} signInObject.account - Account object returned from the authentication provider.
     * @param {Object} signInObject.profile - Profile object returned from the authentication provider.
     * @param {string} signInObject.email - Email address returned from the authentication provider.
     * @param {Object} signInObject.credentials - Credentials object returned from the authentication provider.
     *
     * @returns {boolean} - Whether the sign in was successful or not.
     */
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },

    /**
     * Function to run when a user is redirected.
     *
     * @param {Object} redirectObject - Object containing information about the redirect.
     * @param {string} redirectObject.url - The URL the user is being redirected to.
     * @param {string} redirectObject.baseUrl - The base URL of the application.
     *
     * @returns {string} - The URL to redirect the user to.
     */
    async redirect({ url, baseUrl }) {
      console.log({ baseUrl });
      return `${baseUrl}/workspaces`;
    },

    /**
     * Function to run when a user session is created.
     *
     * @param {Object} sessionObject - Object containing information about the session.
     * @param {Object} sessionObject.session - The session object.
     * @param {Object} sessionObject.user - The user object.
     * @param {Object} sessionObject.token - The session token.
     *
     * @returns {Object} - The updated session object.
     */
    async session({ session, user, token }) {
      return session;
    },

    /**
     * Function to run when a user JWT is created.
     *
     * @param {Object} jwtObject - Object containing information about the JWT.
     * @param {Object} jwtObject.token - The JWT token.
     * @param {Object} jwtObject.user - The user object.
     * @param {Object} jwtObject.account - The account object.
     * @param {Object} jwtObject.profile - The profile object.
     * @param {boolean} jwtObject.isNewUser - Whether the user is new or not.
     *
     * @returns {Object} - The updated JWT object.
     */
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
});
