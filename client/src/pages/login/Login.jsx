import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "../../components/Icon/Icon";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { login } from "../../api/api";
import { useAuth } from '../../context/AuthContext';
import styles from "./Login.module.css";

export const Login = () => {
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const result = await login(data);
      if (result.data.status === "success") {
        localStorage.setItem("token", result.data.token);
        authLogin(result.data.token);
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Произошла ошибка при отправке данных.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <section className={`${styles.section} ${styles.loginSection}`}>
          <header className={styles.formHeader}>
            <h3>Sign in</h3>
          </header>
          <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email Обязателен",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Некорректный email",
                },
              })}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Пароль обязателен",
                minLength: {
                  value: 8,
                  message: "Пароль должен быть не менее 8 символов",
                },
              })}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
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
