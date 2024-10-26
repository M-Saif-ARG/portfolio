import React from 'react';
import '../components/modal.css';

const Modal = ({ isOpen, onClose, images, activeImageIndex, setActiveImageIndex }) => {
    if (!isOpen) return null;

    const handleNextImage = () => {
        setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePreviousImage = () => {
        setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>✖</button>
                <div className="modal-image-container">
                    <button className="nav-button left" onClick={handlePreviousImage}>❮</button>
                    <img 
                        src={images[activeImageIndex]} 
                        alt={`View of item ${activeImageIndex + 1}`} // Updated alt text
                        className="modal-image" 
                    />
                    <button className="nav-button right" onClick={handleNextImage}>❯</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
