import { useSession, signIn, signOut } from "next-auth/react";

interface GlobalNavigationProps {}

const UserIdentify = () => {
  const { data: session } = useSession();

  if (session) {
    const userName = session?.user?.email ?? "UNDEFINED";

    return (
      <div className="flex flex-row items-center space-x-2">
        <p>ようこそ! {userName} さん！</p>
        <button
          className="px-2 py-1 rounded-md bg-amber-500 hover:bg-amber-600 text-stone-900"
          onClick={() => signOut()}
        >
          ログアウト
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center space-x-2">
      <button
        className="px-2 py-1 rounded-md bg-amber-500 hover:bg-amber-600 text-stone-900"
        onClick={() => signIn()}
      >
        ログイン
      </button>
    </div>
  );
};

const GlobalNavigation = (props: GlobalNavigationProps) => {
  return (
    <div className="h-16 flex-shrink-0 flex flex-row items-center bg-stone-800 text-stone-100 p-4 space-x-4">
      <div className="">NextJS + Google Authentication</div>
      <div className="flex-1" />
      <div className="flex-shrink-0">
        <UserIdentify />
      </div>
    </div>
  );
};

export default GlobalNavigation;
