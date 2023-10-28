import React, { FC } from 'react';

interface Field {
  fieldName: string;
  fieldType: string;
}

interface Props {
  fields: Field[];
}

const FieldsList: FC<Props> = ({ fields }) => {
  return (
    <div className='rounded-md bg-slate-900 p-4 text-white w-1/2'>
      <h2 className='mb-4 text-lg font-semibold text-gray-300'>
        Fields Added:
      </h2>
      <table className='min-w-full border-collapse'>
        <thead>
          <tr>
            <th className='border bg-slate-800 px-4 py-2 text-gray-300'>
              Name
            </th>
            <th className='border bg-slate-800 px-4 py-2 text-gray-300'>
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index} className={index % 2 ? 'bg-slate-850' : ''}>
              <td className='border px-4 py-2'>{field.fieldName}</td>
              <td className='border px-4 py-2'>{field.fieldType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FieldsList;
