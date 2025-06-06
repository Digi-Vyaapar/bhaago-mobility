import React from 'react';

const LeadershipTeam = () => {
  const leaders = [
    {
      name: 'Aditya Goyal',
      position: 'Founder & MD',
      image: '/team/aditya.png' 
    },
    {
      name: 'BS Jolly',
      position: 'Director, R&D & Innovation',
      image: '/team/jolly.png' 
    },
    {
      name: 'Mukesh Sehgal',
      position: 'Group CFO',
      image: '/team/mukesh.png' 
    },
    {
      name: 'Ishaan Bedi',
      position: 'Sr. Advisor - Fleet',
      image: '/team/ishaan.png' 
    },
    {
      name: 'Saurabh Goyal',
      position: 'Sr. Advisor – Strategic Initiatives',
      image: '/team/saurabh.png' 
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-stone-800 text-center mb-6">Team</h2>
      <div className="flex flex-wrap justify-center gap-4 md:space-x-4">
        {leaders.map((leader, index) => (
          <div key={index} className="w-full sm:w-52 flex flex-col items-center">
            <div className="w-48 h-64 mb-4 overflow-hidden rounded-lg bg-[#E9592A] flex items-end">
              <img 
                src={leader.image} 
                alt={`${leader.name}`}
                className="w-full object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-stone-800 mb-1">{leader.name}</h3>
              <p className="text-lg text-stone-700">{leader.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
