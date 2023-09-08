import { useState, useEffect } from 'react';

const useCartTaskDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  const toggleCart = () => {
    console.log('Toggling cart');
    setIsOpen(true);
  };
 
  return { isOpen, toggleCart };
};

export default useCartTaskDetails;
