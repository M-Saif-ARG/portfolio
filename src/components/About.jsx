import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="about">
      <motion.div 
        className="about-content"
        initial="hidden" 
        animate="visible" 
        variants={fadeInUp} 
        transition={{ duration: 0.5 }}
      >
        <div className="about-text">
          <motion.h1 variants={fadeInUp} transition={{ duration: 0.5 }}>About Me</motion.h1>
          <motion.p variants={fadeInUp} transition={{ duration: 0.5 }}>
            Passionate web developer eager to learn and implement new technologies and methodologies. Committed to enhancing
            interpersonal skills and achieving personal growth, while making a meaningful impact in the field of web development.
          </motion.p>
          <hr />
          <motion.h1 variants={fadeInUp} transition={{ duration: 0.5 }}>Education</motion.h1>
          <div className="education-container">
            <motion.div className="college-details" variants={fadeInUp} transition={{ duration: 0.5 }}>
              <div className="college-name">Muffakham Jah College of Engineering and Technology</div>
              <div className="degree">Bachelor of Engineering in CSE (Osmania University)</div>
            </motion.div>
            <motion.div className="cgpa-details" variants={fadeInUp} transition={{ duration: 0.5 }}>
              <div>Avg CGPA : <span className="highlight">8.94/10</span></div>
              <div>Expected Graduation : 2025</div>
            </motion.div>
          </div>
          <hr />
          <motion.h1 variants={fadeInUp} transition={{ duration: 0.5 }}>Skills</motion.h1>
          <div className="skills-container">
            <div className="skills-list">
              {['Languages', 'Technologies', 'Operating Systems', 'Developer Tools'].map((category, index) => (
                <motion.div key={index} className="skill-category" variants={fadeInUp} transition={{ duration: 0.5 }}>
                  <h3>{category}</h3>
                  <p>
                    {category === 'Languages' && 'Java, Python, C, HTML, CSS, JavaScript, ReactJS, SQL, R, NodeJS, MongoDB, ExpressJS'}
                    {category === 'Technologies' && 'Git, GitHub'}
                    {category === 'Operating Systems' && 'Windows, Linux (Ubuntu)'}
                    {category === 'Developer Tools' && 'VS Code, Code Blocks, Anaconda, PyCharm, Google Colab, Eclipse, NetBeans'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <hr />
          <motion.h1 variants={fadeInUp} transition={{ duration: 0.5 }}>Certifications & Achievements</motion.h1>
          <div className="certifications-container">
            <ul className="certifications-list">
              {[
                { provider: 'EXCELR', text: 'Fundamentals of Full Stack Development' },
                { provider: 'IBM', text: 'SQL and Relational Databases 101' },
                { provider: 'WIPRO', text: 'JAVA FULL STACK' },
                { provider: 'INFOSYS', text: 'Java Certified Foundations Associate: Java Concepts Features' },
                { provider: 'CodeChef', text: '1411 rating' },
                { provider: 'Coding Ninjas', text: 'Level 8 (Master)' },
                { provider: 'HackerRank', text: 'Java: 5 ★, Python: 3 ★, C Language: 3 ★, SQL: 4 ★, Problem Solving: 3 ★' },
              ].map((cert, index) => (
                <motion.li key={index} variants={fadeInUp} transition={{ duration: 0.5 }}>
                  <span className="provider">{cert.provider}</span> - {cert.text}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
      </motion.div>
    </section>
  );
};

export default About;
