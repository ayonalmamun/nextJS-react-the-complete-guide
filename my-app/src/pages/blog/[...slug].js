import { useRouter } from "next/router";

export default function BlogPostsPage() {
    const router = useRouter();

    // /blog/2012/12/5
    console.log(router.query);
    return (
      <>
        <h1>Blog Posts Page</h1>
      </>
    );
  }
  