import React, { useContext, useEffect, useState } from "react";
import EntryForm from "../components/EntryForm";
import Table from "../components/homepage/Table";
import { getAllRecord } from "../services/recordService";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

export default function AdminPage() {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchAllRecord() {
    try {
      const data = await getAllRecord();
      setList(data);
      setOriginalList(data);
    } catch (error) {
      // console.log("error".error.message);
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

  if (loading) return <h1>loading...</h1>;

  if (list.length === 0)
    return <h1 className="bg-white p-5">No Records to show</h1>;

  return (
    <>
      <EntryForm onChange={handleChange} />
      {loading ? <h1>loading</h1> : <Table data={list} isAdminTable={true} />}
    </>
  );
}
