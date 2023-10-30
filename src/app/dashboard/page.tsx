import React from 'react';
// Utils
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import { fetchModels } from '@/services/modelService';
// Components/ui
import ModelItem from './_components/modelItem';
import Link from 'next/link';

const DasboardPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/');
  }
  const models = await fetchModels(session.user?.email as string);

  return (
    <div className='flex flex-col rounded-md bg-slate-950 px-4 py-6 text-white shadow '>
      <div className='mb-6 flex justify-between'>
        <h2 className='p-auto  text-2xl font-medium'>Your database models:</h2>
        <Link
          href={'/dashboard/models'}
          className='rounded bg-blue-600 px-6 py-2 font-semibold text-white shadow-lg transition hover:bg-blue-700'
        >
          ADD
        </Link>
      </div>
      <ul className='flex h-[560px] flex-col gap-4 overflow-auto text-xl font-semibold'>
        {models.map((model: any) => (
          <ModelItem model={model} key={model} />
        ))}
      </ul>
    </div>
  );
};

export default DasboardPage;
