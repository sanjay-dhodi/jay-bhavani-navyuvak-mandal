import React, { useEffect, useState } from "react";
import EntryForm from "../components/EntryForm";
import Table from "../components/homepage/Table";
import { getAllRecord } from "../services/recordService";
import { Link } from "react-router";

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
    console.log(originalList);

    setList(filteredData);
  }

  return (
    <>
      <EntryForm onChange={handleChange} />
      <Link to="createmember">
        <button className="btn btn-warning">ADD NEW MEMBER</button>
      </Link>
      <Table data={list} isAdminTable={true} />
    </>
  );
}
