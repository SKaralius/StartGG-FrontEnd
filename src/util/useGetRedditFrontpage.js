import { useEffect, useState } from "react";

export default function useGetRedditFrontPage() {
  const [redditPosts, setRedditPosts] = useState({});
  async function getPosts() {
    try {
      const response = await window.fetch("http://localhost:4000/reddit");
      const posts = await response.json();
      setRedditPosts(posts);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);
  return redditPosts;
}
