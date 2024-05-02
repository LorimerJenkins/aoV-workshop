import React from "react";
import styles from "../styles/ImageDisplay.module.css";
import { Inika } from "next/font/google";
import { transferAR } from "../arweaveUtils/transferAR";
import { useApi } from "arweave-wallet-kit";
import Image from "next/image";

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
  const api = useApi();

  const sendTip = async () => {
    try {
      const quantity = "0.00001";
      const recipient = "79PC6eRRgSTxuaIQH_Fj6MqwBIvgkmw788p_j95hf98";
      await transferAR(api, quantity, recipient);
    } catch (error: any) {
      console.error("Error sending tip:", error);
      if (error.message === "Arweave Wallet not connected") {
        alert("Please connect your Arweave Wallet to send a tip.");
      } else {
        alert("Failed to send tip. Please try again.");
      }
    }
  };

  return (
    <div className={styles.imageDisplay}>
      <Image
        className={styles.mainImage}
        src={mainImage.url}
        alt={mainImage.title}
        height={100}
        width={200}
      />
      <div className={styles.imageInfo}>
        <h2>{mainImage.title}</h2>
        <p>
          {mainImage.year}, {mainImage.artist}
        </p>
        <button
          className={`${styles.tipButton} ${inika.className}`}
          onClick={sendTip}
        >
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
