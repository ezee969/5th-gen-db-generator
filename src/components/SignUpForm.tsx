'use client';
import { useRouter } from 'next/navigation';
// Utils
import signUp from '@/firebase/auth/signup';
import useField from '@/hooks/useField';
// Types
import { FormEvent } from 'react';

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
      <div className='mb-4'>
        <label htmlFor='username' className='block '>
          Username
        </label>
        <input
          id='username'
          {...email.attributes}
          className='w-full rounded border border-black p-2'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='password' className='block '>
          Password
        </label>
        <input
          id='password'
          {...password.attributes}
          className='w-full rounded border border-black p-2'
        />
      </div>
      {/* TO DO: Add loading spinner or any indicator and disable the button while sign up is loading, create a reusable component to use in the sign in */}
      <button
        type='submit'
        className='w-full rounded-md bg-black px-4 py-2 font-medium text-white hover:bg-gray-800'
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
