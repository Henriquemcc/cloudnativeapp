import styles from "@/styles/Home.module.css";

export const metadata = {
  title: "Cloud Native App",
  description: "Cloud Native App",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Welcome to Cloud Native App!</h1> 
      </div>
    </main>
  );
}