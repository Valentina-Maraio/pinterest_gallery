"use client"

import Message from "@/components/Message";
import Image from "next/image";
import styles from './page.module.css'
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundContainer}>
        <Image
          src="/aziraphale.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <Logo/>
      <div className={styles.content}>
        <Message />
      </div>
      <Menu/>
    </div>
  );
}
