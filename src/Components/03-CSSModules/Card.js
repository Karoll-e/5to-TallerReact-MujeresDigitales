import React from "react";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Card Title</h2>
      <p className={styles.description}>
        Esta es una descripción del contenido de la tarjeta.
      </p>
      <button className={styles.button}>Click Aqui</button>
    </div>
  );
};

export default Card;
