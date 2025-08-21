import styles from "./InfoAnimal.module.css";
import Clover from "../../assets/Clover.jpg";
import Coco from "../../assets/Coco.jpg";
import oreo from "../../assets/oreo.jpg";
import Pumpkin from "../../assets/Pumpkin.jpg";
import VanillaWaffles from "../../assets/Vanilla&Waffles.jpg";
import Neptune from "../../assets/Neptune.jpg";
import Luna from "../../assets/Luna.jpg";
import Jellybean from "../../assets/Jellybean.jpg";
import halo from "../../assets/halo.jpg";

const InfoAnimal = () => {
  return (
    <section className={styles.Animal}>
      <h1>Møde kaninerne</h1>
      <h3>
        Hos os hopper 9 små personligheder rundt – hver med deres helt egen
        charme. Clover er den nysgerrige, der altid skal undersøge alt nyt. Coco
        er blid og elsker lange nusseture. Luna er lidt af en drømmer, der nyder
        at ligge og slappe af i solen. Vanilla er vores elegante dame, mens
        Waffles er en lille spilopmager, der altid finder på sjove ting. Neptune
        er rolig og klog, Halo er kærlig og følger dig gerne rundt. Jellybean er
        fuld af energi og elsker at lege, Pumpkin bringer hygge og varme, og
        Oreo er den søde lille charmetrold, der får alle til at smile.
        <br /> <br />
        Når du besøger os, kan du møde dem alle, give dem lidt ekstra
        opmærksomhed og måske finde din helt egen favorit. De elsker at blive
        nusset, fodret og fotograferet – og hvis du deler dine billeder på
        Instagram, så husk at tagge os, så vi også kan dele kaninglæden. 
      </h3>
      <figure className={styles.InfoAnimal}>
        <div className={styles.card}>
          <img src={Clover} alt="" />
          <h2>Clover</h2>
        </div>
        <div className={styles.card}>
          <img src={Coco} alt="" />
          <h2>Coco</h2>
        </div>
        <div className={styles.card}>
          <img src={oreo} alt="" />
          <h2>Oreo</h2>
        </div>
        <div className={styles.card}>
          <img src={Pumpkin} alt="" />
          <h2>Pumpkin</h2>
        </div>
        <div className={styles.card}>
          <img src={VanillaWaffles} alt="" />
          <h2>Vanilla & Waffles</h2>
        </div>
        <div className={styles.card}>
          <img src={Neptune} alt="" />
          <h2>Neptune</h2>
        </div>
        <div className={styles.card}>
          <img src={Luna} alt="" />
          <h2>Luna</h2>
        </div>
        <div className={styles.card}>
          <img src={Jellybean} alt="" />
          <h2>Jellybean</h2>
        </div>
        <div className={styles.card}>
          <img src={halo} alt="" />
          <h2>Halo</h2>
        </div>
      </figure>
    </section>
  );
};
export default InfoAnimal;
