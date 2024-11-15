"use client"

import { useState, useEffect } from "react";
import Image from "next/image"
import styles from '../styles/logo.module.css';
import logo from '../../public/good_omens_logo.png'

export default function Logo() {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);


        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <div className={`${styles.logoWrapper} ${isLoaded ? styles.loaded : ''}`}>
                <Image
                    className={styles.logo}
                    src={logo}
                    alt="Good Omens logo"
                    width={280}
                    height={191}
                    priority
                />
            </div>
        </>
    )
}