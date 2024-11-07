import styles from "./SocialsIcon.module.css";
import facebook from "../../assets/img/facebook.svg";
import instagran from "../../assets/img/instagran.svg";
import linkidin from "../../assets/img/linkidin.svg";

export function SocialsIcon() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["title"]}>Or sign in with</div>
      <div className={styles["socials"]}>
        <a className={styles["icon"]} href="/">
          <img className={styles["img"]} src={facebook} />
        </a>
        <a className={styles["icon"]} href="/">
          <img className={styles["img"]} src={instagran} />
        </a>
        <a className={styles["icon"]} href="/">
          <img className={styles["img"]} src={linkidin} />
        </a>
      </div>
    </div>
  );
}
