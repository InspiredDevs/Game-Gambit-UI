import React from "react";

const GameLoungeProposal: React.FC = () => {
  return (
    <div className='bg-black min-h-screen text-white flex flex-col items-center justify-center'>
      <div className='flex justify-between w-full p-4'>
        <h1 className='text-xl'>Game Lounge</h1>
        <div className='flex space-x-2'>
          <span className='bg-yellow-800 text-yellow-200 text-xs px-2 py-1 rounded'>
            Veteran
          </span>
          <span className='bg-green-800 text-green-200 text-xs px-2 py-1 rounded'>
            JB Jamesbond007
          </span>
        </div>
      </div>
      <div className='bg-gray-800 p-4 rounded-lg w-1/2 text-center'>
        <p>You've received a proposal from to stake</p>
        <p>2 SOL</p>
        <img
          src='call-of-duty-icon.png'
          alt='Call of Duty'
          className='mx-auto mt-2'
        />
        <p>vs Jamesbond007</p>
        <p>Lagos</p>
        <p className='text-gray-400'>Service fee 8% (0.04 SOL)</p>
        <button className='bg-purple-500 text-white px-4 py-2 rounded mt-2 w-full'>
          Accept
        </button>
        <button className='bg-purple-500 text-white px-4 py-2 rounded mt-2 w-full'>
          Counter Offer
        </button>
        <button className='bg-purple-500 text-white px-4 py-2 rounded mt-2 w-full'>
          Reject
        </button>
        <p className='text-gray-400 mt-2'>02 mins 60 secs</p>
      </div>
    </div>
  );
};

export default GameLoungeProposal;
