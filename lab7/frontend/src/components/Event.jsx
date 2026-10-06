import React from 'react';

const MyButton = () => {
  const handleClick = () => {
    console.log("Button was clicked!");
    alert("You clicked the button!");
  };

  return (

    <button style={{height: "40px", width: "100px"}} onClick={handleClick}>
      Click Me
    </button>
  );
};

const Event = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <MyButton />
    </div>
  );
};

export default Event;
