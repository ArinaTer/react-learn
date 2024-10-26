import styles from './HeaderComponent.module.css';
import logo from '../img/logo.svg'; 

export function HeaderComponentLogo() {
    return (
        <a className={styles['logo']} href="/home">
            <img className={styles['img']} src={logo}/>
        </a>
    );
  }