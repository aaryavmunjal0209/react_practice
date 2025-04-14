import React, { useState } from 'react';

const FunctionalComponent = ({ name }) => {
  const [greeting, setGreeting] = useState(`Hello, ${name}`);

  const handleChangeGreeting = () => {
    setGreeting(`Hey, ${name}`);
  };

  return (
    <div>
      <h3>{greeting}</h3>
      <button onClick={handleChangeGreeting}>Change Greeting</button>
    </div>
  );
};

export default FunctionalComponent;
