"use client"

import styles from '../styles/modal.module.css';
import closeIcon from '/public/icons/water_spray.png'
import ContactCard from './ContactCard';

export default function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <>
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button onClick={onClose} className={styles.closeButton}>
                        <img src={closeIcon.src} alt="Close" className={styles.iconImage} />
                    </button>
                    <h3>Contact Info</h3>
                    <div className={styles.cardContainer}>
                        <ContactCard />
                    </div>
                </div>
            </div>
        </>
    )
}