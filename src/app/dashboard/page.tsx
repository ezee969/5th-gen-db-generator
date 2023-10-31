import React from 'react';
// Utils
import { Suspense } from 'react';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
// Components/ui
import Header from './_components/header';
import Body from './_components/body';
import GenerateModelButton from './_components/generateModelButton';

const DashboardPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/');
  }

  return (
    <div className='flex flex-col rounded bg-slate-950 px-4 py-6 text-white shadow '>
      <Header />
      <Body userEmail={session.user?.email as string} />
      <GenerateModelButton />
    </div>
  );
};

export default DashboardPage;
