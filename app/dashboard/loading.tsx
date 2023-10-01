import React from "react";

export default function Loading() {
  return (
    <>
    <div className="m-8 flex flex-wrap p-5 ">
      <div className="w-96 h-96 bg-gray-100 rounded-md p-6 m-10 shadow-md animate-pulse ">
        <div className="w-full h-8 bg-gray-200 mb-4 rounded"></div>
        <div className="w-full h-24 bg-gray-200 mb-4 rounded"></div>
        <div className="w-3/4 h-8 bg-gray-200 mb-4 rounded"></div>
      </div>
      <div className="w-96 h-96 bg-gray-100 rounded-md p-6 m-10 shadow-md animate-pulse ">
        <div className="w-full h-8 bg-gray-200 mb-4 rounded"></div>
        <div className="w-full h-24 bg-gray-200 mb-4 rounded"></div>
        <div className="w-3/4 h-8 bg-gray-200 mb-4 rounded"></div>
      </div>
      <div className="w-96 h-96 bg-gray-100 rounded-md p-6 m-10 shadow-md animate-pulse ">
        <div className="w-full h-8 bg-gray-200 mb-4 rounded"></div>
        <div className="w-full h-24 bg-gray-200 mb-4 rounded"></div>
        <div className="w-3/4 h-8 bg-gray-200 mb-4 rounded"></div>
      </div>
    </div>
    </>
  );
}
