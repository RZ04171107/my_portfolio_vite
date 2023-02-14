import React, { useState, useEffect } from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import { images } from '../../constants';

const skills = [
  {
    name: 'HTML',
    bgColor: '',
    icon: images.html,
  },
  {
    name: 'css',
    bgColor: '',
    icon: images.css,
  },
  {
    name: 'JavaScript',
    bgColor: '',
    icon: images.javascript,
  },
  {
    name: 'React',
    bgColor: '',
    icon: images.react,
  },
  {
    name: 'Node JS',
    bgColor: '',
    icon: images.node,
  },
  {
    name: 'MongoDB',
    bgColor: '',
    icon: images.mongodb,
  },
  {
    name: 'MySQL',
    bgColor: '',
    icon: images.mysql,
  },
  {
    name: 'Redux',
    bgColor: '',
    icon: images.redux,
  },
  {
    name: 'Git',
    bgColor: '',
    icon: images.git,
  },
  {
    name: 'C++',
    bgColor: '',
    icon: images.cpp,
  },
  {
    name: 'Python',
    bgColor: '',
    icon: images.python,
  },
  {
    name: 'Java',
    bgColor: '',
    icon: images.java,
  },
];
const experiences = [
  {
    year: '2019~2021',
    place: `Bishop's University`,
    name: 'Bachelor of Computer Science',
    desc: 'Gerald Johnston Scholarship, 2020-2021 Academic Year',
  },
  {
    year: '2021/7 ~ 11',
    place: 'Concordia University',
    name: 'Diploma in Full-Stack Web Development',
    desc: `Technologies covered: HTML/CSS, JavaScript,
    React/Redux, Node.js/Express, MongoDB, Git, GitHub`,
  },
  {
    year: '2022/10 ~',
    place: '',
    name: 'Freelance developer',
    desc: '',
  },
];

const Skills = () => {
  // const [experiences, setExperiences] = useState([]);
  // const [skills, setSkills] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className='head-text'>
        <span>Skills</span> & Experience
      </h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className='app__skills-exp'>
          {experiences.map((experience) => (
            <motion.div className='app__skills-exp-item' key={experience.name}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1], x: [100, 0] }}
                    transition={{ duration: 1 }}
                    className='app__skills-exp-work'
                    data-tip
                    data-for={experience.name}
                  >
                    <h4 className='bold-text'>{experience.name}</h4>
                    <p className='p-text'>{experience.place}</p>
                    <p className='p-text'>{experience.desc}</p>
                  </motion.div>
                </>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');
