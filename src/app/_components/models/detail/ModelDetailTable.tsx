interface Props {
  fields: Field[];
}

export default function ModelDetailTable({ fields }: Props) {
  return (
    <table className='min-w-full divide-y divide-gray-700'>
      <thead>
        <tr>
          <th className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0'>
            Field Name
          </th>
          <th className='px-3 py-3.5 text-left text-sm font-semibold text-white'>
            Field Type
          </th>
          <th className='px-3 py-3.5 text-left text-sm font-semibold text-white'>
            Not Null
          </th>
          <th className='px-3 py-3.5 text-left text-sm font-semibold text-white'>
            Unique
          </th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-800'>
        {fields.map((field: Field, index: number) => (
          <tr key={index}>
            <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0'>
              {field.fieldName}
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-300'>
              {field.fieldType}
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-300'>
              {field.notNull ? 'Yes' : 'No'}
            </td>
            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-300'>
              {field.unique ? 'Yes' : 'No'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
