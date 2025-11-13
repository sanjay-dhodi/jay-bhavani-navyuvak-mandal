import React, { useContext } from "react";

export default function LoginForm({ onsubmit, onchange, formdata, error }) {
  return (
    <div className="card bg-white w-1/4 border border-gray-200">
      <div className="card-body">
        <form className="flex flex-col gap-2" onSubmit={onsubmit}>
          {error && (
            <h1 className="bg-red-200 p-2 text-red-700 rounded border-b-2 ">
              {error}
            </h1>
          )}

          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Username</legend>
            <input
              type="text"
              name="username"
              className="input w-full"
              placeholder="Type here"
              onChange={onchange}
              value={formdata.username}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Type here"
              onChange={onchange}
              value={formdata.password}
            />
          </fieldset>
          <button type="submit" className="btn btn-success w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
