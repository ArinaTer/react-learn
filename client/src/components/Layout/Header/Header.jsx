import styles from "./Header.module.css";
import logo from "../../../assets/images/logo.svg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Logo } from "../../Logo/Logo";
import { useAuth } from "../../../context/AuthContext";

const setActive = ({ isActive }) =>
  isActive ? `${styles.item} ${styles.active}` : styles.item;

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <nav className={styles.list}>
            <NavLink to="/" className={setActive}>
              Home
            </NavLink>
            <NavLink to="/about" className={setActive}>
              About
            </NavLink>
            <NavLink to="/contact" className={setActive}>
              Contacts
            </NavLink>
            <NavLink to="/blog" className={setActive}>
              Blog
            </NavLink>
          </nav>
        </div>
        <div className={styles.right}>
          {isAuthenticated ? (
            <button onClick={handleLogout} className={styles.signinLink}>
              Logout
            </button>
          ) : (
            <div className={styles.signin}>
              <Link className={styles.signinLink} to="/login">
                Sign In
              </Link>
            </div>
          )}
          <Link className={styles.logo} to="/">
            <Logo className={styles.img} src={logo} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};