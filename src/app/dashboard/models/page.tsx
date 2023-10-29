'use client';
import FieldsList from '@/app/_components/models/FieldsList';
import GenerateModelButton from '@/app/_components/models/GenerateModelButton';
import ModelForm from '@/app/_components/models/ModelForm';
import React, { useState, FC } from 'react';

interface Field {
  fieldName: string;
  fieldType: string;
  size: string;
  defaultValue: string;
  notNull: boolean;
  unique: boolean;
  primaryKey: boolean;
}

interface Model {
  modelName: string;
  fields: Field[];
}

const ModelPage: FC = () => {
  const [model, setModel] = useState<Model>({ modelName: '', fields: [] });

  return (
    <div className='mx-auto w-1/2 space-y-4'>
      <ModelForm model={model} setModel={setModel} />
      <FieldsList fields={model.fields} />
      <GenerateModelButton />
    </div>
  );
};

export default ModelPage;
