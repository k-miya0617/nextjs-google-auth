import type { NextPage } from "next";
import Link from "next/link";

const ErrorPage403: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-stone-800 text-stone-100 p-10">
      <h2 className="">403エラー</h2>
      <Link href="/">
        <a>トップに戻る</a>
      </Link>
    </div>
  );
};

export default ErrorPage403;
