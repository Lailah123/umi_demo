import React from 'react';
import styles from './index.css';

export default function () {
  return (
    <>
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      </div>
      <div className={styles.normal}>
        <div className={styles.welcome}></div>
        <ul className={styles.list}>
          <li>
            To get started, edit <code>src/pages/index.tsx</code> and save to
            reload.
          </li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">
              Getting Started
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
