import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

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
        <div className="flex justify-between">
          <div className="flex items-center">
            <a
              href={bookMark.url}
              target="_blank"
              className="text-xl capitalize"
              title={bookMark.url}
            >
              {bookMark.title}
            </a>
            <span className="ml-2 text-xs border py-1 px-2 rounded-full bg-primary text-white dark:border-0">
              {bookMark.isPublic ? "Public" : "Private"}
            </span>
          </div>
          <div className="flex gap-3 text-xl text-gray-700 dark:text-white">
            <button className="" onClick={() => console.log("Edit clicked")}>
              <i className="bi bi-pencil-square"></i>
            </button>
            <button onClick={openModal}>
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
        <ul className="flex gap-3 my-2 flex-wrap">
          {bookMark.tags.map((tag) => (
            <li
              className="bg-secondary text-white px-3 py-1 rounded-full text-xs"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="text-gray-400 text-sm">
          {`Created ${formatDistanceToNow(bookMark.createdAt, {
            addSuffix: true,
          })}`}
        </p>
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
