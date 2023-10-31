interface Props {
  modelName: string
}

export default function ModelDetailHeader({ modelName }: Props) {
  return (
    <div className='sm:flex sm:items-center'>
      <div className='sm:flex-auto'>
        <h1 className='text-base font-semibold leading-6 text-white'>
          {modelName}
        </h1>
        <p className='mt-2 text-sm text-gray-300'>
          A list of all the fields in the {modelName} model.
        </p>
      </div>
    </div>
  );
}