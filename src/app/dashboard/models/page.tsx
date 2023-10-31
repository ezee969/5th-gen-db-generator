'use client';

import FieldsList from './_components/fieldsList';
import ModelForm from './_components/modelForm';
import React, { useState, FC } from 'react';

const ModelPage: FC = () => {
  const [model, setModel] = useState<Model>({
    modelName: '',
    fields: [],
    createdBy: '',
    id: '',
    relationship: undefined,
  });

  return (
    <div className='mx-auto w-1/2 space-y-4'>
      <ModelForm model={model} setModel={setModel} />
      <FieldsList fields={model.fields} />
    </div>
  );
};

export default ModelPage;
