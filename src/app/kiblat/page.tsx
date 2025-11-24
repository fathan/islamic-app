// app/kiblat/page.tsx (SERVER COMPONENT)
import PostsClient from "./PostClient";
import { getPosts } from "./actions";

export default async function KiblatPage() {
  const posts = await getPosts();

  return <PostsClient posts={posts.slice(0, 3)} />;
}
