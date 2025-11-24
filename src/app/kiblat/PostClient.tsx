// app/kiblat/PostsClient.tsx
"use client";

import { useEffect } from "react";

export default function PostsClient({ posts }: { posts: any[] }) {
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
