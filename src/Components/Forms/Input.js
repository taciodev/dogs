import React from "react";

import styles from "./Input.module.css";

const Input = ({ 
  label, 
  type, 
  name, 
  value, 
  error, 
  onBlur, 
  onChange 
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
