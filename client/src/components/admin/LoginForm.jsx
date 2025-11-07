import React from "react";

export default function LoginForm() {
  return (
    <div className="card bg-white w-1/4 border border-gray-200">
      <div className="card-body">
        <form className="flex flex-col gap-2">
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Username</legend>
            <input
              type="text"
              name="username"
              className="input w-full"
              placeholder="Type here"
            />
            <p className="label">Optional</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Type here"
            />
            <p className="label">Optional</p>
          </fieldset>
          <button type="submit" className="btn btn-success w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
