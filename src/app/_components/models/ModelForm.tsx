import React, { FC, ChangeEvent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

interface Props {
  model: Model;
  setModel: React.Dispatch<React.SetStateAction<Model>>;
}

const ModelForm: FC<Props> = ({ model, setModel }) => {
  const formik = useFormik({
    initialValues: {
      fieldName: '',
      fieldType: 'String',
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
    onSubmit: () => console.log(model),
  });

  const addFieldToModel = () => {
    if (formik.values.fieldName.trim() === '') {
      return;
    }

    setModel((prevModel) => ({
      ...prevModel,
      fields: [...prevModel.fields, formik.values],
    }));

    formik.resetForm();
  };

  const handleModelNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setModel((prevModel) => ({
      ...prevModel,
      modelName: value,
    }));
  };

  return (
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

      <div className='space-y-2'>
        <label
          htmlFor='fieldName'
          className='block text-sm font-medium text-gray-300'
        >
          Field name
        </label>
        <input
          id='fieldName'
          type='text'
          className='mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white'
          {...formik.getFieldProps('fieldName')}
        />
      </div>

      <div className='space-y-2'>
        <label
          htmlFor='fieldType'
          className='block text-sm font-medium text-gray-300'
        >
          Field type
        </label>
        <select
          id='fieldType'
          className='mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white'
          {...formik.getFieldProps('fieldType')}
        >
          <option value='INT'>INT</option>
          <option value='VARCHAR'>VARCHAR</option>
          <option value='BOOLEAN'>BOOLEAN</option>
          <option value='DATE'>DATE</option>
        </select>
      </div>

      <div className='space-y-2'>
        <label
          htmlFor='size'
          className='block text-sm font-medium text-gray-300'
        >
          Size
        </label>
        <input
          id='size'
          type='text'
          className='mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white'
          {...formik.getFieldProps('size')}
        />
      </div>

      <div className='space-y-2'>
        <label
          htmlFor='defaultValue'
          className='block text-sm font-medium text-gray-300'
        >
          Default value
        </label>
        <input
          id='defaultValue'
          type='text'
          className='mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white'
          {...formik.getFieldProps('defaultValue')}
        />
      </div>

      <div className='mb-2 flex items-center'>
        <input
          id='notNull'
          type='checkbox'
          className='mr-2 rounded border border-slate-700 bg-slate-800'
          {...formik.getFieldProps('notNull')}
        />
        <label htmlFor='notNull' className='text-sm font-medium text-gray-300'>
          Not NULL
        </label>
      </div>

      <div className='mb-2 flex items-center'>
        <input
          id='primaryKey'
          type='checkbox'
          className='mr-2 rounded border border-slate-700 bg-slate-800'
          {...formik.getFieldProps('primaryKey')}
        />
        <label
          htmlFor='primaryKey'
          className='text-sm font-medium text-gray-300'
        >
          Primary Key
        </label>
      </div>

      <div className='mb-2 flex items-center'>
        <input
          id='unique'
          type='checkbox'
          className='mr-2 rounded border border-slate-700 bg-slate-800'
          {...formik.getFieldProps('unique')}
        />
        <label htmlFor='unique' className='text-sm font-medium text-gray-300'>
          Unique
        </label>
      </div>

      <div className='flex justify-between space-x-4'>
        <button
          type='button'
          className='rounded bg-blue-600 px-4 py-2 uppercase text-white transition hover:bg-blue-500'
          onClick={addFieldToModel}
        >
          Add Field
        </button>
        <button
          type='submit'
          className='rounded bg-green-600 px-4 py-2  font-bold uppercase transition hover:bg-green-500'
        >
          Save Model
        </button>
      </div>
    </form>
  );
};

export default ModelForm;
