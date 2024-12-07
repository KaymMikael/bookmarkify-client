import { formatDistanceToNow } from "date-fns";
import React from "react";

const BookmarkDetails = ({ bookMark, openModal, user_id }) => {
  return (
    <>
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
        {user_id === bookMark.user_id ? (
          <div className="flex gap-3 text-xl text-gray-700 dark:text-white">
            <button className="" onClick={() => console.log("Edit clicked")}>
              <i className="bi bi-pencil-square"></i>
            </button>
            <button onClick={openModal}>
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <p className="mt-1 text-gray-400">Created by: {bookMark.author}</p>
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
    </>
  );
};

export default BookmarkDetails;
