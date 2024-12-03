import { useState, useCallback, useEffect } from "react";

const useBookmarkForm = (user) => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [formData, setFormData] = useState({
    userId: user.user_id,
    title: "",
    url: "",
    isPublic: enabled,
    tags,
  });

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, isPublic: enabled, tags }));
  }, [enabled, tags]);

  const handleAddTag = useCallback(
    (e) => {
      if (e.key === " " && tagInput.trim() !== "") {
        e.preventDefault();
        if (!tags.includes(tagInput.trim())) {
          setTags((prevTags) => [...prevTags, tagInput.trim()]);
          setTagInput("");
        }
      }
    },
    [tagInput, tags]
  );

  const handleRemoveTag = useCallback((tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  }, []);

  return {
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
    handleDataChange,
    handleAddTag,
    handleRemoveTag,
  };
};

export default useBookmarkForm;
