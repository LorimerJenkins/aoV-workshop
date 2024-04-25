import React from "react";
import styles from "../styles/ImageDisplay.module.css";
import { Inika } from "next/font/google";
const inika = Inika({ subsets: ["latin"], weight: ["400", "700"] });

interface Image {
  url: string;
  title: string;
  artist: string;
  year: number;
}

interface ImageDisplayProps {
  mainImage: Image;
  thumbnails: Image[];
  onShuffle: () => void;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({
  mainImage,
  thumbnails,
  onShuffle,
}) => {
  return (
    <div className={styles.imageDisplay}>
      <img
        className={styles.mainImage}
        src={mainImage.url}
        alt={mainImage.title}
      />
      <div className={styles.imageInfo}>
        <h2>{mainImage.title}</h2>
        <p>
        {mainImage.year}, {mainImage.artist}
        </p>
        <button className={`${styles.tipButton} ${inika.className}`}>
          TIP
        </button>
      </div>
      <div className={styles.thumbnails}>
        {thumbnails.map((thumbnail, index) => (
          <img key={index} src={thumbnail.url} alt={thumbnail.title} />
        ))}
      </div>
    </div>
  );
};

export default ImageDisplay;
