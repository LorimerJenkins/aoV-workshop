"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ImageDisplay from "../components/ImageDisplay";
import { Inika } from "next/font/google";
import { ArweaveWalletKit } from "arweave-wallet-kit";

const inika = Inika({ subsets: ["latin"], weight: ["400", "700"] });

const images = [
  {
    url: "/1.svg",
    title: "Blue/Pink",
    artist: "Callum Abbot",
    year: 2020,
  },
  {
    url: "/2.svg",
    title: "Halo",
    artist: "Callum Abbot",
    year: 2021,
  },
  {
    url: "/3.svg",
    title: "Cougar",
    artist: "Callum Abbot",
    year: 2018,
  },
  {
    url: "/4.svg",
    title: "Eat",
    artist: "Callum Abbot",
    year: 2018,
  },
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        shuffleImages();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const shuffleImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const getMainImage = () => {
    return images[currentIndex];
  };

  const getThumbnails = () => {
    const thumbnailIndices = [
      (currentIndex + 1) % images.length,
      (currentIndex + 2) % images.length,
      (currentIndex + 3) % images.length,
    ];
    return thumbnailIndices.map((index) => images[index]);
  };

  return (
    <ArweaveWalletKit
      config={{
        permissions: ["ACCESS_ADDRESS", "SIGN_TRANSACTION"],
      }}
    >
      <div className={inika.className}>
        <Header />
        <ImageDisplay
          mainImage={getMainImage()}
          thumbnails={getThumbnails()}
          onShuffle={shuffleImages}
        />
      </div>
    </ArweaveWalletKit>
  );
};

export default Home;
