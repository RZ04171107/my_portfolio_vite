import React from 'react';
import './Work.scss';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { images } from '../../constants';
import AppWrap from '../../wrapper/AppWrap';

const Work = () => {
  const works = [
    {
      title: 'Keeper',
      description:
        'A MERN stack note project, I am implementing authentication in it...',
      projectLink: '',
      codeLink: 'https://github.com/RZ04171107/Keep_vite',
      imgUrl: images.keeper,
    },
    {
      title: 'Fishing Lover',
      description:
        'Technologies: React.js, Styled Components, bootstrap, CSS, Node.js, MongoDB, Express',
      projectLink: 'https://github.com/RZ04171107/FishingApp',
      codeLink: 'https://github.com/RZ04171107/FishingApp',
      imgUrl: images.fishing,
    },
    {
      title: 'TinDog',
      description: 'Bootstrap exercise project',
      projectLink: 'https://rz04171107.github.io/bootstrap_ex_tindog/',
      codeLink: 'https://github.com/RZ04171107/bootstrap_ex_tindog',
      imgUrl: images.tindog,
    },
  ];

  return (
    <>
      <h2 className='head-text'>My Works</h2>

      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {works.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, 'work');
