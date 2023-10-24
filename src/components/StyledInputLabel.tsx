import React from 'react';

type StyledInputLabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};
const StyledInputLabel = ({ htmlFor, children }: StyledInputLabelProps) => {
  return (
    <label htmlFor={htmlFor} className='mb-2 block font-medium '>
      {children}
    </label>
  );
};

export default StyledInputLabel;
