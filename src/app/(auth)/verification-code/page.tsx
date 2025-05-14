export const VerificationCode = () => {
  return (
    <div className='max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold text-center mb-2 text-white'>
        Verification Code
      </h2>
      <p className='text-center text-gray-300 mb-8'>Confirm your email</p>

      <div className='space-y-6'>
        <div className='grid grid-cols-4 gap-2'>
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type='text'
              maxLength={1}
              className='w-full h-12 text-center text-2xl bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          ))}
        </div>

        <button className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition duration-200'>
          Continue
        </button>

        <p className='text-center text-gray-400'>
          Didn't receive a code?{" "}
          <a href='#' className='text-purple-400 hover:underline'>
            Resend
          </a>
        </p>
      </div>
    </div>
  );
};
