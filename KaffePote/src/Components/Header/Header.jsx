import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import headerImg from "../../../public/header.png";

const Header = () => {
  return (
    <section className={styles.headerbackground}> 
      <img src={headerImg} alt="" />

      <h1>KaffePote</h1>
      <h2>
        Et terapeutisk rum til at interagere med adoptable kaniner, der baner
        vejen for et helt nyt koncept inden for kaninredning, adoption og
        fortalervirksomhed. Slap af og vær ét med kaninerne: nyd en kaffe og
        oplev en unik social oplevelse.
      </h2>

      <div className={styles.buttons}>
        <button>
          <NavLink to="/animal"> Møde kaninerne </NavLink>
        </button>
        <button>
          <NavLink to="/menu"> Menu kostet </NavLink>
        </button>
      </div>
    </section>
  );
};
export default Header;
