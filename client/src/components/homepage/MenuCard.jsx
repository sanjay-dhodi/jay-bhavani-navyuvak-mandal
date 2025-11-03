import React from "react";

export default function MenuCard({ title, bodyText }) {
  return (
    <div className="card bg-primary text-white p-2">
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p>{bodyText}</p>
      </div>
    </div>
  );
}
