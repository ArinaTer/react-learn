

import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export const NotFound = () => {

  return (
    <div className={styles.container}>Страница не найдена <Link className={styles.link} to="/">Вернуться на главную страницу</Link></div>
  );
};
