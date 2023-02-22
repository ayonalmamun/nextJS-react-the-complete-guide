import { useRouter } from "next/router";

export default function ClientsProjectsPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    return (
      <>
        <h1>Projects of a Given Client</h1>
      </>
    );
  }
  