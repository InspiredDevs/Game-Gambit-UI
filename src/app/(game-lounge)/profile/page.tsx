import React from "react";

const GameLoungeProfile: React.FC = () => {
  return (
    <div className='bg-black min-h-screen text-white flex'>
      <div className='w-1/4 p-4'>
        <button className='bg-purple-500 text-white px-4 py-2 rounded w-full mb-2'>
          Home
        </button>
        <button className='bg-purple-500 text-white px-4 py-2 rounded w-full mb-2'>
          Leaderboard
        </button>
        <button className='bg-purple-500 text-white px-4 py-2 rounded w-full mb-2'>
          Matches
        </button>
        <button className='bg-purple-500 text-white px-4 py-2 rounded w-full mb-2'>
          Profile
        </button>
        <button className='bg-purple-500 text-white px-4 py-2 rounded w-full mb-2'>
          Help & Support
        </button>
        <button className='bg-red-500 text-white px-4 py-2 rounded w-full mb-2'>
          Log Out
        </button>
      </div>
      <div className='w-3/4 p-4'>
        <h1 className='text-2xl'>Welcome to Game Gambit</h1>
        <div className='flex space-x-4 mt-4'>
          <div className='bg-gray-800 p-4 rounded-lg w-1/2'>
            <p>Total Amount Earned</p>
            <p className='text-4xl text-cyan-400'>30.00 SOL</p>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg w-1/2'>
            <p>Your Stats</p>
            <p>Games Played: 123</p>
            <p>Games Won: 99</p>
            <p>Games Lost: 33</p>
          </div>
        </div>
        <div className='flex space-x-4 mt-4'>
          <button className='bg-purple-500 text-white px-4 py-2 rounded w-1/2'>
            Start a New Match
          </button>
          <button className='bg-purple-500 text-white px-4 py-2 rounded w-1/2'>
            Invite a Friend
          </button>
        </div>
        <div className='flex space-x-4 mt-4'>
          <div className='bg-gray-800 p-4 rounded-lg w-2/3'>
            <p>Featured Games</p>
            <div className='flex space-x-2'>
              <img
                src='call-of-duty-icon.png'
                alt='Call of Duty'
                className='w-1/3'
              />
              <img
                src='call-of-duty-icon.png'
                alt='Call of Duty'
                className='w-1/3'
              />
              <img
                src='call-of-duty-icon.png'
                alt='Call of Duty'
                className='w-1/3'
              />
            </div>
          </div>
          <div className='bg-purple-500 p-4 rounded-lg w-1/3 text-center'>
            <p>Your Rank</p>
            <div className='bg-blue-800 text-white p-2 rounded-full mt-2'>
              VETERAN
            </div>
            <p>NFT</p>
          </div>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg mt-4'>
          <p>Leaderboard</p>
          <p>Top 10 Players</p>
          <ul>
            <li>1st Mary Gobbo 80%</li>
            <li>2nd Esther Amakiri 79%</li>
            <li>3rd Joseph Seiyefa 78%</li>
            <li>4th Rebecca Kali 77%</li>
            <li>5th James Inatimi 76%</li>
          </ul>
          <p>Your Position #124th Lagos</p>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg mt-4'>
          <p>Match History</p>
          <p>vs Chid356 Won +4 SOL</p>
          <p>vs Esther Won 3 of last 7 games</p>
        </div>
      </div>
    </div>
  );
};

export default GameLoungeProfile;
