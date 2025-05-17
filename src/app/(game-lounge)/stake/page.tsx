import React from "react";

const GameLoungeStake: React.FC = () => {
  return (
    <div className='bg-black min-h-screen text-white flex flex-col items-center '>
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
      <div className='bg-gray-800 p-4 rounded-lg text-center'>
        <p>Sign SOL to Escrow</p>
        <p>Stake 2 SOL vs Kingfisher22</p>
        <p>Phantom prompt...</p>
        <button className='bg-purple-500 text-white px-4 py-2 rounded mt-2 w-full'>
          Sign
        </button>
        <button className='bg-purple-500 text-white px-4 py-2 rounded mt-2 w-full'>
          Cancel
        </button>
      </div>
      <div className='bg-gray-800 p-4 rounded-lg mt-4 text-center'>
        <p>Proposal Accepted</p>
        <p>
          Kingfisher22 has accepted your proposal to wager 2 SOL for this CODM
          match
        </p>
      </div>
    </div>
  );
};

export default GameLoungeStake;
