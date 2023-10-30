import React from 'react';
// Components/ui
import ModelItem from './modelItem';
// Utils
import { fetchModelsByUser } from '@/services/modelService';
const Body = async ({ userEmail }: { userEmail: string }) => {
  const models = await fetchModelsByUser(userEmail);

  return (
    <ul className='flex h-[560px] flex-col gap-4 overflow-auto text-xl font-semibold'>
      {models.length > 0 &&
        models.map((model: any) => <ModelItem model={model} key={model} />)}
    </ul>
  );
};

export default Body;
