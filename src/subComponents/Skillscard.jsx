import React from 'react'

const Skillscard = ({ icon, name, experience, level}) => {
  return (
    <div className="flex basis-[24%] flex-col items-center justify-center gap-[0.5rem] ">
      <div>
        <img src={icon} alt={name} />
      </div>
      <div className="text-center">
        <p className="text-[1.75rem] font-bold">{name}</p>
        <p className="text-darkgray">{experience}</p>
        <p className="text-darkgray">{level}</p>
      </div>
    </div>
  );
};

export default Skillscard