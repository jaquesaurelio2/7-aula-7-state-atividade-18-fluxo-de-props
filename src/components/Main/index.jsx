import styles from "./index.module.css";

export default function Main() {
  return (
    <section className={styles.main}>
      <p>Bem-vindo, {/** user */}!</p>
    </section>
  );
}
