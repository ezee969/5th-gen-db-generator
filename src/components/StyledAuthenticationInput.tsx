import React from 'react';

interface AuthenticationInputProps {
  id: string;
  attributes: React.InputHTMLAttributes<HTMLInputElement>;
}

const StyledAuthenticationInput: React.FC<AuthenticationInputProps> = ({
  id,
  attributes,
}) => {
  return (
    <input
      id={id}
      {...attributes}
      className='w-full rounded border border-slate-400 p-2'
    />
  );
};

export default StyledAuthenticationInput;
