import React from 'react';

const Note = () => {
  return (
    <li className="flex flex-col p-4 h-56 text-primary font-medium bg-orange-400 rounded-xl shadow-md">
      <div className="mb-auto">Hello World!</div>
      <div className="flex items-center justify-between">
        <p className="font-normal">Oct 12, 2020</p>
        <button className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default Note;
