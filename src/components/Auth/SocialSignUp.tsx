'use client';

import { signIn } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialSignUp = () => {
  const socialAction = (action: string) => {
    signIn(action, { callbackUrl: '/profile' });
  };

  return (
    <div className="flex flex-col gap-4 mt-3">
      <button
        type="button"
        onClick={() => socialAction('google')}
        className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
      >
        <FaGoogle className="h-5 w-5" />
        <span className="ml-2">Continue with Google</span>
      </button>

      <button
        type="button"
        onClick={() => socialAction('github')}
        className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
      >
        <FaGithub className="h-5 w-5" />
        <span className="ml-2">Continue with GitHub</span>
      </button>
    </div>
  );
};

export default SocialSignUp;