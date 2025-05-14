const SignUp = () => {
  return (
    <div className='p-3 md:p-6 bg-[#0F0F0F] rounded-lg shadow-lg max-w-[750px]'>
      <h1 className='text-[18px] font-bold text-center mb-2 text-white'>
        Sign Up
      </h1>
      <p className='text-center text-[#525252] text-sm mb-8'>Join the Fight!</p>

      <form className='space-y-3 md:space-y-6'>
        <div className='flex flex-col md:flex-row gap-3'>
          <div className='flex-1'>
            <label className='block text-[#A6A6A6] text-sm mb-1'>
              Username
            </label>
            <input
              type='text'
              placeholder='Choose a username'
              className='w-full px-4 py-2 bg-[#0D0D0D] border border-[#1F1F1F] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#AB33C6] placeholder:text-[#525252] text-sm flex-1'
            />
          </div>

          <div className='flex-1'>
            <label className='block text-[#A6A6A6] text-sm mb-1'>
              Email Address
            </label>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full px-4 py-2 bg-[#0D0D0D] border border-[#1F1F1F] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#AB33C6] placeholder:text-[#525252] text-sm flex-1'
            />
          </div>
        </div>
        <div className='flex gap- flex-col md:flex-row'>
          <div className='flex-1'>
            <label className='block text-[#A6A6A6] text-sm mb-1'>
              Password
            </label>
            <input
              type='password'
              className='w-full px-4 py-2 bg-[#0D0D0D] border border-[#1F1F1F] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#AB33C6] placeholder:text-[#525252] text-sm flex-1'
            />
            <p className='text-xs text-white/20 mt-2 mb-3 md:mb-0'>
              Password must be at least 7 characters, include a special
              character and a number
            </p>
          </div>

          <div className='flex-1'>
            <label className='block text-[#A6A6A6] text-sm mb-1'>
              Confirm Password
            </label>
            <input
              type='password'
              className='w-full px-4 py-2 bg-[#0D0D0D] border border-[#1F1F1F] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#AB33C6] placeholder:text-[#525252] text-sm flex-1'
            />
            <p className='text-xs text-white/20 mt-2'>
              Confirm password must match password
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='age-check'
            className='h-4 w-4 text-[#AB33C6] focus:ring-[#AB33C6] border-[#1F1F1F] rounded'
          />
          <label htmlFor='age-check' className='ml-2 text-[#525252] text-xs'>
            I am 16+ years old
          </label>
        </div>

        <div className='pt-4 flex flex-col md:flex-row gap-4 items-center text-sm'>
          <p className='text-center text-gray-400 flex-1'>
            Already have an account?{" "}
            <a href='#' className='text-[#AB33C6] hover:underline'>
              Sign in
            </a>
          </p>
          <button
            type='submit'
            className='flex-1 bg-[#AB33C6] hover:bg-[#AB33C6] text-white font-bold py-3 px-4 rounded-md transition duration-200'
          >
            Continue
          </button>
        </div>

        <p className='text-xs text-[#525252] text-center mt-4 md:mt-0'>
          By creating a new account, you agree to <br /> Game Gambit's{" "}
          <span className='text-[#AB33C6]'>Terms & Conditions</span> and confirm
          you are 18+
        </p>
      </form>
    </div>
  );
};

export default SignUp;
