import React from "react";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
// import AppBreadCrumb from "./AppBreadcrumb";

const AppLayout = () => {
  return (
    <div className="bg-gray-50">
      <div className={``}>
        <AppHeader />
        <AppSidebar />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>

    // <div className="bg-gray-50 min-h-screen">
    //   <div className="lg:ml-64">
    //     <AppHeader />
    //     <div className="p-4">
    //       <Outlet />
    //     </div>
    //   </div>
    //     <AppSidebar />
    // </div>

    // haha
  );
};

export default AppLayout;
