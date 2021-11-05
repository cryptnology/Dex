import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p className='text-center'>
        Visit my portfolio website at{' '}
        <a
          href='https://www.cryptnology.dev'
          target='_blank'
          style={{ color: 'white' }}
        >
          cryptnology.dev
        </a>{' '}
        for more projects
      </p>
    </footer>
  );
};

export default Footer;
