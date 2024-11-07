
import styles from './Input.module.css';

export function Input() {
    return (
        <div className={styles['container']}>
            <input className={styles['input']} name="name" type="text" required/>
            <input className={styles['input']} name="password" type="password" minlength="8" required/>
        </div>
    )
  }