import React, { FC } from 'react';

interface FormButtonsProps {
  addFieldToModel: () => void;
}

const FormButtons: FC<FormButtonsProps> = ({ addFieldToModel }) => {
  return (
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
        className='rounded bg-green-600 px-4 py-2 font-bold uppercase transition hover:bg-green-500'
      >
        Save Model
      </button>
    </div>
  );
};

export default FormButtons;
