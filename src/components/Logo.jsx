import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img
        className={styles.logoImg}
        src="/Global-Guide-Logo.svg"
        alt="take off trips logo"
      />
      <span className={styles.logoText}>Global Guide</span>
    </Link>
  );
}

export default Logo;
