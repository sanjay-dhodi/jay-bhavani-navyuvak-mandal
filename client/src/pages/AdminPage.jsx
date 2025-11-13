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

  const { logout } = useContext(AuthContext);

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

  function handleLogout() {
    logout();
  }

  // if (loading) return <h1>loading</h1>;

  return (
    <>
      <EntryForm onChange={handleChange} />
      <div>
        <Link to="createmember">
          <button className="btn btn-warning">ADD NEW MEMBER</button>
        </Link>

        <button className="btn btn-secondary ml-3" onClick={handleLogout}>
          logout
        </button>
      </div>

      {loading ? <h1>loading</h1> : <Table data={list} isAdminTable={true} />}
    </>
  );
}
