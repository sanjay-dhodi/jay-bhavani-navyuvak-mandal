import React from "react";

export default function EntryForm({ onChange }) {
  return (
    <div>
      <form>
        <div className="join">
          <input
            type="text "
            onChange={(e) => {
              onChange(e);
            }}
            className="input join-item"
          />
          <button className="join-item btn btn-success"> search </button>
        </div>
      </form>
    </div>
  );
}
