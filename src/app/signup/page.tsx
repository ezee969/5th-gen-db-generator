// Components/ui
import Link from 'next/link';
import SignUpForm from '@/components/SignUpForm';

const SignUpPage = () => {
  return (
    <div className='m-auto w-96  rounded-lg bg-white p-8 text-black shadow-lg'>
      <h2 className='mb-4 text-2xl font-bold text-black'>Sign Up</h2>
      <p className='mb-4 text-gray-500'>
        Already have an account?{' '}
        <Link className='text-black hover:underline' href='/signin'>
          Log In
        </Link>
      </p>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
