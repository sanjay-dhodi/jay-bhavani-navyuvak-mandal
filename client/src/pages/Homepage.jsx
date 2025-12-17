import React, { useEffect } from "react";
import Table from "../components/homepage/Table";
import EntryForm from "../components/EntryForm";
import { useState } from "react";
import { getAllRecord } from "../services/recordService";
import { Link } from "react-router";
import { Image } from "@imagekit/react";

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
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <div className="relative">
          <Image
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_ENDPOINT}
            src="jay bhavani/jay-bhavani-logo.png"
            alt="Jay Bhavani logo"
            className="sm:relative sm:top-6 h-23 w-23 sm:h-30  sm:w-30 md:h-35 md:w-35 "
          />
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-2xl font-bold text-red-700 tracking-wide">
            જય ભવાની નવયુવક મંડળ
          </h1>

          <p className="mt-2 text-lg text-orange-600 font-medium">
            આપનું સ્વાગત કરે છે
          </p>

          <p className="mt-4 text-sm text-gray-600 animate-pulse">
            કૃપા કરીને થોડી રાહ જુઓ...
          </p>
        </div>
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
