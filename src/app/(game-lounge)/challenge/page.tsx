import React from "react";

const GameLoungeChallenge: React.FC = () => {
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
      <div className='flex space-x-4 p-4'>
        <div className='bg-gray-800 p-4 rounded-lg w-1/3'>
          <p>Pick an opponent</p>
          <button className='bg-purple-500 text-white px-4 py-2 rounded mt-2 w-full'>
            Random
          </button>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg w-2/3'>
          <p>Select Game</p>
          <select className='bg-gray-700 text-white p-2 rounded w-full mt-2'>
            <option>Call of Duty</option>
          </select>
          <input
            className='bg-gray-700 text-white p-2 rounded w-full mt-2'
            placeholder='Enter Player ID'
          />
          <button className='bg-purple-500 text-white px-4 py-2 rounded mt-2 w-full'>
            Challenge
          </button>
          <button className='bg-purple-500 text-white px-4 py-2 rounded mt-2 w-full'>
            Return home
          </button>
        </div>
      </div>
      <div className='bg-gray-800 p-4 rounded-lg w-1/3 mt-4'>
        <p>Top 3 Champions</p>
        <p>Nigeria</p>
        <ul>
          <li>
            1st <span className='text-green-500'>Kingfisher22</span>
          </li>
          <li>
            2nd <span className='text-green-500'>Kingfisher22</span>
          </li>
          <li>
            3rd <span className='text-green-500'>Kingfisher22</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GameLoungeChallenge;
