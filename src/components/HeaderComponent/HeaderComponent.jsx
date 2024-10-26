import styles from './HeaderComponent.module.css';
import { HeaderComponentNav } from "./HeaderComponentNav";
import { HeaderComponentLogo } from "./HeaderComponentLogo";


export function HeaderComponent() {
  return (
    <div className={styles['header']}>
      <div className={styles['container']}>
        <HeaderComponentNav />
        <HeaderComponentLogo />
      </div>
    </div>
  );
}