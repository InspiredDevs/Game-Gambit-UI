const Page = () => {
  return (
    <div className='max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg'>
      <h1 className='text-3xl font-bold mb-2 text-white'>
        Create your profile
      </h1>
      <p className='text-gray-300 mb-8'>Complete your account</p>

      <div className='space-y-8'>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gray-700 mb-4 flex items-center justify-center text-gray-400'>
            Profile image
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-gray-300 mb-2'>Username</label>
            <input
              type='text'
              value='Username'
              readOnly
              className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white'
            />
          </div>

          <div>
            <label className='block text-gray-300 mb-2'>Email Address</label>
            <div className='flex'>
              <input
                type='email'
                value='Email'
                readOnly
                className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-md text-white'
              />
              <span className='bg-green-600 text-white px-4 py-2 rounded-r-md'>
                Verified
              </span>
            </div>
          </div>
        </div>

        <div>
          <label className='block text-gray-300 mb-2'>Wallet</label>
          <input
            type='text'
            value='OK...'
            readOnly
            className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white'
          />
        </div>

        <div>
          <h3 className='text-xl font-semibold text-white mb-4'>
            Streaming links
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label className='block text-gray-300 mb-2'>Youtube</label>
              <input
                type='text'
                placeholder='Attach youtube link'
                className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>

            <div>
              <label className='block text-gray-300 mb-2'>Tiktok</label>
              <input
                type='text'
                placeholder='Attach tiktok link'
                className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>
          </div>

          <div>
            <label className='block text-gray-300 mb-2'>Twitch</label>
            <input
              type='text'
              placeholder='Attach twitch link'
              className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>
        </div>

        <div className='flex justify-end gap-4 pt-4'>
          <button className='px-6 py-2 border border-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200'>
            Skip
          </button>
          <button className='px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition duration-200'>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
