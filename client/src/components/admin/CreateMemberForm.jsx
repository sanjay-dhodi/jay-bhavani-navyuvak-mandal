import React, { useEffect, useState } from "react";

export default function CreateMemberForm({ formTitle, mode, data }) {
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

  const [inputValue, setInputValue] = useState("");
  const [monthArray, setMonthArray] = useState(months);
  const [selectedMonth, setSelecetedMonth] = useState([]);

  useEffect(() => {
    // change object to array
    const monthFromData = Object.entries(data.month);

    // filter only selected month in array
    const allreadySelectedMonth = monthFromData
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    setSelecetedMonth(allreadySelectedMonth);

    // filter not seleced month in array
    const remainmingMonth = monthFromData
      .filter(([key, value]) => value !== true)
      .map(([key]) => key);

    setMonthArray(remainmingMonth);
  }, [data]);

  // handle input box
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  // for a selectmonth feature
  function handleSelectMonth(e) {
    e.preventDefault();
    setSelecetedMonth((prev) => [...prev, e.target.value]);
    const filterMonth = monthArray.filter((month) => month !== e.target.value);
    setMonthArray(filterMonth);
  }

  // for a deselect month
  function handleDeSelectMonth(e) {
    e.preventDefault();
    setMonthArray((prev) => [...prev, e.target.value]);
    const filterMonth = selectedMonth.filter(
      (month) => month !== e.target.value
    );

    setSelecetedMonth(filterMonth);
  }

  // for a sumbit form
  function handleSubmit(e) {
    e.preventDefault();

    // convert array into object for backend
    const monthsForCreate = Object.fromEntries(
      months.map((key) => {
        return [key, selectedMonth.includes(key)];
      })
    );

    const monthsForUpdate = Object.fromEntries(
      selectedMonth.map((key) => {
        return [key, true];
      })
    );

    const payload = {
      name: inputValue,
      month: mode === "update" ? monthsForUpdate : monthsForCreate,
    };

    console.log(payload);
  }

  return (
    <div className="card  bg-white border border-gray-200 ">
      <h1 className="mt-5 text-2xl font-bold text-center">{formTitle}</h1>

      <div className="card-body">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter Name</legend>
            <input
              type="text"
              name="name"
              // value={mode == "create" ? "" : data.name}
              // value={"data"}
              value={inputValue}
              onChange={(e) => {
                handleInputChange(e);
              }}
              className="input w-full"
              placeholder="Type here"
            />
            <p className="label">Optional</p>
          </fieldset>

          <div className="card">
            <div className="card-title">Months</div>
            <div className="card-body flex flex-row gap-2 border border-gray-200 grid grid-cols-4">
              {monthArray.map((month) => (
                <button
                  key={month}
                  className="badge  badge-md badge-outline"
                  value={month}
                  onClick={(e) => handleSelectMonth(e)}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-title">Selected Month</div>
            <div className="card-body grid grid-cols-4 bg-gray-50 gap-2 border border-gray-200 ">
              {selectedMonth.map((month, i) => (
                <button
                  key={i}
                  value={month}
                  className="badge badge-md badge-secondary"
                  onClick={(e) => handleDeSelectMonth(e)}
                >
                  {month}
                </button>
              ))}
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
