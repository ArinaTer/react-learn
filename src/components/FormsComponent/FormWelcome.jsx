import styles from "./FormsComponent.module.css";
import { SocialsIcon } from "../common/SocialsIcon/SocialsIcon";

export function FormWelcome() {
    return (
      <div className={styles["odd"]}>
        <div className={styles["title"]}>Welcome back!</div>
        <p className={styles["text"]}>
          Welcome back! We are so happy to have you here. Its great to see you
          again. We hope you had a safe and enjoyable time away.
        </p>
        <button type="button" className={styles["button"]}>No account yet? Sign Up</button>
      </div>
    );
  }
  