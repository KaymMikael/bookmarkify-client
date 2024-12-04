import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import BookmarkDetails from "./BookmarkDetails";

const BookmarkItem = ({ bookMark }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const onDelete = () => {
    console.log(bookMark.bookmarkId);
  };

  return (
    <>
      <li className="py-6 border-b dark:border-b-gray-500 dark:text-white">
        <BookmarkDetails bookMark={bookMark} openModal={openModal} />
      </li>
      {/* Render the modal */}
      <DeleteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={onDelete}
      />
    </>
  );
};

export default BookmarkItem;
