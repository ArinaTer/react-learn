import classNames from 'classnames';

import styles from './Button.module.css';

export const Button = ({ className, variant = 'default', children, ...props }) => {
  return (
    <button className={classNames(styles.button, styles[variant], className)} {...props}>{children}</button>
  )
}