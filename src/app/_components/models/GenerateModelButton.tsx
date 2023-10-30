'use client';

import React from 'react';

const GenerateModelButton = () => {
  const generateModel = async () => {
    await fetch('/api/generate', {
      method: 'POST',
    });
  };

  return (
    <button
      onClick={generateModel}
      className='fixed bottom-16 right-4 rounded-md bg-green-800 p-4 font-bold text-white shadow-lg transition hover:bg-green-700'
    >
      GENERAR MODELOS
    </button>
  );
};

export default GenerateModelButton;
