import React, { useEffect, useState } from "react";

export default function useGetRedditFrontPage() {
  const [redditPosts, setRedditPosts] = useState({});
  async function getPosts() {
    const response = await fetch("https://www.reddit.com/.json");
    const posts = await response.json();
    setRedditPosts(posts);
  }
  useEffect(() => {
    getPosts();
  }, []);
  return redditPosts;
}
