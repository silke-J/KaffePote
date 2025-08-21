import styles from "./Contact.module.css";
import contact from "../../assets/contact.png";

const ContactInfo = () => {
  return (
    <section className={styles.Contact}>
      <div className={styles.contactInfo}>
        <h1>Kontakt os</h1>

        <ul>
          <li>
            <a className={styles.link} href="/">
              hello.kaffepote@gmail.com
            </a>
          </li>
          <li>
            <a className={styles.link} href="/">
              +45 41 80 80 80
            </a>
          </li>

          <li className={styles.Adresse}>
            📍 Adresse: Jomfru Ane Gade 14 9000 Aalborg Danmark
          </li>
          <li className={styles.ÅbningTider}>
            🕒 Åbningstider:
            <p>Man - Fre: 10 - 15 </p>
            <p>Lør - Søn: 08 - 13  </p>
            <p>Lør - Søn: 14 - 18</p>
          </li>
        </ul>
      </div>

      <div>
        <img src={contact} alt="Contact" />
      </div>
    </section>
  );
};
export default ContactInfo;
