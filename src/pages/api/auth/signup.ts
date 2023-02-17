import { NextApiRequest, NextApiResponse } from "next";
import {
  addDoc,
  collection,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore/lite";
import { hash } from "bcryptjs";
import { db } from "src/firebase";

const usersCollection = collection(db, "users");

/**
 * Handle the HTTP request to register a new user
 * @param {NextApiRequest} req - HTTP request object
 * @param {NextApiResponse} res - HTTP response object
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /**
   * only post method is accepted
   */
  if (req.method === "POST") {
    if (!req.body)
      return res
        .status(404)
        .json({ ok: false, message: "Don't have form data...!" });

    const { email, password } = req.body;

    /**
     * check duplicate users
     */
    try {
      const q = query(usersCollection, where("email", "==", email), limit(1));
      const querySnapshot = await getDocs(q);
      const usersList = querySnapshot.docs.map((doc) => doc.data());

      if (usersList.length > 0)
        return res
          .status(422)
          .json({ ok: false, message: "User already exists...!" });

      /**
       * hash password
       */
      const hashPassword = await hash(password, 12);

      const newUser = await addDoc(usersCollection, {
        email,
        password: hashPassword,
      });

      return res
        .status(201)
        .json({ ok: true, message: "User create", newUser });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: error,
      });
    }
  } else {
    res
      .status(500)
      .json({ ok: false, message: "HTTP method not valid only POST Accepted" });
  }
}
