import React, { useEffect, useState } from "react";
import { createRecord, updateRecord } from "../../services/recordService";

import { Link, useNavigate } from "react-router";

export default function CreateMemberForm({ formTitle, mode, data }) {
  const navigate = useNavigate();
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
  const [prevMonthData, setPrevMonthData] = useState({});
  const [monthArray, setMonthArray] = useState(months);
  const [selectedMonth, setSelecetedMonth] = useState([]);
  const [isError, setIsError] = useState("");
  const [success, setIsSuccess] = useState("");

  useEffect(() => {
    if (mode === "update") {
      previousDataForUpdate(data);
      setPrevMonthData(data.month);
      // old data store for compare
    }
  }, [data]);

  // function for set data value to fileds
  function previousDataForUpdate(data) {
    setInputValue(data.name);

    // month object to array
    const monthFromData = Object.entries(data.month);

    const allreadySelectedMonth = monthFromData
      .filter(([key, value]) => value === true)
      // return only key(month) array to setSelected Array
      .map(([key]) => key);

    setSelecetedMonth(allreadySelectedMonth);

    const notSelectedMonth = monthFromData
      .filter(([key, value]) => value !== true)
      .map(([key]) => key);

    setMonthArray(notSelectedMonth);
  }

  // handle input box
  function handleInputChange(e) {
    setIsError("");
    setIsSuccess("");
    setInputValue(e.target.value);
  }

  // for a selectmonth feature
  function handleSelectMonth(e) {
    e.preventDefault();
    setIsError("");
    setIsSuccess("");
    setSelecetedMonth((prev) => [...prev, e.target.value]);
    const filterMonth = monthArray.filter((month) => month !== e.target.value);
    setMonthArray(filterMonth);
  }

  // for a deselect month
  function handleDeSelectMonth(e) {
    e.preventDefault();
    setIsError("");
    setIsSuccess("");
    setMonthArray((prev) => [...prev, e.target.value]);
    const filterMonth = selectedMonth.filter(
      (month) => month !== e.target.value
    );

    setSelecetedMonth(filterMonth);
  }

  // api functions for create and update ################################################

  async function createNewMember(payload) {
    try {
      const response = await createRecord(payload);
      if (response) {
        return true;
      }
    } catch (error) {
      if (error.response) {
        return false;
      }
    }
  }

  async function editRecord(id, payload) {
    try {
      const response = await updateRecord(id, payload);
      if (response) {
        return true;
      }
    } catch (error) {
      if (error.response) {
        // console.log(error.response);
        return false;
      }
    }
  }

  //  Sumbit form ############################################################################

  async function handleSubmit(e) {
    e.preventDefault();

    if (!inputValue.trim()) {
      setIsError("name required");
      return;
    }

    if (selectedMonth.length === 0) {
      setIsError("At least one month need selected");
      return;
    }

    // convert array into object for backend
    const currentMonthData = Object.fromEntries(
      months.map((key) => {
        return [key, selectedMonth.includes(key)];
      })
    );

    //  new modified object for send object to backend
    let chnagedMonthData = {};

    for (let key of months) {
      if (currentMonthData[key] !== prevMonthData[key]) {
        chnagedMonthData[key] = currentMonthData[key];
      }
    }

    const payload = {
      name: inputValue,
      month: mode === "update" ? chnagedMonthData : currentMonthData,
    };

    let response = "";

    if (mode == "update") {
      response = await editRecord(data._id, payload);

      if (response) {
        setIsError("");
        setIsSuccess("update successfull");
        navigate("/admin");
      } else {
        setIsSuccess("");
        setIsError("at least one change in month is required");
      }
    } else {
      response = await createNewMember(payload);
      if (response) {
        setIsError("");
        setIsSuccess("Member created successfully");
        navigate("/admin");
      } else {
        setIsSuccess("");
        setIsError("name already exist or internal server error");
      }
      setInputValue("");
      setSelecetedMonth([]);
      setMonthArray(months);
    }
  }

  return (
    <div className="card  bg-white border border-gray-200 ">
      <h1 className="mt-5 text-2xl font-bold text-center">{formTitle}</h1>

      <div className="card-body">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          {isError && (
            <h1 className="bg-red-300 p-2 text-red-600">{isError}</h1>
          )}
          {success && (
            <h1 className="bg-green-300 p-2 text-green-600">{success}</h1>
          )}

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter Name</legend>
            <input
              type="text"
              name="name"
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
            <div className="card-body flex flex-row gap-2 border border-gray-200 grid grid-cols-4 ">
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
          <Link to="/admin">
            <button className="btn  w-full">Go Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
