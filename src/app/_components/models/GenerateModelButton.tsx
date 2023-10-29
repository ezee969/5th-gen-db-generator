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
      className='fixed bottom-16 right-4 rounded-full bg-blue-600 p-4 text-white shadow-lg transition hover:bg-blue-700'
    >
      GENERAR MODELOS
    </button>
  );
};

export default GenerateModelButton;
