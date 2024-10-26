import styles from "./SocialsIcon.module.css";
import facebook from "../../img/facebook.svg";
import instagran from "../../img/instagran.svg";
import linkidin from "../../img/linkidin.svg";

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
