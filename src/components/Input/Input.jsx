import styles from './Input.module.css';
import React, { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  return <input ref={ref} className={styles.input} {...props} />
})