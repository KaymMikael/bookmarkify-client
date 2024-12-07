import axiosHelper from "../axios/axiosHelper";

export const fetchUserBookmarkByUserId = async (userId) => {
  const result = await axiosHelper.get(`/bookmarks/${userId}/user-bookmarks`);
  return result.data;
};

export const fetchBookmarkByBookmarkId = async (bookmarkId) => {
  return (await axiosHelper.get(`/bookmarks/${bookmarkId}`)).data;
};

export const addBookmark = async (bookmarkData) => {
  return await axiosHelper.post(`/bookmarks`, bookmarkData);
};

export const deleteBookmark = async (bookmarkId) => {
  return await axiosHelper.delete(`/bookmarks/${bookmarkId}`);
};

export const editBookmark = async (data) => {
  return await axiosHelper.put(`/bookmarks`, data);
};

export const fetchPublicBookmarks = async (tag = "") => {
  const url = tag ? `/bookmarks/tag?tag=${tag}` : "/bookmarks";
  return (await axiosHelper.get(url)).data;
};
