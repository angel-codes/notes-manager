import React from 'react';

const Sidebar = () => {
  return (
    <aside className="pt-8 px-5 min-h-screen text-center border-r-2 border-gray-100">
      <span className="text-primary font-semibold">NM</span>
      <div className="flex flex-col mt-10">
        <button className="flex items-center justify-center w-10 h-10 text-center bg-primary rounded-full">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col items-center justify-center mt-6">
          <li className="mb-2">
            <button className="w-6 h-6 bg-orange-500 rounded-full"></button>
          </li>
          <li className="mb-2">
            <button className="w-6 h-6 bg-pink-500 rounded-full"></button>
          </li>
          <li className="mb-2">
            <button className="w-6 h-6 bg-red-500 rounded-full"></button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
