"use client"

import styles from '../styles/contactcard.module.css';
import Image from 'next/image';
import GithubIcon from '/public/icons/git.svg';
import MailIcon from '/public/icons/mail.svg';
import TumblrIcon from '/public/icons/tumblr.svg';
import YoutubeIcon from '/public/icons/yt.svg'

export default function ContactCardLeo() {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.profileImageWrapper}>
                    <Image
                        className={styles.profileImage}
                        alt="Profile Picture"
                        src="/profile_pics/me.png"
                        width={80}
                        height={80}
                    />
                </div>
                <h3 className={styles.name}>LeoReadss</h3>
                <div className={styles.socialIcons}>
                    <a href="mailto:leoreadss1941@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    </a>
                    <a href="https://leoreadss.tumblr.com/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    </a>
                    <a href="https://github.com/Valentina-Maraio" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    </a>
                    <a href="https://youtu.be/phAmY7ZgeN4" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    </a>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.profileImageWrapper}>
                    <Image
                        className={styles.profileImage}
                        alt="Profile Picture"
                        src="/profile_pics/liv.jpg"
                        width={80}
                        height={80}
                    />
                </div>
                <h3 className={styles.name}>Chaoticlivi</h3>
                <div className={styles.socialIcons}>
                    <a href="mailto:chaoticlivi@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    </a>
                    <a href="https://www.tumblr.com/ineffable-endearments" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                    </a>
                </div>
            </div>
        </>
    )
}