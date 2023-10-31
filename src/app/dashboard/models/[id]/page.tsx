'use client';
import LoadingErrorSection from './_components/loadingErrorSection';
import ModelDetailHeader from './_components/modelDetailHeader';
import ModelDetailTable from './_components/modelDetailTable';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ModelDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [modelData, setModelData] = useState<Model | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3004/models/' + params.id)
      .then((response) => {
        setModelData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, [params.id]);

  return (
    <div>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-2 bg-gray-800 py-5'>
          <div className='px-4 sm:px-6 lg:px-8'>
            <ModelDetailHeader modelName={modelData?.modelName || ''} />
            <LoadingErrorSection loading={loading} error={!modelData} />
            {modelData && (
              <div className='mt-8 flow-root'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                  <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
                    <ModelDetailTable fields={modelData.fields} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
