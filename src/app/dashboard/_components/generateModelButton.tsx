'use client';
import React from 'react';
// Components/ui
import { BeatLoader } from 'react-spinners';

const GenerateModelButton = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const generateModel = async () => {
    setIsLoading(true);
    await fetch('/api/generate', {
      method: 'POST',
    });
    setIsLoading(false);
  };

  const SubmitButtonContent = isLoading ? (
    <>
      <BeatLoader size={5} color='white' />
      Generating
    </>
  ) : (
    'GENERATE MODEL'
  );

  return (
    <button
      onClick={generateModel}
      className='fixed bottom-16 right-4 flex items-center gap-2 rounded-md bg-green-800 p-4 font-bold text-white shadow-lg transition hover:bg-green-700'
    >
      {SubmitButtonContent}
    </button>
  );
};

export default GenerateModelButton;
