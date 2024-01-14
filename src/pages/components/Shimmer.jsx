import React from "react";

const Shimmer = () => {
  return (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full bg-white rounded-md">
        <thead>
          <tr className="text-sm bg-slate-300 h-[0px]">
            <th className="p-5 text-gray-700 font-sans"></th>
            <th className="p-5 text-gray-700 text-start font-sans"></th>
            <th className="p-5 text-gray-700 text-start font-sans"></th>
            <th className="p-5 text-gray-700 text-start font-sans"></th>
            <th className="p-5 text-gray-700 text-start font-sans"></th>
            <th className="p-5 text-gray-700 text-start font-sans"></th>
            <th className="p-5 text-gray-700 text-start font-sans"></th>
          </tr>
        </thead>
        <tbody>
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <tr key={index}>
                <td className="p-4 font-medium text-gray-500 font-sans">
                  <div className="animate-pulse flex justify-center items-center">
                    <div className="w-20 h-3 bg-gray-300 rounded-sm"></div>
                  </div>
                </td>
                <td className="p-4 font-medium text-gray-500 font-sans">
                  <div className="animate-pulse flex justify-center items-center">
                    <div className="w-20 h-3 bg-gray-300 rounded-sm"></div>
                  </div>
                </td>
                <td className="p-4 font-medium text-gray-500 font-sans">
                  <div className="animate-pulse flex justify-center items-center">
                    <div className="w-12 h-3 bg-gray-300 rounded-sm"></div>
                  </div>
                </td>
                <td className="p-4 font-medium text-gray-500 font-sans text-center">
                  <div className="animate-pulse flex justify-center items-center">
                    <div className="w-10 h-3 bg-gray-300 "></div>
                  </div>
                </td>
                <td className="p-4 font-medium text-gray-500 font-sans">
                  <div className="animate-pulse flex justify-center items-center">
                    <div className="w-20 h-3 bg-gray-300 rounded-sm"></div>
                  </div>
                </td>
                <td className="p-4 text-center font-medium text-gray-500 font-sans">
                  <div className="animate-pulse flex justify-center items-center">
                    <div className="w-14 h-3 bg-gray-300 rounded-sm"></div>
                  </div>
                </td>
                <td className="p-4 font-medium text-gray-500 font-sans">
                  <div className="animate-pulse flex justify-center items-center">
                    <div className="w-14 h-3 bg-gray-300 rounded-sm"></div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shimmer;
