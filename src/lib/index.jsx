import React from 'react';

const MyDefaultComponent = props => {
  const handleClick = () => {
    console.log('Click!');
  };

  const {color, children} = props;
  return (
    <button onClick={handleClick} style={{color}}>
      {children}
    </button>
  );
};

export const MyNamedComponent = props => {
  const children = props.children ? <span>{props.children}</span> : false;
  return (
    <div>
      <h1>Hello World!</h1>
      {children}
    </div>
  );
};

export default MyDefaultComponent;