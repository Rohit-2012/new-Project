import styles from "../Components/NavBar.module.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <ul>
        <li>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/About"} style={{ textDecoration: "none" }}>
            About us
          </Link>
        </li>
        <li>
          <Link to={"/Login"} style={{ textDecoration: "none" }}>
            Log in
          </Link>
        </li>
        <li>
          <Link to={"/Register"} style={{ textDecoration: "none" }}>
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}
