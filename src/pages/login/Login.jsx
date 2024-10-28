import { Icon } from "../../components/Icon/Icon";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <section className={styles.loginSection}>
          <header className={styles.formHeader}>
            <h3>Sign in</h3>
          </header>
          <form className={styles.loginForm}>
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button type="submit" className={styles.submitButton}>
              Submit
            </Button>
          </form>
          <footer className={styles.formFooterSocials}>
            <h5 className={styles.socialLinksLabel}>Or sign in with</h5>
            <div className={styles.socialLinks}>
              <a href="/" target="_blank">
                <Icon name="facebook" />
              </a>
              <a href="/" target="_blank">
                <Icon href="/" target="_blank" name="instagram" />
              </a>
              <a href="/" target="_blank">
                <Icon href="/" target="_blank" name="linkedin" />
              </a>
            </div>
          </footer>
        </section>
        <section className={styles.welcomeSection}>
          <header className={styles.welcomeHeader}>
            <h4>Welcome back!</h4>
          </header>
          <p className={styles.welcomeText}>
            Welcome back! We are so happy to have you here. Its great to see you
            again. We hope you had a safe and enjoyable time away.
          </p>
          <Button className={styles.signUpButton} variant="rounded">
            No account yet? Sign Up
          </Button>
        </section>
      </div>
    </div>
  );
};
