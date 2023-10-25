import React from 'react';
// Components/ui
import SignInForm from '@/components/SignInForm';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <>
      <h2 className='mb-10 text-center text-2xl font-bold text-slate-800'>
        Sign in to your account
      </h2>
      <div className='m-auto mb-10 w-[500px] rounded-lg bg-neutral-50 p-10 text-slate-800 shadow-lg'>
        {/* <SignInForm /> */}
      </div>{' '}
      <p className='mb-6 text-center text-gray-500'>
        Not a member?{' '}
        <Link
          className='font-medium text-slate-800  hover:underline'
          href='/signup'
        >
          Create an account for free
        </Link>
      </p>
    </>
  );
};

export default LoginPage;
