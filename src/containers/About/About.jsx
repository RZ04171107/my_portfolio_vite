import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../constants';

const abouts = [
  {
    title: 'Hi, I am a recent web development graduate.',
    description:
      'Although I was unable to work for nearly a year due to illness, I have kept up with the latest developments in the field and honed my skills through self-study and personal projects.',

    imgUrl: images.about01,
  },
  {
    title: 'Web development',
    description:
      'I have a strong understanding of both front-end and back-end web development, and I am eager to start my career as a junior web developer and make a positive impact through my work.',

    imgUrl: images.about02,
  },
  {
    title: 'In my free time',
    description:
      'I enjoy reading, fishing, listening to music and playing video games. Also, I am learning French since it will make my life much easier in Montreal.',

    imgUrl: images.about03,
  },
];

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        About <span> me</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
