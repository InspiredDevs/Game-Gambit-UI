const Page = () => {
  return (
    <div className='max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg'>
      <h1 className='text-3xl font-bold text-center mb-6 text-white'>
        Create New Password
      </h1>

      <form className='space-y-6'>
        <div>
          <label className='block text-gray-300 mb-1'>Password</label>
          <p className='text-sm text-gray-400 mb-2'>
            Password must be at least 7 characters, include a special character
            and a number
          </p>
          <input
            type='password'
            className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
        </div>

        <div>
          <label className='block text-gray-300 mb-1'>Confirm Password</label>
          <p className='text-sm text-gray-400 mb-2'>Password must match</p>
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
      </form>
    </div>
  );
};

export default Page;
