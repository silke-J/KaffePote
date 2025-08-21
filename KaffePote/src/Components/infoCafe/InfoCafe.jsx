import cafeInfo from "../../assets/cafeInfo.png";
import styles from "./InfoCafe.module.css";

const InfoCafe = () => {
  return (
    <section className={styles.InfoCafe}>
      <h1>Velkommen til Kaffepote – hvor hygge og haler mødes</h1>
      <img src={cafeInfo} alt="" />

      <h3 className={styles.Info}>
        Hos Kaffepote får du det bedste fra to verdener: duften af friskbrygget
        kaffe og den bløde charme fra vores søde kaniner.
        <ul className={styles.list}>
          <p>Vores café er et roligt og hyggeligt sted, hvor du kan nyde: </p>
          <li>Kaffe og te brygget på kvalitetsbønner og friske blade</li>
          <li>Hjemmebagte kager og brød – altid bagt med kærlighed</li>
          <li>Lettere retter til frokost og eftermiddagshygge</li>
          <li> Kaninselskab – vores pelsede venner elsker at hilse på</li>
        </ul>
        Vi tror på, at godeoplevelser skabes i et afslappet miljø, hvor både
        mennesker og dyr føler sig trygge. Derfor har vi skabt et sted, hvor du
        kan slappe af, nyde en kop cappuccino og måske endda nusse med en kanin,
        der hopper forbi.
        <ul className={styles.praktiskInfo}>
          <p>Praktisk info: </p>
          <li>📍 Adresse: Jomfru Ane Gade 14 9000 Aalborg </li>
          
          <li className={styles.ÅbningTider}>
            🕒 Åbningstider:
            <li>Man - Fre: 10 - 15 </li>
            <li>Lør - Søn: 08 - 13 </li>
            <li>Lør - Søn: 14 - 18</li>
          </li>

          <li>📅 Mulighed for at booke bord eller arrangementer</li>
          <li> 🌱 Vi tilbyder også veganske og glutenfri muligheder</li>
        </ul>
        Kom forbi Kaffepote – og mærk glæden ved kaffe, kage og kaniner.
      </h3>
    </section>
  );
};
export default InfoCafe;
