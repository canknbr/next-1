import React from 'react';
import { useRouter } from 'next/router';
export default function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  // send a request to some backend server

  return (
    <div>
      <h1>The portfolio project page</h1>
    </div>
  );
}
