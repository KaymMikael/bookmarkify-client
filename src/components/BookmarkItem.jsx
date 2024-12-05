import React, { useCallback, useState } from "react";
import DeleteModal from "./DeleteModal";
import BookmarkDetails from "./BookmarkDetails";
import { deleteBookmark } from "../api/BookMark";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const BookmarkItem = ({ bookMark, user_id }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const mutation = useMutation({
    mutationFn: deleteBookmark,
    onSuccess: () => {
      closeModal();
      queryClient.invalidateQueries(["userBookmarks"]);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const onDelete = useCallback(() => {
    mutation.mutate(bookMark.bookmarkId);
  });

  return (
    <>
      <li className="py-6 border-b dark:border-b-gray-500 dark:text-white">
        <BookmarkDetails
          bookMark={bookMark}
          openModal={openModal}
          user_id={user_id}
        />
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
