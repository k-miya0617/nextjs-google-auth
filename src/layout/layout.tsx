import React from "react";
import GlobalNavigation from "../components/layout/globalNavigation";
import Sidebar from "../components/layout/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen h-screen flex flex-col bg-red-500">
      <GlobalNavigation />
      <div className="flex-1 flex flex-row h-1">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-stone-900 text-stone-100 p-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
