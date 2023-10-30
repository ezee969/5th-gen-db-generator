import React, { FC, ChangeEvent, useEffect } from 'react';
import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { saveModel } from '@/services/modelService';
import FormField from './FormField';
import FormButtons from './FormButtons';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';

interface Props {
  model: Model;
  setModel: React.Dispatch<React.SetStateAction<Model>>;
}

const ModelForm: FC<Props> = ({ model, setModel }) => {
  const formik = useFormik({
    initialValues: {
      fieldName: '',
      fieldType: 'INTEGER',
      size: '',
      defaultValue: '',
      notNull: false,
      unique: false,
      primaryKey: false,
    } as Field,
    validationSchema: Yup.object({
      fieldName: Yup.string(),
      fieldType: Yup.string(),
      size: Yup.string(),
      defaultValue: Yup.string(),
    }),
    onSubmit: async () => {
      try {
        const session = await getSession();

        const modelWithCreatedBy = {
          ...model,
          createdBy: session?.user?.email as string,
        };

        saveModel(modelWithCreatedBy);
      } catch (e) {
        console.log(e);
      }
    },
  });

  const addFieldToModel = () => {
    if (formik.values?.fieldName.trim() === '') {
      return;
    }

    setModel((prevModel) => ({
      ...prevModel,
      fields: [...prevModel.fields, formik.values],
    }));

    formik.resetForm({
      values: {
        fieldName: '',
        fieldType: 'INTEGER',
        size: '',
        defaultValue: '',
        notNull: false,
        unique: false,
        primaryKey: false,
      },
    });
  };

  const handleModelNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setModel((prevModel) => ({
      ...prevModel,
      modelName: value,
    }));
  };

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className='space-y-4 rounded-sm bg-slate-700 p-4 text-white'
      >
        <div className='space-y-2'>
          <label
            htmlFor='modelName'
            className='block text-sm font-medium text-gray-300'
          >
            Model name
          </label>
          <input
            id='modelName'
            type='text'
            value={model.modelName}
            onChange={handleModelNameChange}
            className='mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white'
          />
        </div>
        <FormField label='Field name' id='fieldName' type='text' />
        <FormField
          label='Field type'
          id='fieldType'
          type='select'
          options={['INTEGER', 'FLOAT', 'DATE', 'STRING', 'BOOLEAN']}
        />
        <FormField label='Size' id='size' type='number' />
        <FormField label='Default value' id='defaultValue' type='text' />
        <FormField label='Not NULL' id='notNull' type='checkbox' />
        <FormField label='Primary Key' id='primaryKey' type='checkbox' />
        <FormField label='Unique' id='unique' type='checkbox' />
        <FormButtons addFieldToModel={addFieldToModel} />
      </form>
    </FormikProvider>
  );
};

export default ModelForm;
