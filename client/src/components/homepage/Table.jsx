import React from "react";

export default function Table({ data }) {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>

            <th>Jan</th>
            <th>fab</th>
            <th>mar</th>
            <th>apr</th>
            <th>may</th>
            <th>Jun</th>
            <th>Jul</th>
            <th>aug</th>
            <th>sep</th>
            <th>oct</th>
            <th>nov</th>
            <th>dec</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {data.map((entry, i) => {
            return (
              <tr key={i}>
                <th>1</th>
                <td>{entry.name}</td>
                {Object.entries(entry.money).map(([month, value]) => {
                  // return <td key={month}>{value ? "✅" : "❌"}</td>;
                  return (
                    <td key={month}>
                      {value ? (
                        <span className="badge badge-sm badge-success">
                          100
                        </span>
                      ) : (
                        "❌"
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
