import React, { FC } from 'react';
import { BeatLoader, ClockLoader } from 'react-spinners';

interface FormButtonsProps {
  addFieldToModel: () => void;
  isLoading: boolean;
}

const FormButtons: FC<FormButtonsProps> = ({
  addFieldToModel,
  isLoading,
}: FormButtonsProps) => {
  const disabledStyles = 'opacity-70 cursor-not-allowed';
  const SubmitButtonContent = isLoading ? (
    <>
      <BeatLoader size={5} color='white' />
      Saving
    </>
  ) : (
    'Save Model'
  );

  return (
    <div className='flex justify-between space-x-4'>
      <button
        type='button'
        className={`rounded bg-blue-600 px-4 py-2 uppercase text-white transition hover:bg-blue-500`}
        onClick={addFieldToModel}
        disabled={isLoading}
      >
        Add Field
      </button>
      <button
        type='submit'
        className={`flex items-center gap-2 rounded bg-green-600 px-4 py-2 font-medium uppercase transition hover:bg-green-500  ${
          isLoading && disabledStyles
        }`}
      >
        {SubmitButtonContent}
      </button>
    </div>
  );
};

export default FormButtons;
