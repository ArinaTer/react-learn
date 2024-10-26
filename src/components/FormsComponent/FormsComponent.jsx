import styles from "./FormsComponent.module.css";
import { FormTitle } from "./FormTitle";
import { FormWelcome } from "./FormWelcome";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button/Button";
import { SocialsIcon } from "../common/SocialsIcon/SocialsIcon";



export function FormsComponent() {
  return (
    <div className={styles["formContainer"]}>
      <div className={styles["formWrapper"]}>
      <div className={styles["even"]}>
        <FormTitle />
        <form className={styles["form"]} action="">
          <Input />
          <Button />
        </form>
        <SocialsIcon />
      </div>
      <FormWelcome />
      </div>
    </div>
  );
}
