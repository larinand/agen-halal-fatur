import React, { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Tambahkan relative pada container parent
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        // className="bg-gray-300 px-4 py-2 rounded"
        className="text-gray-600 px-2 py-2 border border-gray-400 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-calendar inline-block mr-1"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M4 11h16" />
          <path d="M11 15h1" />
          <path d="M12 15v3" />
        </svg>
        Weekly
        {/* chevron-up */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up inline-block ml-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 15l6 -6l6 6" />
        </svg> */}
        {/* chevron-down */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down inline-block ml-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </button>

      <div
        className={`hs-dropdown-menu transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } mt-2 min-w-32 bg-white shadow-md absolute z-10`} // Tambahkan absolute dan z-index
        role="menu"
        aria-labelledby="hs-dropdown-unstyled"
      >
        <a className="block px-4 py-2 hover:bg-gray-100" href="#">
          Daily
        </a>
        <a className="block px-4 py-2 hover:bg-gray-100" href="#">
          Weekly
        </a>
        <a className="block px-4 py-2 hover:bg-gray-100" href="#">
          Monthly
        </a>
        <a className="block px-4 py-2 hover:bg-gray-100" href="#">
          Yearly
        </a>
      </div>
    </div>
  );
};

export default DropDown;
