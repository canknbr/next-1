import React from 'react';
import { useRouter } from 'next/router';

const ClientProjectSampleId = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>dynamic project sample</h1>
    </div>
  );
};

export default ClientProjectSampleId;
