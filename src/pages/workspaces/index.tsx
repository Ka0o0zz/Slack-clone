import { useSession, signOut, getSession } from "next-auth/react";
import http from "http";
import Image from "next/image";

export default function SignInUser() {
  const { data: session } = useSession();
  const { name = "", image = "", email = "" } = session?.user ?? {};

  return (
    <div>
      Hello you are login
      <Image src={image ?? ""} alt="profile photo" width={150} height={150} />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={() => signOut()}>sign out</button>
    </div>
  );
}

export async function getServerSideProps({
  req,
}: {
  req: http.IncomingMessage;
}) {
  const session = await getSession({ req });

  console.log({ session });

  if (session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
}
