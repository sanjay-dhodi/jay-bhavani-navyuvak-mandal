import React, { useEffect } from "react";
import Table from "../components/homepage/Table";
import EntryForm from "../components/EntryForm";
import { useState } from "react";
import { getAllRecord } from "../services/recordService";

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

    const filteredData = list.filter((user) => {
      return user.name.toLocaleLowerCase().includes(inputeValue);
    });
    console.log(originalList);

    setList(filteredData);
  }
  return (
    <>
      <EntryForm onChange={handleChange} />
      {loading ? <h1>loading</h1> : <Table data={list} isAdminTable={false} />}
    </>
  );
}
