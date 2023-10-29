import React from 'react';
// Utils
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
// Components/ui
import ModelItem from './_components/modelItem';

const fetchModels = async (user: string) => {
  const res = await fetch('http://localhost:3004/models?createdBy=' + user);
  const data = await res.json();

  return data;
};

const DasboardPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/');
  }
  const models = await fetchModels(session.user?.email as string);

  return (
    <div className='flex rounded-md bg-slate-950 px-4 py-6 text-white shadow '>
      <h2 className='text-2xl font-medium '>Your database models:</h2>
      <ul className='ml-8 flex h-[600px] list-inside flex-col gap-4 text-xl font-semibold'>
        {models.map((model: any) => (
          <ModelItem model={model} key={model} />
        ))}
      </ul>
    </div>
  );
};

export default DasboardPage;
