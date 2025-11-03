import React, { useState } from "react";
import EntryForm from "../components/EntryForm";
import Table from "../components/homepage/Table";

export default function AdminPage() {
  const data = [
    {
      name: "sanjay dhodi",
      money: {
        jan: true,
        fab: true,
        march: false,
        april: false,
        may: false,
        june: false,
        july: true,
        august: true,
        september: true,
        october: false,
        november: false,
        december: false,
      },
    },

    {
      name: "sana dhodi",
      money: {
        jan: true,
        fab: true,
        march: false,
        april: false,
        may: false,
        june: false,
        july: true,
        august: true,
        september: true,
        october: false,
        november: false,
        december: false,
      },
    },
    {
      name: "Ketan dhodi",
      money: {
        jan: true,
        fab: true,
        march: false,
        april: false,
        may: false,
        june: false,
        july: true,
        august: true,
        september: true,
        october: false,
        november: false,
        december: false,
      },
    },
  ];

  const [list, setList] = useState(data);

  function handleChange(e) {
    const inputeValue = e.target.value.toLocaleLowerCase();

    const filteredData = data.filter((user) => {
      return user.name.toLocaleLowerCase().includes(inputeValue);
    });

    setList(filteredData);
  }

  return (
    <>
      <EntryForm onChange={handleChange} />
      <Table data={list} />
    </>
  );
}
