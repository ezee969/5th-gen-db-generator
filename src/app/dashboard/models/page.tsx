'use client';
import FieldsList from '@/app/_components/models/FieldsList';
import GenerateModelButton from '@/app/_components/models/GenerateModelButton';
import ModelForm from '@/app/_components/models/ModelForm';
import React, { useState, FC } from 'react';

const ModelPage: FC = () => {
  const [model, setModel] = useState<Model>({
    modelName: '',
    fields: [],
    createdBy: '',
    id: '',
  });

  return (
    <div className='mx-auto w-1/2 space-y-4'>
      <ModelForm model={model} setModel={setModel} />
      <FieldsList fields={model.fields} />
      <GenerateModelButton />
    </div>
  );
};

export default ModelPage;
