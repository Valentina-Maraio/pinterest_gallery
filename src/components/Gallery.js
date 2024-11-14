"use client"

import styles from '../styles/gallery.module.css'
import data from '../data/data.json'
import { useState } from 'react';

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleOverlayClick = (e) => {
    // Close modal if the clicked target is the overlay, not the modal content
    if (e.target.classList.contains(styles.modal)) {
      closeModal();
    }
  };

  return (
    <div className={styles.container}>
      {data.map((image) => (
        <div key={image.id} className={styles.imageItem}>
          <img src={image.src} alt={`Image ${image.id}`} onClick={() => handleModal(image)} />
        </div>
      ))}

      {isOpen && (
        <div className={styles.modal} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            <img src={selectedImage.src} alt={`Image ${selectedImage.id}`} />
            <button className={styles.button} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}