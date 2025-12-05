import React, { useEffect } from "react";
import Table from "../components/homepage/Table";
import EntryForm from "../components/EntryForm";
import { useState } from "react";
import { getAllRecord } from "../services/recordService";
import { Link } from "react-router";

export default function Homepage() {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchAllRecord() {
    try {
      const data = await getAllRecord();
      setList(data);
      setOriginalList(data);
    } catch (error) {
      console.log("error".error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllRecord();
  }, []);

  function handleChange(e) {
    const inputeValue = e.target.value.toLocaleLowerCase().trim();

    inputeValue === "" && setList(originalList);

    const filteredData = originalList.filter((user) => {
      return user.name.toLowerCase().includes(inputeValue);
    });

    setList(filteredData);
  }

  if (loading)
    return (
      <div>
        <h1 className="text-xl">loading......</h1>
        <p className="text-lg">
          please wait , first api load takes time bcoz we are on the free plan
          ..
        </p>
      </div>
    );

  return (
    <>
      <div className=" w-1/2 flex items-center justify-between">
        <EntryForm onChange={handleChange} />
        <Link to="/login">
          <button className="btn btn-secondary ml-3 ">login</button>
        </Link>
      </div>

      {loading ? (
        <div>
          <h1 className="text-xl">loading......</h1>
        </div>
      ) : list.length === 0 ? (
        <h1 className="bg-white p-5">No Data Found</h1>
      ) : (
        <Table data={list} isAdminTable={false} />
      )}
    </>
  );
}
