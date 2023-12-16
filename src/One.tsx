import React, { useState, useEffect } from 'react';

const One = () => {
  const name = 'sdf';
  // const [open, setIsOpen] = useState < any > '';
  const [opne, setIsopen] = useState<any>('');
  const hello1 = 'sdf';
  // const [open, setIsOpen] = useState < any > '';

  useEffect(() => {
    console.log('object');
    setIsopen(Math.random());
  }, []);
  return <div>One</div>;
};

export default One;
