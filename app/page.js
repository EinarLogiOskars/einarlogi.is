import styles from "@/app/styles/home.module.css";

export default function Home() {
  return (
    <main className={styles.hero}>
        <h1 className={styles.heroTitle}>Einar Logi</h1>
        <p className={styles.about}>This is my personal platform where I will keep anything and everything I am working on or interested in.</p>
    </main>
  );
}
