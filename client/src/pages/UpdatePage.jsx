import React, { useEffect } from "react";
import CreateMemberForm from "../components/admin/CreateMemberForm";
import { useParams } from "react-router";
import { getsingleRecord } from "../services/recordService";

export default function UpdatePage() {
  const { id } = useParams();

  async function fetchMember(id) {
    try {
      const response = await getsingleRecord(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMember(id);
  });

  return (
    <>
      <CreateMemberForm formTitle={"Update Member"} mode="edit" />
    </>
  );
}
