import AppList from "../AppList/AppList";
import styles from "./Section.module.css";
export default function Section({ logos }) {
  return (
    <div className={styles.content}>
      <h1>LIFE IS WASTED ON THE LIVING</h1>
      <h3>
        Sign in <br />
        with
      </h3>
      <AppList logos={logos} />
    </div>
  );
}
