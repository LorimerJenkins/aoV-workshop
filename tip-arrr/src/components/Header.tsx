import React from "react";
import styles from "../styles/Header.module.css";
import { Inika } from "next/font/google";
const inika = Inika({ subsets: ["latin"], weight: ["400", "700"] });

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoTitle}>
        <img src="/favicon.svg" alt="Logo" />
        <div className={styles.titleContainer}>
          <h1>Tip'arrr</h1>
          <p>(Spacebar to shuffle)</p>
        </div>
      </div>
      <button className={`${styles.loginButton} ${inika.className}`}>
        Login
      </button>
    </header>
  );
};

export default Header;
