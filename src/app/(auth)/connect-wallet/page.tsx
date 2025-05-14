type Props = {};
const Page = (props: Props) => {
  return (
    <div className='max-w-md mx-auto p-6 bg-[#0F0F0F] rounded-lg shadow-lg'>
      <h2 className='text-[18px] font-bold text-center mb-2 text-white'>
        Connect Wallet
      </h2>
      <p className='text-center text-sm text-[#737373] mb-8'>
        A wallet connection is required to play matches
      </p>

      <button className='bg-[#AB33C6] text-white w-full py-2 rounded-full'>
        Connect Wallet
      </button>
    </div>
  );
};
export default Page;
