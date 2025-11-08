import React, { useEffect, useState } from "react";
import CreateMemberForm from "../components/admin/CreateMemberForm";
import { useParams } from "react-router";
import { getsingleRecord } from "../services/recordService";

export default function UpdatePage() {
  const { id } = useParams();
  const [data, setData] = useState({ name: "", month: {} });
  const [isLoading, setIsloading] = useState(true);

  async function fetchMember(id) {
    try {
      const response = await getsingleRecord(id);
      setData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    fetchMember(id);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <h1>Loading..</h1>
      ) : (
        <CreateMemberForm
          formTitle={"Update Member"}
          mode="update"
          data={data}
        />
      )}
    </>
  );
}
