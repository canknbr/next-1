import React from 'react';
import { useRouter } from 'next/router';
const SinglePage = () => {
  const router = useRouter();
  function loadProjectHandler() {
    router.push({
      pathname: '/clients/[id]/[...clientProjectId]',
      query: { id: 'can', clientProjectId: 'projecta' },
    });
  }
  return (
    <div>
      <h1>link geldi</h1>
      <button onClick={loadProjectHandler}>load project a</button>
    </div>
  );
};

export default SinglePage;
