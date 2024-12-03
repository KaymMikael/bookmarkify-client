import axiosHelper from "../axios/axiosHelper";

export const fetchUserBookmarkByUserId = async (userId) => {
  const result = await axiosHelper.get(`/bookmarks/${userId}`);
  return result.data;
};

export const addBookmark = async (bookmarkData) => {
  return axiosHelper.post(`/bookmarks`, bookmarkData);
};
