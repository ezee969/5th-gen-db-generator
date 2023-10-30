import React, { FC } from 'react';
import { useFormikContext } from 'formik';

interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  options?: string[];
}

const FormField: FC<FormFieldProps> = ({ label, id, type, options }) => {
  const formik = useFormikContext();

  if (type === 'select') {
    return (
      <div className='space-y-2'>
        <label htmlFor={id} className='block text-sm font-medium text-gray-300'>
          {label}
        </label>
        <select
          id={id}
          className='mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white'
          {...formik.getFieldProps(id)}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (type === 'checkbox') {
    return (
      <div className='mb-2 flex items-center'>
        <input
          id={id}
          type={type}
          className='mr-2 rounded border border-slate-700 bg-slate-800'
          {...formik.getFieldProps(id)}
        />
        <label htmlFor={id} className='text-sm font-medium text-gray-300'>
          {label}
        </label>
      </div>
    );
  } else {
    return (
      <div className='space-y-2'>
        <label htmlFor={id} className='block text-sm font-medium text-gray-300'>
          {label}
        </label>
        <input
          id={id}
          type={type}
          className='mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white'
          {...formik.getFieldProps(id)}
        />
      </div>
    );
  }
};

export default FormField;
