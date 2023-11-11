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
    <>
      <ModelForm model={model} setModel={setModel} />
      <FieldsList fields={model.fields} />
    </>
  );
};

export default ModelPage;
