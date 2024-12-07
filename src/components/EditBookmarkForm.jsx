import BookGIF from "../assets/img/BookGIF.gif";
import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useBookmarkForm from "../hooks/useBookmarkForm";
import { Button, Switch } from "@headlessui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editBookmark, fetchBookmarkByBookmarkId } from "../api/BookMark";
import { useNavigate } from "react-router-dom";

const EditBookmarkForm = ({ bookmarkId }) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isOwner, setIsOwner] = useState(true);
  const {
    tags,
    tagInput,
    enabled,
    message,
    hasError,
    formData,
    setFormData,
    setTagInput,
    setEnabled,
    setMessage,
    setHasError,
    setTags,
    handleDataChange,
    handleAddTag,
    handleRemoveTag,
  } = useBookmarkForm(user);

  const {
    data: bookmark,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookmark", bookmarkId],
    queryFn: () => fetchBookmarkByBookmarkId(bookmarkId),
    staleTime: Infinity,
  });

  useEffect(() => {
    if (bookmark) {
      if (bookmark.user_id !== user.user_id) {
        setIsOwner(false);
        return;
      }
      const { tags, bookmark_title, bookmark_url, is_public, user_id } =
        bookmark;
      console.log(bookmark);
      setTags(tags.split(","));
      setFormData({
        title: bookmark_title,
        url: bookmark_url,
        isPublic: is_public,
        tags: tags,
        userId: user_id,
      });
      setEnabled(is_public ? true : false);
    }
  }, [bookmark]);

  const mutation = useMutation({
    mutationFn: editBookmark,
    onSuccess: () => {
      setTagInput("");
      setMessage("Bookmark Successfully Edited");
      setHasError(false);
      queryClient.invalidateQueries(["userBookmarks", "publicBookmarks"]);
    },
    onError: (error) => {
      console.error(`Error editing bookmark: ${error}`);
      setMessage(error.response?.data?.error || "An error occurred");
      setHasError(true);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = { ...formData, bookmarkId };
    mutation.mutate(data);
    setTimeout(() => {
      setHasError(false);
      setMessage("");
    }, 1300);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-2">
        <img src={BookGIF} alt="Book" className="rounded-full" />
      </div>
    );
  }

  if (error || !isOwner) {
    return (
      <p className="text-center text-red-500">
        You don't have permission to edit this bookmark
      </p>
    );
  }

  return (
    <form className="max-w-4xl mx-auto" onSubmit={handleFormSubmit}>
      <div className="border-b dark:border-b-gray-500 my-2 pb-2">
        <h2 className="text-2xl">Edit an existing bookmark</h2>
        <p className="text-slate-400 text-sm">
          BookMarkify is a web application that allows users to save,
          categorize, and share their favorite links in an organized manner.
        </p>
      </div>
      <label htmlFor="title" className="flex flex-col max-w-80">
        <p>
          Title <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          name="title"
          required
          value={formData.title}
          onChange={handleDataChange}
          className="px-3 py-1 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white"
        />
      </label>
      <label htmlFor="url" className="flex flex-col max-w-80 my-3">
        <p>
          URL <span className="text-red-600">*</span>
        </p>
        <input
          type="url"
          name="url"
          required
          value={formData.url}
          onChange={handleDataChange}
          className="px-3 py-1 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white"
        />
      </label>
      <label htmlFor="tags" className="flex flex-col max-w-80 my-3">
        <p>
          Tags <span className="text-red-600">*</span>{" "}
          <span className="text-slate-400">(separate with space)</span>
        </p>
        <div className="border p-1">
          <div className="flex flex-wrap gap-2 mb-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 rounded-lg dark:bg-gray-700"
              >
                {tag}
                <button
                  type="button"
                  className="ml-2 text-red-600"
                  onClick={() => handleRemoveTag(tag)}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            name="tags"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
            className="px-2 py-1 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg dark:text-white"
          />
        </div>
      </label>
      <label htmlFor="public" className="my-3">
        <p>
          Public <span className="text-red-500">*</span>
        </p>
        <p className="text-sm text-slate-400">
          Anyone on the web app can see this bookmark{" "}
          <em>(private by default)</em>.
        </p>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          aria-required
          aria-label="Public toggle"
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600 mt-1"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
        </Switch>
      </label>
      {message && (
        <p className={hasError ? "text-red-500 my-3" : "text-green-500 my-3"}>
          {message}
        </p>
      )}
      <Button
        type="submit"
        className={
          "px-4 py-1 text-white font-medium bg-primary hover:opacity-70 active:opacity-60 rounded-lg duration-150 block ms-auto"
        }
      >
        Edit
      </Button>
    </form>
  );
};

export default EditBookmarkForm;
