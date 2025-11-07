import React, { useEffect } from "react";
import { getAllRecord } from "../../services/recordService";
import { Link } from "react-router";

export default function Table({ data }) {
  const months = [
    "jan",
    "fab",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ">
      <table className="table">
        {/* head */}
        <thead className="bg-amber-200">
          <tr>
            <th></th>
            <th>Name</th>

            {months.map((value, i) => (
              <th key={i}>{value.toUpperCase()}</th>
            ))}

            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {data.map((entry, i) => {
            return (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{entry.name}</td>

                {months.map((value) => (
                  <td key={value}>
                    {entry?.month?.[value] ? (
                      <span className="badge badge-sm badge-success">100</span>
                    ) : (
                      "❌"
                    )}
                  </td>
                ))}
                <td>
                  <Link to={`/admin/editmember/${entry._id}`}>
                    <button className="btn btn-warning btn-sm">update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
