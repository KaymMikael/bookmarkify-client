import React from "react";
import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";
import EditBookmarkForm from "../components/EditBookmarkForm";

const EditBookmarkPage = () => {
  const { bookmarkId } = useParams();
  return (
    <section>
      <SideBar />
      <div className="py-4 px-4 md:pl-[312px] mt-14 md:mt-0">
        <EditBookmarkForm bookmarkId={bookmarkId} />
      </div>
    </section>
  );
};

export default EditBookmarkPage;
