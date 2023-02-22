import { useRouter } from "next/router";

export default function ClientsProjectsPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  const loadProjectHandler = () => {
    // router.push('/clients/sultan/banani')
    // router.replace("/clients/sultan/banani"); // we cant go back after navigation
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "sultan", clientprojectid: "banani" },
    });
  };
  return (
    <>
      <h1>Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </>
  );
}
