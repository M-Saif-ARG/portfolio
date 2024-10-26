import React, { useState } from 'react';
import Modal from './Modal'; 
import { motion } from 'framer-motion';
import aiSummarizer1 from "../images/ai-summarizer-1.png";
import aiSummarizer2 from "../images/ai-summarizer-2.png";
import aiSummarizer3 from "../images/ai-summarizer-3.png";
import scm1 from "../images/smart-car-match-1.png";
import scm2 from "../images/smart-car-match-2.png";
import scm3 from "../images/smart-car-match-3.png";
import scm4 from "../images/smart-car-match-4.png";
import scm5 from "../images/smart-car-match-5.png";
import scm6 from "../images/smart-car-match-6.png";
import scm7 from "../images/smart-car-match-7.png";
import scm8 from "../images/smart-car-match-8.png";
import scm9 from "../images/smart-car-match-9.png";
import chat1 from "../images/chat-1.png";
import chat2 from "../images/chat-2.png";
import chat3 from "../images/chat-3.png";
import chat4 from "../images/chat-4.png";
import chat5 from "../images/chat-5.png";
import chat6 from "../images/chat-6.png";

const projects = [
    {
        title: "AI Summarizer",
        technologies: "ReactJS, Rapid API, BootStrap, SweetAlert, Material UI icons",
        description: "AI summarizer that converts lengthy texts into concise summaries using RapidAPI. Accepts user text for summarization, simplifying complex information to enhance understanding.",
        codeLink: "https://github.com/M-Saif-ARG/summarizer.github.io",
        images: [aiSummarizer1, aiSummarizer2, aiSummarizer3],
    },
    {
        title: "Smart Car Match",
        technologies: "MongoDB, ExpressJS, ReactJS, NodeJs, Python, Firebase, Streamlit",
        description: "Developed a web application that improves car buying and renting through machine learning, offering tailored recommendations and market predictions with real-time browsing via Firebase.",
        codeLink: "https://github.com/M-Saif-ARG/smartcarmatch",
        images: [scm1, scm2, scm3, scm4, scm5, scm6, scm7, scm8, scm9],
    },
    {
        title: "AI Chat",
        technologies: "MongoDB, ExpressJS, ReactJS, NodeJs, Gemini API, Image Kit, Clerk",
        description: "Developed an engaging AI chat application using the MERN stack to facilitate seamless communication and enhance user interactions through advanced technology.",
        codeLink: "https://github.com/M-Saif-ARG/AI_CHAT",
        images: [chat1, chat2, chat3, chat4, chat5, chat6],
    }
];

const Projects = () => {
    return (
        <section className="project-portfolio">
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="project-card"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
        >
            <h2>{project.title}</h2>
            <p className="project-tech"><strong>Technologies:</strong> {project.technologies}</p>
            <p className="project-description">{project.description}</p>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="view-code">Click Here to View Code</a>
            
            <div className="project-image-container" onClick={openModal}>
                <img 
                    src={project.images[activeImageIndex]} 
                    alt={`${project.title} screenshot`} 
                    className="project-image" 
                />
            </div>

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                images={project.images} 
                activeImageIndex={activeImageIndex} 
                setActiveImageIndex={setActiveImageIndex} 
            />
        </motion.div>
    );
};

export default Projects;