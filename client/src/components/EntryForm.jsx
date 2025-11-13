import React from "react";

export default function EntryForm({ onChange }) {
  return (
    <div>
      <form>
        <div className="join">
          <input
            type="text "
            placeholder="search by name"
            onChange={(e) => {
              onChange(e);
            }}
            className="input join-item input-lg"
          />
        </div>
      </form>
    </div>
  );
}
