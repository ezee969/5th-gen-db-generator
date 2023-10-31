'use client';
import React from 'react';
// Components/ui
import { BeatLoader } from 'react-spinners';
// Utils
import { generateModel } from '@/services/modelService';

const GenerateModelButton = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      await generateModel();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const GenerateButtonContent = isLoading ? (
    <>
      <BeatLoader size={5} color='white' />
      Generating
    </>
  ) : (
    'GENERATE MODEL'
  );

  return (
    <button
      onClick={handleGenerate}
      disabled={isLoading}
      className='fixed bottom-16 right-4 flex items-center gap-2 rounded-md bg-green-800 p-4 font-bold text-white shadow-lg transition hover:bg-green-700'
    >
      {GenerateButtonContent}
    </button>
  );
};

export default GenerateModelButton;
