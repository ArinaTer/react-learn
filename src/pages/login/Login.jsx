import { useState } from "react";
import { Icon } from "../../components/Icon/Icon";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

import styles from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    if (email === "test@gmail.com" && password === "12345678") {
      alert("Пароль введен верно");
    } else {
      alert("Неправильный логин или пароль");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <section className={`${styles.section} ${styles.loginSection}`}>
          <header className={styles.formHeader}>
            <h3>Sign in</h3>
          </header>
          <form className={styles.loginForm} onSubmit={handleForm}>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.loginFormCheckbox}>
              <Input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label>Show password</label>

            </div>
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
        <section className={`${styles.section} ${styles.welcomeSection}`}>
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
