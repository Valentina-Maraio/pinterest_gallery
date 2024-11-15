"use client"

import { useState } from 'react';
import Modal from './Modal';
import styles from '../styles/menu.module.css'

export default function Menu() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <>
        <footer className={styles.footer}>
            <button className={styles.contactButton} onClick={handleOpenModal}>
                <h3>Contact</h3>
            </button>
        </footer>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
        </>
    )
}