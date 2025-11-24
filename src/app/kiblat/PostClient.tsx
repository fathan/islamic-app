"use client";

import { useEffect } from "react";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsClient({ posts }: { posts: IPost[] }) {
  useEffect(() => {
    console.log("Client mounted");
  }, []);

  return (
    <div>
      <h1>Posts dari Server</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
