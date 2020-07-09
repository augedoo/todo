import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='py-10'>
      <ul className='flex items-center  text-lg'>
        <li>
          <Link to='/' className='mr-4'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
