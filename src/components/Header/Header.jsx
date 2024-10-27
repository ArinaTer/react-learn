import styles from './HeaderComponent.module.css';

export const HeaderComponent = () => {
  return (
    <div className={styles['header']}>
      <div className={styles['container']}>
        <ul className={styles['list']}>
          <li className={styles['item']}><a href="/home">home</a></li>
          <li className={styles['item']}><a href="/about">about</a></li>
          <li className={styles['item']}><a href="/contacts">contacts</a></li>
        </ul>
        <a className={styles['logo']} href="/home">
          <img className={styles['img']} src={logo} />
        </a>
      </div>
    </div>
  );
}