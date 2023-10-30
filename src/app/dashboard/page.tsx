import React from 'react';
// Utils
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
// Components/ui
import Header from './_components/header';
import Body from './_components/body';
import { Suspense } from 'react';
import { PacmanLoader } from 'react-spinners';
import LoadingEnano from '@/components/Loaders/LoadingEnano/LoadingEnano';
const DashboardPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/');
  }

  return (
    <div className='flex flex-col rounded-md bg-slate-950 px-4 py-6 text-white shadow '>
      <Header />
      <Suspense fallback={<LoadingEnano />}>
        <Body userEmail={session.user?.email as string} />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
