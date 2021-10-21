import { useRouter } from 'next/router';
import Link from 'next/link';
function ClientsPage() {
  const router = useRouter();
  console.log(router);

  const clients = [
    { id: 'can', name: 'can kanbur' },
    { id: 'mert', name: 'mert kanbur' },
  ];
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map(client => {
          return (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>
                <a style={{ marginTop: '20px', display: 'block' }}>
                  {client.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ClientsPage;
