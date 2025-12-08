import React, { useEffect } from "react";
import { getAllRecord } from "../../services/recordService";
import { Link } from "react-router";

export default function Table({ data, isAdminTable }) {
  const months = [
    "sep",
    "oct",
    "nov",
    "dec",
    "jan",
    "fab",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
  ];

  return (
    <div className=" overflow-x-auto w-full max-w-max rounded-box p-5 bg-white">
      <table className="table border border-gray-200 aline-center ">
        {/* head */}
        <thead className="bg-amber-200">
          <tr>
            <th></th>
            <th>
              <h1>Name</h1>
            </th>

            {months.map((value, i) => (
              <th key={i}>{value.toUpperCase()}</th>
            ))}

            {isAdminTable && <th>action</th>}
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {data.map((entry, i) => {
            return (
              <tr key={i} className="">
                <td>{i + 1}</td>
                <td className="font-semibold border border-gray-200">
                  {entry.name}
                </td>

                {months.map((value) => (
                  <td key={value} className="border border-gray-200">
                    {entry?.month?.[value] ? (
                      <span className="badge badge-sm badge-success">100</span>
                    ) : (
                      <span> ❌ </span>
                    )}
                  </td>
                ))}

                {isAdminTable && (
                  <td>
                    <Link to={`editmember/${entry._id}`}>
                      <button className="btn btn-warning btn-sm">update</button>
                    </Link>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
