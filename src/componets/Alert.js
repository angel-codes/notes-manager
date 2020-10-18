import React from 'react';

const Alert = ({ message }) => {
  const { body, type } = message;
  return (
    <div
      className={`${
        type === 'error' ? 'bg-red-600' : 'bg-green-600'
      } absolute right-0 top-0 mr-5 mt-5 px-6 py-3 text-white rounded-lg font-semibold`}
    >
      <p>{body}</p>
    </div>
  );
};

export default Alert;
