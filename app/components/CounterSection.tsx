'use client';

import CountUp from "react-countup";

const CounterSection = () => {
  return (
    <div className="p-4 sm:w-1/3 w-1/2">
        <h2 className="title-font font-medium sm:text-5xl text-3xl text-white">
        <CountUp 
            end={940} 
            duration={2.5}
            enableScrollSpy
            scrollSpyOnce
            />
        </h2>
        <p className="leading-relaxed">Users</p>
    </div>
  );
};

export default CounterSection;