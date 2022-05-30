import type { NextPage } from "next";
import Layout from "../layout/layout";
import { getSession } from "next-auth/react";

const Security1: NextPage = ({ user }: any) => {
  return (
    <Layout>
      <div className="flex flex-col space-y-10">
        <div className="bg-amber-800 p-2 rounded-md">
          <h2 className="text-2xl">Security Level 1 page</h2>
        </div>
        <div className="">
          <h2 className="text-xl">概要</h2>
          <p>
            このページは、Googleのアカウントでログインしなければ閲覧できない
          </p>
        </div>
        <div>
          <p>{JSON.stringify(user)}</p>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    context.res.writeHead(302, { Location: "/error" });
    context.res.end();
    return {
      props: {
        user: null,
      },
    };
  }
  return {
    props: {
      user: session.user,
    },
  };
}
export default Security1;
