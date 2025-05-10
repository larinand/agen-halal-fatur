import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  IconChevronRight,
  IconChevronLeft,
  IconBuilding,
  IconCircleCheck,
  IconCalculator,
  IconBuildingBank,
  IconPointFilled,
  IconBuildingStore,
} from "@tabler/icons-react";

export default function AppSidebar() {
  const [openMenus, setOpenMenus] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Tambahkan useEffect untuk handle klik diluar sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById("hs-application-sidebar");
      const toggleButton = document.getElementById("sidebar-toggle-button");

      if (
        sidebar &&
        !sidebar.contains(event.target) &&
        !toggleButton.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };
  });

  const toggleMenu = (menuId) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };
  const getBreadcrumbItems = () => {
    const paths = location.pathname.split("/").filter((path) => path);
    return paths.map((path, index) => {
      const formattedPath = path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return {
        title: formattedPath || "Home",
        path: "/" + paths.slice(0, index + 1).join("/"),
        isLast: index === paths.length - 1,
      };
    });
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  let agents_menus = [
    {
      id: "dashboard",
      title: "DASHBOARD",
      type: "item",
      url: "/dashboard/agent",
      icon: null,
      children: null,
    },
    {
      id: "pelakuUsaha",
      title: "Pelaku Usaha",
      type: "group",
      icon: IconBuilding,
      children: [
        {
          id: "statusPelakuUsaha",
          title: "Status Pelaku Usaha",
          type: "item",
          url: "/business-actor",
        },
        {
          id: "submission",
          title: "Submission",
          type: "item",
          url: "/business-actor/create",
        },
      ],
    },
    {
      id: "marketingKits",
      title: "Marketing Kits",
      type: "group",
      icon: IconBuildingStore,
      children: [
        {
          id: "Media",
          title: "Media",
          type: "item",
          url: "/media",
        },
        {
          id: "faq",
          title: "FAQ",
          type: "item",
          url: "/faq",
        },
      ],
    },
    {
      id: "insentif",
      title: "Insentif",
      type: "item",
      url: "/insentif",
      icon: IconBuildingBank,
      children: null,
    },
    {
      id: "feeEstimationCalculator",
      title: "Fee Estimation Calculator",
      type: "item",
      url: "/fee-estimation-calculator",
      icon: IconCalculator,
      children: null,
    },
    {
      id: "lms",
      title: "LMS",
      type: "group",
      icon: IconBuildingStore,
      children: [
        {
          id: "learningModule",
          title: "Learning Module",
          type: "item",
          url: "/learning-module",
        },
        {
          id: "postTest",
          title: "Post Test",
          type: "item",
          url: "/post-test",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8 lg:hidden">
        <div className="flex items-center py-2">
          {/* Navigation Toggle */}
          <button
            id="sidebar-toggle-button"
            type="button"
            className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-hidden focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
            aria-haspopup="dialog"
            aria-expanded={isSidebarOpen}
            aria-controls="hs-application-sidebar"
            aria-label="Toggle navigation"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M15 3v18" />
              <path d="m8 9 3 3-3 3" />
            </svg>
          </button>
          {/* End Navigation Toggle */}

          {/* Breadcrumb */}
          <ol className="ms-3 flex items-center whitespace-nowrap">
            <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
              {getBreadcrumbItems().length > 0 && (
                <svg
                  className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </li>
            {getBreadcrumbItems().map((item, index) => (
              <li
                key={item.path}
                className={`flex items-center text-sm ${
                  item.isLast
                    ? "font-semibold text-gray-800"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {item.isLast ? (
                  <span>{item.title}</span>
                ) : (
                  <>
                    <a href={item.path}>{item.title}</a>
                    <svg
                      className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </>
                )}
              </li>
            ))}
          </ol>
          {/* End Breadcrumb */}
        </div>
      </div>
      {/* End Breadcrumb */}
      {/* Overlay */}
      {/* {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )} */}
      {/* End Overlay */}
      {/* <!-- Sidebar --> */}
      <div
        id="hs-application-sidebar"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-65 h-full hidden fixed inset-y-0 start-0 z-60 bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"

        // className={`absolute inset-y-0 start-0 z-60 w-65 bg-white border-e border-gray-200 transition-transform duration-300 transform
        //   ${
        //     isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        //   } lg:translate-x-0 lg:static`}

        // className={`absolute top-0 left-0 w-64 h-full bg-white border-e border-gray-200 transition-transform duration-300 transform
        //     ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        //     lg:translate-x-0 lg:fixed`}
      >
        <div className="relative flex flex-col h-full max-h-full">
          <div className="px-6 pt-4 flex items-center text-2xl font-extrabold">
            <p>HAI</p>
          </div>

          <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <nav className="p-3 w-full flex flex-col flex-wrap">
              <ul className="flex flex-col space-y-1">
                {agents_menus.map((menu) => {
                  return (
                    <li key={menu.id}>
                      {menu.type === "group" ? (
                        <div>
                          <button
                            type="button"
                            className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                            onClick={() => toggleMenu(menu.id)}
                          >
                            {menu.icon && <menu.icon className="w-5 h-5" />}
                            {menu.title}
                            {openMenus[menu.id] ? (
                              <IconChevronLeft className="ms-auto size-4" />
                            ) : (
                              <IconChevronRight className="ms-auto size-4" />
                            )}
                          </button>

                          {/* Submenu */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              openMenus[menu.id] ? "max-h-96" : "max-h-0"
                            }`}
                          >
                            <ul className="pt-1 space-y-1">
                              {menu.children?.map((child) => (
                                <li key={child.id}>
                                  <a
                                    className="flex items-center gap-x-3.5 py-2 px-2.5 ps-8 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                                    href={child.url}
                                  >
                                    <IconPointFilled className="w-5 h-5" />
                                    {child.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden"
                          href={menu.url}
                        >
                          {menu.icon && <menu.icon className="w-5 h-5" />}
                          {menu.title}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- End Sidebar --> */}
    </div>
  );
}
