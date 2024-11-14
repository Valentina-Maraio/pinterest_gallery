import styles from '../styles/gallery.module.css'
import data from '../data/data.json'

export default function Gallery() {
  return (
    <div className={styles.container}>
      {data.map((image) => (
        <div key={image.id} className={styles.imageItem}>
          <img src={image.src} alt={`Image ${image.id}`} />
        </div>
      ))}
    </div>
  );
}