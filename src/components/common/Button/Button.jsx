
import styles from './Button.module.css';

export function Button() {

    return (
        <div className={styles['wrapper']}>
            <button className={styles['button']} type="button">Submite</button>
        </div>
    )
  }