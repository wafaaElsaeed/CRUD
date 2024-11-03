
import AllPostsContainer from "@/features/posts/components/AllPostsContainer";

export async function generateMetadata() {
  return {
    title: 'All Posts',
  };
}

export default async  function Home() {

  return (
    <>
      <AllPostsContainer  />
    </>
  );
}
