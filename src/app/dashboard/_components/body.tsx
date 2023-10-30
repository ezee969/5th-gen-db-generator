import React from 'react';
// Components/ui
import ModelItem from './modelItem';
import { fetchModels } from '@/services/modelService';
// Utils
fetchModels;
const Body = async ({ userEmail }: { userEmail: string }) => {
  const models = await fetchModels(userEmail);

  return (
    <ul className='flex h-[560px] flex-col gap-4 overflow-auto text-xl font-semibold'>
      {models.map((model: any) => (
        <ModelItem model={model} key={model} />
      ))}
    </ul>
  );
};

export default Body;
