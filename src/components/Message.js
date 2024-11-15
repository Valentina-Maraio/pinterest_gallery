"use client"

import Gallery from './Gallery';
import styles from '../styles/message.module.css';
import { useState, useEffect } from "react";

export default function Message() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showGallery, setShowGallery] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
            setTimeout(() => setShowText(true), 1500);
            setTimeout(() => setShowGallery(true), 1500);
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <div className={styles.backImage}>
            {showText && (
                <div className={`${styles.textWrapper} ${isLoaded ? styles.loaded : ''}`}>
                    <h2>To the cast and crew of the <span className={styles.special}><h2>Good Omens Finale,</h2></span></h2><br />
                    <h3>You've got us overjoyed that there will be a finale for this story we love so much. Here is a little gallery of thank you notes and tokens of gratitude from the fandom.
                        <br />While many of us want to specifically mention those we've already seen working on Good Omens, it's also truly for everyone who's bringing this finale together. <br />
                        We understand that you might not be able to respond. Still, we hope this gallery can show you how appreciated you are and how enthusiastic the fandom is about your work.
                        <br /> <br />From around the world, thank you!</h3>
                </div>
            )}
            {showGallery && (
                <>
                    <Gallery />
                </>
            )}
        </div>
    )
}