import { useEffect, useState } from "react";

export default function useGetData(apiCall) {
  const [data, setData] = useState(false);
  async function getPosts() {
    try {
      const response = await apiCall();
      const posts = await response.json();
      setData(posts);
    } catch (err) {
      alert(err);
    }
  }
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return data;
}
