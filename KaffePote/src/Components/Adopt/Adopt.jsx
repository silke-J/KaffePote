 import styles from "./Adopt.module.css";
 
 const Adopt = () => {
   return (
     <section className={styles.hjælpeKaninerne}>
       <div className={styles.Adopt}>
         <h1>Adoptere</h1>
         <h3></h3>
         <list className={styles.list}>
           <li>
             Besøg
             <p>
               Hver kanins personlighed er unik, og vores kaninsnakkere vil
               gerne fortælle dig mere om dem!Kaniner er meget sociale
               skabninger, så vi opfordrer dig til at overveje at adoptere et
               par.
               <br />
               <br />
               Par af kaniner er ofte lykkeligere og mindre stressede, fordi de
               har hinanden til følelsesmæssig støtte, socialisering og
               pelspleje. Mange af vores kaniner er sammenknyttede par eller
               vant til at leve i en koloni og ville trives med en makker.
               <br />
               <br />
               Hvis du har en kanin og leder efter en partner, er
               adoptionsprocessen meget lig. Efter du har indsendt en
               adoptionsansøgning og gennemført et telefoninterview, vil vi
               planlægge en "speed dating-session". Kaniner kan være kræsne, og
               det er vigtigt at lade dem vælge deres egne partnere!
               <br />
               <br />
               For at være berettiget til en speed dating-session skal din kanin
               være steriliseret / kastreret for mindst 6 uger siden og
               vaccineret mod RHD. Venligst tag ikke din kanin med til Kaffepote
               uden forudgående godkendelse.
             </p>
           </li>

           <li>
             Anvend
             <p>
               Udfyld ansøgningen om adoption, som findes i cafteen. For
               spørgsmålet "Er der en specifik kanin(er), du er interesseret
               i?", skriv kaninernes navne og bemærk, at de op for adodptere.
               Det kan tage omkring en uge for os at behandle din ansøgning og
               komme i kontakt (sørg for at tjekke din spam-mappe!).
             </p>
           </li>

           <li>
             Interview
             <p>
               En af vores adoptionskoordinatorer vil kontakte dig for at
               planlægge et interview. Hvis vi beder om opfølgningsinformation,
               bedes du kontakte os så hurtigt som muligt, så vi kan fortsætte
               behandlingen af din ansøgning.
               <br />
               Godkendelse af adoption er baseret på det bedste match for
               kaninens behov, og det er ikke først-til-mølle. Vores
               adoptionsproces tager typisk mellem 2-4 uger.
             </p>
           </li>

           <li>
             Velkommen
             <p>
               Vi vil planlægge en adoptionsdag og levere en plejeveiledning for
               at hjælpe med at sikre en glidende overgang for dit nyeste
               familiemedlem! Adoptionsgebyret er 750 kr per dyr, som vil blive
               indsamlet ved adoption. Det fulde adoptionsgebyr går til
               dyrevaernet for at støtte kaninerne i deres pleje.
             </p>
           </li>
         </list>
       </div>

       <div className={styles.Foster}>
         <h1>Foster</h1>
         <h3>
           Mens alle kaniner i KaffePote kan adopteres, bliver de ikke
           tilgængelige for adoption, før de er blevet steriliseret eller
           kastreret. Når en gruppe af meget unge eller babykaniner kommer til
           os, skal vi til sidst opdele dem i plejefamilier, indtil de er gamle
           nok til at blive steriliseret og kastreret, og så bliver de officielt
           adopterbare.
           <br />
           <br />
           Hvis du er interesseret i at have en ung kanin som plejebyrd, er her
           nogle ting at overveje. Har du flere spørgsmål? Vi vil elske at
           besvare dem! Send os en e-mail på
           <a href="/">hello@kaffepote</a>
         </h3>
       </div>
     </section>
   );
 };
 export default Adopt;