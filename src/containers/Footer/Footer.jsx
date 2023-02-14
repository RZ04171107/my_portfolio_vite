import React from 'react';
import './Footer.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import AppWrap from '../../wrapper/AppWrap';

const Footer = () => {
  return (
    <div>
      <h2 className='head-text'>
        <span>Contact Me</span>
      </h2>
      <div className='app__footer-msg'>
        <p>I'm currently seeking new opportunities.</p>
        <p>Let's connect. I'd love to hear from you!</p>
      </div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className='app__footer-cards'
      >
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:ingridcyou@gmail.com' className='p-text'>
            ingridcyou@gmail.com
          </a>
        </div>

        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +1 (819) 919-2185' className='p-text'>
            +1 (819) 919-2185
          </a>
        </div>

        <div className='app__footer-card'>
          <img src={images.linkedin} alt='linkedin' />
          <a
            href='https://www.linkedin.com/in/ruanqin-zhao/'
            className='p-text'
          >
            My LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Footer, 'contact');
