import React from "react";

const Pagination = ({ paginations, currentPage, setCurrentPage }) => {
  const numberOfButton = Math.ceil(paginations?.total / paginations?.per_page);
  const pageNumbers = Array.from({ length: numberOfButton }, (_, i) => i + 1);

  const onButtonClick = (type) => {
    if (type === "pre") {
      if (currentPage === 1) {
        setCurrentPage(1);
      } else {
        setCurrentPage(currentPage - 1);
      }
    } else if (type === "next") {
      if (numberOfButton === currentPage) {
        setCurrentPage(currentPage);
      } else {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  // const renderPageButtons = () => {
  //   const startPage = Math.max(1, currentPage - 2);
  //   const endPage = Math.min(numberOfButton, startPage + 5);

  //   return Array.from(
  //     { length: endPage - startPage + 1 },
  //     (_, i) => startPage + i
  //   );
  // };

  return (
    <>
      <div className="d-flex justify-end items-center my-10">
        <div className="d-flex items-center bg-white table_shadow rounded-md">
          <span
            onClick={() => onButtonClick("pre")}
            className=" text-black items-center  bg-light px-4 py-2.5 cursor-pointer bg-slate-100"
          >
            &lt;
          </span>

          <div className="d-flex justify-center items-center">
            {pageNumbers.map((page) => (
              <div key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`btn cursor-pointer px-4 py-2.5  ${
                    currentPage === page
                      ? " bg-primary d-flex justify-center items-center text-white font-[500] "
                      : "text-black hover:bg-gray-100/50 transition duration-300 ease-in-out"
                  } `}
                >
                  {page}
                </button>
              </div>
            ))}
          </div>
          <span
            onClick={() => onButtonClick("next")}
            className=" text-black bg-light px-4 py-2.5 items-center cursor-pointer bg-slate-100"
          >
            &gt;
          </span>
        </div>
      </div>
    </>
  );
};

export default Pagination;
