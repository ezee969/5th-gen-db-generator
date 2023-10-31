interface Props {
  fields: Field[];
}

const TableCell = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <td
    className={`whitespace-nowrap border border-gray-700 px-3 py-4 text-sm text-gray-300 ${className}`}
  >
    {children}
  </td>
);

const TableHeader = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <th
    className={`border border-gray-700 bg-gray-800 px-3 py-3.5 text-left text-sm font-semibold text-white ${className}`}
  >
    {children}
  </th>
);

export default function ModelDetailTable({ fields }: Props) {
  return (
    <table className='min-w-full divide-y divide-gray-600 overflow-hidden rounded-lg bg-gray-900 shadow-lg'>
      <thead>
        <tr>
          <TableHeader>Field Name</TableHeader>
          <TableHeader>Field Type</TableHeader>
          <TableHeader>Not Null</TableHeader>
          <TableHeader>Unique</TableHeader>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-600'>
        {fields.map((field: Field, index: number) => (
          <tr key={index}>
            <TableCell className='font-medium'>{field.fieldName}</TableCell>
            <TableCell>{field.fieldType}</TableCell>
            <TableCell>{field.notNull ? 'Yes' : 'No'}</TableCell>
            <TableCell>{field.unique ? 'Yes' : 'No'}</TableCell>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
