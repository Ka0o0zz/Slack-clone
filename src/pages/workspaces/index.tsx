import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";

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
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse<any>;
}) {
  const session = await getServerSession(req, res, {});

  console.log({ session });

  if (!session)
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
