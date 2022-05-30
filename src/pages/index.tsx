import type { NextPage } from "next";
import Layout from "../layout/layout";

import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="flex flex-col space-y-10">
        <div className="bg-amber-800 p-2 rounded-md">
          <h2 className="text-2xl">Index page</h2>
          <h3 className="text-xl">NextJS + Google Authentication</h3>
        </div>
        <div className="">
          <h2 className="text-xl">目的</h2>
          <p>
            NextJSとnext-authを組み合わせ、Google Cloud Platformにログインする。
          </p>
          <p>
            ログイン方法、権限管理方法などを学んだ後、Microsoft
            Graphへの応用を試みる
          </p>
        </div>
        <div>
          <h2>JSON</h2>
          <p>{JSON.stringify(session)}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
