import React, { useEffect, useState } from 'react';
import image from '../images/hero.png';
import Swal from 'sweetalert2';
import { FaCopy } from 'react-icons/fa'; // Importing the copy icon

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Delay to trigger animation
        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    const toggleDialog = () => {
        setIsDialogOpen((prev) => !prev);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Copied!',
                text: `${text} has been copied to clipboard!`,
                confirmButtonText: 'OK'
            });
        });
    };

    return (
        <main>
            <div className={`leftside ${isVisible ? 'visible' : ''}`}>
                <h3>HELLO</h3>
                <h1>I am Saif Ghori</h1>
                <h2>A Web Developer</h2>
                <a href="#" className='btn' onClick={toggleDialog}>Contact Me</a>
            </div>
            <div className={`rightside ${isVisible ? 'visible' : ''}`}>
                <img src={image} alt="developer" />
            </div>

            {/* Dialog Box for Contact Info */}
            {isDialogOpen && (
                <div className="dialog-overlay" onClick={toggleDialog}>
                    <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={toggleDialog}>✖</button>
                        <h3>Contact Information</h3>
                        <p>
                            Email : 
                            <span className="copy-text" onClick={() => copyToClipboard('msaghori2003@gmail.com')}>
                                 msaghori2003@gmail.com
                                <FaCopy className="copy-icon" />
                            </span>
                        </p>
                        <p>
                            Phone : 
                            <span className="copy-text" onClick={() => copyToClipboard('95506 19583')}>
                                +91 95506 19583
                                <FaCopy className="copy-icon" />
                            </span>
                        </p>
                    </div>
                </div>
            )}

        </main>
    );
};

export default Home;

