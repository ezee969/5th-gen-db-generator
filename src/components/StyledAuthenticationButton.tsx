import React from 'react';

type StyledAuthenticationButtonProps = {
  children: React.ReactNode;
  isLoading: boolean;
};

const StyledAuthenticationButton = ({
  children,
  isLoading,
}: StyledAuthenticationButtonProps) => {
  return (
    <button
      disabled={isLoading}
      type='submit'
      className='w-full rounded-md bg-slate-800 px-4 py-2 font-medium text-white transition-all hover:bg-slate-700 active:bg-slate-900'
    >
      {children}
    </button>
  );
};

export default StyledAuthenticationButton;
