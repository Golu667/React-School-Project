import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import for routing

const navbarData = [
  { title: 'Home', path: '/' },
  { title: 'Bus Stops', path: '/BusStop' },
  { title: 'Bus Routes', path: '/BusRoutes' },
  { title: 'Buses', path: '/Buses' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const navVariants = {
    open: {
      opacity: 1,
      width: '100%', // Adjust width for fully open state
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      width: '0', // Adjust width for fully closed state
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <button onClick={toggleNavbar}>School Transportation</button>
      <motion.nav
        className={`navbar ${isOpen ? 'open' : ''}`}
        variants={navVariants}
        animate={isOpen ? 'open' : 'closed'}
      >
        <ul>
          {navbarData.map((item) => (
            <li key={item.title}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
