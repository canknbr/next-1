import Link from 'next/link';
function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="./clients">
            <a>clients</a>
          </Link>
        </li>
        <li>
          <Link href="./about">
            <a>about</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
