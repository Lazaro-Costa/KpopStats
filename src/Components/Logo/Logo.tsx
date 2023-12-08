import React from 'react';
import LogoBase from './LogoBase';
import LogoMouseOver from './LogoMouseOver';

const Logo = () => {
  const [mouseOver, setMouseOver] = React.useState(false);

  const handleMouseEnter = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <>
      {!mouseOver ? <LogoBase onMouseEnter={handleMouseEnter} /> : <LogoMouseOver onMouseLeave={handleMouseLeave}/>}
    </>
  );
};

export default Logo;
