
import AllPostsContainer from "@/features/posts/components/AllPostsContainer";

export function generateMetadata() {
  return {
    title: 'All Posts',
  };
}

export default function Home() {
  return (
    <>
      <AllPostsContainer  />
    </>
  );
}
