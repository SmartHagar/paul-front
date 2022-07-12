/** @format */

import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center min-h-1/2 content-center">
      <div className="flex items-center space-x-2">
        <div
          className="animate-spin inline-block border-4 rounded-full"
          role="status"
        >
          <span className="radial-progress text-primary"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
