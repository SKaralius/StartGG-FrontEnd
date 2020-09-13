import { useEffect, useState } from "react";

export default function useGetRedditFrontPage() {
  const [redditPosts, setRedditPosts] = useState({});
  async function getPosts() {
    try {
      const response = await window.fetch(
        `http://${process.env.REACT_APP_SERVER_ADDRESS}:${process.env.REACT_APP_SERVER_PORT}/reddit`
      );
      const posts = await response.json();
      setRedditPosts(posts);
    } catch (err) {
      alert(err);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);
  return redditPosts;
}
