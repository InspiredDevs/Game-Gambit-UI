const VerificationCode = () => {
  return (
    <div className='max-w-md mx-auto p-6 bg-[#0F0F0F] rounded-lg shadow-lg text-sm'>
      <h2 className='text-[18px] font-bold text-center mb-2 text-white'>
        Verification Code
      </h2>
      <p className='text-center text-gray-300 mb-8 '>Confirm your email</p>

      <div className='space-y-6'>
        <div className='flex gap-2'>
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type='text'
              maxLength={1}
              className='w-full h-12 text-center border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          ))}
        </div>

        <button className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 cursor-pointer'>
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

export default VerificationCode;
