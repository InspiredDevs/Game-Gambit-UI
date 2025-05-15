const Page = () => {
  return (
    <div className='max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg'>
      <h1 className='text-3xl font-bold text-center mb-2 text-white'>
        Sign In
      </h1>
      <p className='text-center text-gray-300 mb-8'>Welcome Back</p>

      <form className='space-y-6'>
        <div>
          <label className='block text-gray-300 mb-1'>Email Address</label>
          <input
            type='email'
            className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
        </div>

        <div>
          <label className='block text-gray-300 mb-1'>Password</label>
          <input
            type='password'
            className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
        </div>

        <div className='pt-4'>
          <button
            type='submit'
            className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition duration-200'
          >
            Continue
          </button>
        </div>

        <p className='text-center text-gray-400'>
          Don't have an account?{" "}
          <a href='#' className='text-purple-400 hover:underline'>
            Sign up
          </a>
        </p>

        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-600'></div>
          </div>
          <div className='relative flex justify-center'>
            <span className='px-2 bg-gray-800 text-sm text-gray-400'>
              Or Sign in with
            </span>
          </div>
        </div>

        {/* Social login buttons would go here */}
      </form>
    </div>
  );
};

export default Page;
