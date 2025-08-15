import styles from "./menu.module.css";
const MenuKostet = () => {
  return (
    <section className={styles.menu}>
      <div className={styles.textTop}>
        <h1>Menu</h1>
        <h2>Vores cafe har glutenfri og veganske drikkevarer og snacks. </h2>
      </div>

      <figure className={styles.menuInfo}>
        <ul>
          <h3>Drikkevarer</h3>
          <li>
            Mælkemuligheder: <p>Soja | Mandler | Havre </p>
          </li>
          <li>
            Latte
            <p>
              Smage: Vanilje | Karamel | Lavendel | Hasselnød | Sukkerfri
              Vanilje | Sukkerfri Karamel
            </p>
          </li>
          <li>Cappuccino</li>
          <li>Americano</li>
          <li>Mocha</li>
          <li>Chai Latte</li>
          <li>London Fog</li>
          <li>Peaches n’ Creme Fog</li>
          <li>
            Lemonade <p>Smage: Klassisk | Jordbær | Blåbær | Lavendel</p>
          </li>
          <li>
            Te
            <p>
              Engelsk Morgenmad | Fløde Earl Grey | Fersken Sort Te | Premium
              Grøn | Tropisk Grøn | Zen | Vild Sød Appelsin | Passionsfrugt |
              Mynte | Kamille | Blåbær Ginseng | Mango Passionsfrugt Løvemanke
            </p>
          </li>
          <li>Varm Chokolade</li>
          <li>
            Flaskedrikke <p> Iste | Soda | Juiceboks | Flasked vand</p>
          </li>
        </ul>

        <ul>
          <h3>Snacks</h3>
          <li>Pizza Pretzel</li>
          <li>
            Mindblown Stuffed Cookie
            <p>Sprinkles | Cookies 'n Cream | S'mores</p>
          </li>
          <li>
            At leve for bagværk
            <p>
              Bananbrød | Kokos Erdnøddesmør Power Balls | Saltet Dobbelt
              Chokolade Småkage
            </p>
          </li>
          <li>Brownies (GF)</li>
          <li>Chokolade Decadence Kager (GF)</li>
          <li>
            Soft-Serve Is
            <p>
              Sæsonbestemt tilgængelighed | Tahitiansk Vanilje | Dips
              tilgængelig | Lavet in-house!
            </p>
          </li>
        </ul>
      </figure>
    </section>
  );
};
export default MenuKostet;
