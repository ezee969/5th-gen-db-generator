import React from 'react';
// Utils
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

const HomePage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/');
  }

  return <div>HomePage</div>;
};

export default HomePage;
