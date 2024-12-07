import React from "react";
import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";

const EditBookmarkPage = () => {
  const { bookmarkId } = useParams();
  return (
    <section>
      <SideBar />
      <div className="py-4 px-4 md:pl-[312px] mt-14 md:mt-0">
        <h1>Edit page</h1>
        <p>Bookmark ID: {bookmarkId}</p>
      </div>
    </section>
  );
};

export default EditBookmarkPage;
