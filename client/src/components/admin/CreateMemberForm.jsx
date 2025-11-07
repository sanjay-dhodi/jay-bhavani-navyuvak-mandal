import React from "react";

export default function CreateMemberForm({ formTitle, mode }) {




  
  return (
    <div className="card  bg-white border border-gray-200 ">
      <h1 className="mt-5 text-2xl font-bold text-center">{formTitle}</h1>

      <div className="card-body">
        <form className="flex flex-col gap-2">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter Name</legend>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Type here"
            />
            <p className="label">Optional</p>
          </fieldset>

          <div className="card">
            <div className="card-title">Months</div>
            <div className="card-body flex flex-row gap-2 border border-gray-200">
              <button className="badge  badge-md badge-outline">ssss</button>
              <button className="badge badge-md  badge-outline">dddd</button>
              <button className="badge badge-md badge-outline">ggg</button>
              <button className="badge badge-md badge-outline">gggg</button>
              <button className="badge badge-md badge-outline">ggg</button>
            </div>
          </div>

          <div className="card">
            <div className="card-title">Selected Month</div>
            <div className="card-body bg-gray-50 flex flex-row gap-2 border border-gray-200 ">
              <button className="badge badge-md badge-secondary">ssss</button>
              <button className="badge badge-md badge-secondary">dddd</button>
              <button className="badge badge-md badge-secondary">ggg</button>
              <button className="badge badge-md badge-secondary">gggg</button>
              <button className="badge badge-md badge-secondary">ggg</button>
            </div>
          </div>

          <button type="submit" className="btn btn-success w-full">
            {mode === "create" ? "ADD MEMBER" : "UPDATE MEMBER"}
          </button>
        </form>
      </div>
    </div>
  );
}
