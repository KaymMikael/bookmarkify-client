import { useCallback, useEffect, useState } from "react";
import axiosHelper from "../axios/axiosHelper";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(
    async (url) => {
      try {
        const result = await axiosHelper.get(url);
        setData(result.data);
      } catch (e) {
        console.error(`Fetch error:${e}`);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      }
    },
    [url]
  );

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, loading };
};

export default useFetch;
