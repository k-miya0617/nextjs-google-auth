import type { NextPage } from "next";
import Layout from "../layout/layout";

const Security1: NextPage = () => {
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
      </div>
    </Layout>
  );
};

export default Security1;
