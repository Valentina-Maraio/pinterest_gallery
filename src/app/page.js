import Gallery from "@/components/Gallery";
import Image from "next/image";
import styles from './page.module.css'

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
      <div className={styles.content}>
        <Gallery />
      </div>
    </div>
  );
}
