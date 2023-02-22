import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "sultan", name: "Sultan's Dine" },
    { id: "kachchiV", name: "Kachchi Vai" },
  ];
  return (
    <>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >{`${client.name}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
