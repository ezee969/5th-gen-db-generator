'use client';
import { useRouter } from 'next/navigation';
// Utils
import signUp from '@/firebase/auth/signup';
import useField from '@/hooks/useField';
// Types
import { FormEvent } from 'react';
import Link from 'next/link';

const SignUpForm = () => {
  const router = useRouter();
  const email = useField('text');
  const password = useField('password');

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await signUp(
      email.attributes.value,
      password.attributes.value
    );

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/');
  };
  return (
    <form onSubmit={handleForm}>
      <div className='mb-6'>
        <label htmlFor='username' className='mb-2 block font-medium '>
          Username
        </label>
        <input
          id='username'
          {...email.attributes}
          className='w-full rounded border border-slate-400  p-2'
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='password' className='mb-2  block font-medium'>
          Password
        </label>
        <input
          id='password'
          {...password.attributes}
          className='w-full rounded border border-slate-400 p-2'
        />
      </div>
      <p className='mb-6  text-gray-500'>
        Already have an account?{' '}
        <Link
          className='font-medium text-slate-800  hover:underline'
          href='/signin'
        >
          Log In
        </Link>
      </p>
      {/* TO DO: Add loading spinner or any indicator and disable the button while sign up is loading, create a reusable component to use in the sign in */}
      <button
        type='submit'
        className='w-full rounded-md bg-slate-800 px-4 py-2 font-medium text-white transition-all hover:bg-slate-700 active:bg-slate-900'
      >
        Register
      </button>
    </form>
  );
};

export default SignUpForm;
