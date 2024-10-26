import styles from './HeaderComponent.module.css';

export function HeaderComponentNav() {
    return (
        <li className={styles['list']}>
            <ul className={styles['item']}><a href="/home">home</a></ul>
            <ul className={styles['item']}><a href="/about">about</a></ul>
            <ul className={styles['item']}><a href="/contacts">contacts</a></ul>
        </li>
    );
  }