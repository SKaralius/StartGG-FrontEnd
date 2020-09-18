import { useEffect, useState } from "react";

export default function useGetData(apiCall, pageNumber) {
  const [data, setData] = useState(false);
  async function getPosts() {
    try {
      const response = await apiCall();
      const posts = await response.json();
      setData(posts);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);
  return data;
}
