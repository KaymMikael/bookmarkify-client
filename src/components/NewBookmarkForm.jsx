import { Button, Switch } from "@headlessui/react";
import { useCallback } from "react";
import { useAuth } from "../hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBookmark } from "../api/BookMark";
import useBookmarkForm from "../hooks/useBookmarkForm";

const NewBookmarkForm = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
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

  const mutation = useMutation({
    mutationFn: addBookmark,
    onSuccess: () => {
      setFormData({
        userId: user.user_id,
        title: "",
        url: "",
        isPublic: false,
        tags: [],
      });
      setTagInput("");
      setEnabled(false);
      setMessage("Bookmark Successfully Created");
      setHasError(false);
      setTags([]);
      queryClient.invalidateQueries(["userBookmarks", "publicBookmarks"]);
    },
    onError: (error) => {
      console.error(`Error creating bookmark: ${error}`);
      setMessage(error.response?.data?.error || "An error occurred");
      setHasError(true);
    },
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      mutation.mutate(formData);
    },
    [formData, mutation]
  );

  return (
    <form className="max-w-4xl mx-auto" onSubmit={handleSubmit}>
      <div className="border-b dark:border-b-gray-500 my-2 pb-2">
        <h2 className="text-2xl">Create a new bookmark</h2>
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
        Create
      </Button>
    </form>
  );
};

export default NewBookmarkForm;
