import { useRouter } from "next/router";

export default function SelectedClientProjectsPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    return (
      <>
        <h1>Projects Page for a specific project for a selected client</h1>
      </>
    );
  }
  