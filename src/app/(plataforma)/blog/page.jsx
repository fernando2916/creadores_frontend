import Image from "next/image";
import { PostFeature } from "./components/PostFeature";
import { Posts } from "./components/Posts";

export const metadata = {
  title: 'Blog'
}

export default function BlogPage() {
  return (
    <main>
      <PostFeature/>
      <Posts/>
    </main>
  );
}