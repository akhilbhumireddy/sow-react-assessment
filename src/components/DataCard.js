import React from "react";
import styles from "../styles/DataCard.module.css";

const DataCard = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DataCard;
