import React from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router";
import Shimmer from "./Shimmer";
import Pagination from "./Pagination";

const Table = ({
  data,
  isLoading = false,
  paginations,
  currentPage,
  setCurrentPage,
}) => {
  // const navigate = useNavigate();
  return (
    <div className="max-w-full overflow-x-auto">
      {!isLoading ? (
        data && (
          <>
            <table className="w-full table table-striped table-auto table_spacing  px-1">
              <thead className="bg-primary table_shadow text-white">
                <tr className="text-left">
                  {data?.headers?.map((header, i) => (
                    <th
                      className={`py-3 px-4  font-bold ${
                        i === 0 && "rounded-s-md pl-10"
                      } ${i === data?.headers?.length - 1 && "rounded-e-md"}`}
                      key={i}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.rows?.map((row, i) => (
                  <tr
                    className="bg-white table_shadow rounded-md overflow-hidden "
                    key={i}
                  >
                    {row.map((cell, i) => (
                      <td
                        className={`py-3 px-4 font-[400]  ${
                          i === 0 && "rounded-s-md pl-10"
                        } ${i === row?.length - 1 && "rounded-e-md"}`}
                        key={i}
                      >
                        {cell.buttons ? (
                          cell.buttons.map((data) => (
                            <Link to={`staffs/edit/${data.id}`}>
                              <button
                                // onClick={() => navigate()}
                                style={{ background: data.class || "#064899" }}
                                className="btn text-white px-3 py-1 rounded-md"
                                key={data.id}
                              >
                                {data.label}
                              </button>
                            </Link>
                          ))
                        ) : cell.column === "created_at" ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: cell.value }}
                          ></div>
                        ) : (
                          cell.value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {paginations?.total > paginations?.per_page && (
              <Pagination
                paginations={paginations}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </>
        )
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Table;
