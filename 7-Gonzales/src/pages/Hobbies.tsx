import React from 'react';

const Hobbies: React.FC = () => {
  const hobbiesList = [
    'Reading books',
    'Playing guitar',
    'Hiking',
    'Cooking',
    'Photography',
    'Gardening',
    'Watching movies',
    'Cycling',
  ];

  return (
    <div>
      <h2>My Hobbies</h2>
      <ul>
        {hobbiesList.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
