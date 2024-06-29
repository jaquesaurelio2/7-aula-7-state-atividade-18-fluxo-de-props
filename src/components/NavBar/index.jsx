import * as React from "react";
import styles from "./index.module.css";

export default function NavBar() {
  const [user, setUser] = React.useState("Fulanx");

  return (
    <header className={styles.navBar}>
      <p>Usuário atual: {user}</p>
    </header>
  );
}
