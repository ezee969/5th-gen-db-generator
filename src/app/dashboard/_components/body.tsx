'use client';
import React, { useEffect, useState } from 'react';
// Components/ui
import ModelItem from './modelItem';
// Utils
import { fetchModelsByUser } from '@/services/modelService';
import LoadingEnano from '@/components/Loaders/LoadingEnano/LoadingEnano';

const Body = ({ userEmail }: { userEmail: string }) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModels = async () => {
      const models = await fetchModelsByUser(userEmail);
      setModels(models);
      setLoading(false);
    };
    fetchModels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className='flex h-[560px] flex-col justify-center gap-4 overflow-auto text-xl font-semibold'>
      {!loading &&
        models.length > 0 &&
        models.map((model: any) => <ModelItem model={model} key={model} />)}
      {!loading && models.length === 0 && (
        <li className='text-center text-xl font-semibold text-slate-300'>
          You have no models yet
        </li>
      )}
      {loading && (
        <li className='text-center text-xl font-semibold text-slate-300'>
          <LoadingEnano />
          Loading...
        </li>
      )}
    </ul>
  );
};

export default Body;
