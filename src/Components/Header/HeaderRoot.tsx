import React, { useState, useEffect } from 'react';

const HeaderRoot: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`glass border-glass-b text-slate-50 w-full h-16 fixed top-0 transition-all duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 -top-16'
      }`}
    >
      <div className="h-full flex items-center justify-center">
        Header
      </div>
    </header>
  );
};

export default HeaderRoot;
