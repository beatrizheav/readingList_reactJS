import React from "react";
import styles from "./subtitle.module.css";

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return <h1 className={styles.subtitle}>{text}</h1>;
};

export default Subtitle;
