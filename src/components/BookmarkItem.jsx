import React from "react";

const BookmarkItem = ({ bookMark }) => {
  return (
    <li className="py-6 border-b dark:border-b-gray-500 dark:text-white">
      <div className="flex justify-between">
        <div className="flex items-center">
          <a href={bookMark.url} target="_blank" className="text-xl">
            {bookMark.title}
          </a>
          <span className="ml-2 text-xs border py-1 px-2 rounded-full bg-primary text-white">
            {bookMark.isPublic ? "Public" : "Private"}
          </span>
        </div>
        <div className="flex gap-3 text-xl text-accent">
          <button className="">
            <i className="bi bi-pencil-square"></i>
          </button>
          <button>
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
      <p className="text-gray-400 text-sm">Created 5 days ago</p>
    </li>
  );
};

export default BookmarkItem;