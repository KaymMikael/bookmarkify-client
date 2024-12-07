import axiosHelper from "../axios/axiosHelper";

export const fetchUserBookmarkByUserId = async (userId) => {
  const result = await axiosHelper.get(`/bookmarks/${userId}`);
  return result.data;
};

export const addBookmark = async (bookmarkData) => {
  return axiosHelper.post(`/bookmarks`, bookmarkData);
};

export const deleteBookmark = async (bookmarkId) => {
  return axiosHelper.delete(`/bookmarks/${bookmarkId}`);
};

export const fetchPublicBookmarks = async () => {
  return (await axiosHelper.get("/bookmarks")).data;
};
