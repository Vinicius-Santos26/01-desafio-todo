import TodoLogo from '../assets/todo-logo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={TodoLogo} alt="Logo todo" />
    </header>
  );
}
