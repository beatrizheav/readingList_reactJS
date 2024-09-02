import React from "react";
import styles from "./book.module.css";

interface BooksProps {
  link: string;
  title: string;
}

const Book: React.FC<BooksProps> = ({ link, title }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={link} alt={title}></img>
    </div>
  );
};

export default Book;
