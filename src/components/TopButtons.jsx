import React from "react";

function TopButtons({ setQuery }) {
   const cities = [
        {
            id:1,
            title:'Madurai'
        },
        {
            id:2,
            title:'Vellore'
        },
        {
            id:3,
            title:'Qatar'
        },
        {
            id:4,
            title:'Dubai'
        },
        {
            id:5,
            title:'Singapore'
        }
    ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
