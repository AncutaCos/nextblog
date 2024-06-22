"use client";
import { useLanguage } from "@/lib/LanguageContext";
import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  const { locale} = useLanguage();

  return (
    <div className={styles.pageContainer}>

      <div className={styles.textContainer}>
        <div
          className={`${styles.languageContent} ${
            locale === 'it' ? styles.flip : ""
          }`}
        >
          {locale === 'it' ? (
            <>
              {/* Contenuto in italiano */}
              <h2 className={styles.subtitle}>Storia della Parocchia</h2>
              <h2 className={styles.subtitle}>
              Parrocchia Santa Grande Martire Anastasia Romana (22 dicembre)
              </h2>
              <p className={styles.desc}>
                Chiesa: Via Elena Berutti 30, Prato.
                <br />
                mail: prato@mitropolia.eu <br />
                <br />
                <strong>Pr. Mihai Anton</strong>
                <br />
                mobile: +39 339 635 66 97
                <br />
                mail: padremihaianton@gmail.com
                <br />
                <br />
                <strong>Diacono Marian Răghină</strong>
                <br />
                mobile: +39 329 981 66 22
                <br />
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/logo_it.jpg"
                  alt="Image 1"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                Situata a una distanza di 20 chilometri da Firenze, Prato è la
                seconda città per numero di abitanti della regione Toscana e la
                terza dell&rsquo;Italia centrale. A seguito delle scoperte
                archeologiche, si è riscontrato che il luogo in cui si trova
                attualmente la città era popolato sin dal periodo Neolitico.
                Essendo attraversata dal fiume Bisenzio da nord a sud, la città
                ha avuto la risorsa naturale necessaria per la lavorazione delle
                fibre tessili, tanto che i documenti medievali attestano nel
                1360 la produzione di materiali tessili in questa zona. Col
                tempo, la produzione e la lavorazione dei materiali tessili sono
                diventate l&rsquo;occupazione principale degli abitanti di
                Prato, tanto che nel 20° secolo la città è diventata il più
                grande centro di industria tessile d&rsquo;Europa. La storia e
                l&rsquo;evoluzione della lavorazione di questi materiali è
                presentata in dettaglio al Museo dei Tessuti situato in loco.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/Paroh2.jpg"
                  alt="Image 2"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                Nel centro della città si trova la Cattedrale cattolica di Santo
                Stefano che dal 11° secolo conserva una parte della Cintola
                della Vergine Maria portata da Gerusalemme. Per gli abitanti
                della zona, questa reliquia è diventata il punto di riferimento
                più importante della città, poiché nel Medioevo e nell&rsquo;
                Epoca Moderna la città è stata protetta attraverso molti
                miracoli della Vergine Maria dalle invasioni barbariche e
                ottomane, ma anche da siccità o alluvioni. Così i rumeni venuti
                qui hanno trovato un valido sostegno nella Vergine Maria
                attraverso la sua Cintola.
              </p>
              <p className={styles.desc}>
                La vita ecclesiastica degli ortodossi rumeni di questa zona si è
                svolta prima nella parrocchia &quot;Esaltazione della Santa
                Croce&quot; di Firenze, nata nel 1984 come risposta della Chiesa
                Ortodossa Romena alla richiesta dei rumeni di Firenze e Prato di
                avere un prete rumeno e un servizio ortodosso nella loro lingua
                madre.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/Paroh3.jpg"
                  alt="Image 1"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                La Parrocchia Ortodossa Romena di Prato è stata fondata il 10
                dicembre 2010 per decisione del Vescovo Siluan della Diocesi
                Ortodossa Romena d&rsquo;Italia, in risposta alla richiesta
                scritta dei rumeni di Prato. La parrocchia è stata intitolata
                &quot;Santa Grande Martire Anastasia Romana&quot; (22 dicembre)
                e ha avuto come prete e fondatore il Rev. Preot Ionică Saghin. I
                rumeni hanno ritrovato la loro identità spirituale e nazionale
                nel seno della parrocchia e partecipano con zelo alla vita
                ecclesiastica.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/Paroh1.jpg"
                  alt="Image 2"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                La comunità ortodossa è stata ospitata successivamente in
                diverse chiese cattoliche nel periodo 2010 – 2013, dopodiché, a
                partire dall&rsquo;estate del 2013, viveva la gioia dei servizi
                liturgici in uno spazio affittato (un ex magazzino di tessuti)
                che è stato attrezzato con tutto il necessario per il buon
                svolgimento del culto ortodosso. <br /> I cristiani della
                parrocchia sono diventati a loro volta missionari in diversi
                modi, vivendo e testimoniando la fede ortodossa tra persone di
                altre religioni e partecipando attivamente alla fondazione di
                nuove parrocchie nella zona, così che di anno in anno ci sono
                altre anime che si aggiungono alla Chiesa di Cristo.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/Paroh4.jpg"
                  alt="Image 1"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                A partire da settembre 2016, a seguito del trasferimento su
                richiesta del Rev. Prete Ionică Saghin nell&rsquo;Arcidiocesi
                della Germania, Austria e Lussemburgo, il servizio della
                parrocchia è stato affidato al giovane prete Mihai Anton. Il
                servizio continua sotto la guida dei vescovi della diocesi sugli
                stessi coordinate spirituali, cercando l&rsquo;approfondimento
                nella Liturgia, Confessione, Comunione e Catechesi.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/Paroh7.jpg"
                  alt="Image 2"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                Fin dai primi tempi della Parrocchia, i cristiani e il prete
                hanno sentito la necessità di uno spazio di culto proprio in cui
                poter vivere la fede senza preoccuparsi del pagamento
                dell&rsquo;affitto o del frequente cambio di luogo di
                culto.Così, dopo lunghe trattative e attese, nel 2018 la
                comunità dei romeni ortodossi di Prato ha acquistato una vecchia
                Fabbrica di Tessuti per la quale ha ottenuto le autorizzazioni
                necessarie per la trasformazione in chiesa ortodossa. Il 1
                dicembre 2019 si è tenuta la preghiera di benedizione per
                l&rsquo;inizio dei lavori di restauro e allestimento con la
                speranza che arrivino a buon fine.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/Paroh8.jpg"
                  alt="Image 2"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                Tra gli eventi e le attività importanti nella vita della
                parrocchia si ricordano:
                <br />
                - Le visite dei nostri vescovi: nel 2014 Sua Eccellenza Siluan e
                nel 2019 Sua Eccellenza Atanasie,
                <br />
                - Pellegrinaggi a Gerusalemme, Loreto (casa della Madonna), Roma
                (tombe di san Pietro e san Paolo e di altri santi), Bari
                (reliquie di san Nicola) e diverse escursioni <br />- Le
                celebrazioni dei bambini per il Natale, la Pasqua,
                l&rsquo;Annunciazione e la Giornata Nazionale (1 dicembre){" "}
                <br />
                - I concerti di canti natalizi dei cori adulti, adolescenti e
                bambini
                <br />
                - Conversazioni spirituali con personalità ecclesiastiche in
                patria e nella diaspora Il Circolo di Conversazioni Filocaliche
                per la lettura e il commento dei testi della collezione
                Filocalia
                <br />
                - La raccolta di pacchi per aiutare coloro in difficoltà in
                Romania e nella Repubblica Moldova <br />
                - La visita ai detenuti nel carcere di Prato <br />
                - I campi estivi per bambini e adolescenti. <br />
                <br />
                Un sentito ringraziamento va ai genitori, fratelli, sorelle e a
                tutti i parenti nostri in Romania e altrove che ci hanno dato la
                vita e ci hanno donato la vera fede. Che la gioia santa sia su
                tutti coloro che sono fondatori della parrocchia, membri della
                comunità e costruttori della chiesa che si sta edificando!
                <br />
                <br />
                <strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pr. Mihai Anton
                </strong>
              </p>
              {/* Altri contenuti in italiano */}
            </>
          ) : (
            <>
              {/* Contenuto in rumeno */}
              <h2 className={styles.subtitle}>Istoricul Parohiei</h2>
              <div className={styles.languageToggleContainer}>
              </div>
              <h2 className={styles.subtitle}>
              Parohia Sfânta Mare Muceniță Anastasia Romana (22 decembrie)
              </h2>
              <p className={styles.desc}>
                Biserică: Via Elena Berutti 30, Prato.
                <br />
                mail: prato@mitropolia.eu <br />
                <br />
                <strong>Pr. Mihai Anton</strong>
                <br />
                mobile: +39 339 635 66 97
                <br />
                mail: padremihaianton@gmail.com
                <br />
                <br />
                <strong>Diacon Marian Răghină</strong>
                <br />
                mobile: +39 329 981 66 22
                <br />
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/logo_ro.jpg"
                  alt="Image 1"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                Situat la o distanță de 20 kilometri de Florența, Prato este al
                doilea oraș ca număr de locuitori din regiunea Toscana și al
                treilea din Italia centrală. În urma descoperirilor arheologice,
                s-a constatat că locul în care este așezat actualmente orașul a
                fost populat încă din perioada Neoliticului. Fiind traversat de
                râul Bisenzio de la nord spre sud, orașul a avut resursa
                naturală necesară prelucrării fibrelor textile, astfel că
                documentele medievale atestă în 1360 producția de materiale
                textile în această zonă. Cu timpul, producerea și prelucrarea
                materialelor din țesut a devenit ocupația de bază a locuitorilor
                din Prato, încât în secolul 20 orașul a devenit cel mai mare
                centru de industrie textilă din Europa. Istoria și evoluția
                prelucrării acestor materiale este prezentată în detaliu la
                Muzeul Textilelor aflat în localitate.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/Paroh2.jpg"
                  alt="Image 2"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                În centrul orașului se află Catedrala catolică Sfântul Ștefan
                care începând cu secolul 11 păstrază o parte din Brâul Maicii
                Domnului adus de la Ierusalim. Pentru locuitorii din zonă acest
                odor sfânt a devenit cel mai important reper al orașului
                deoarece în Evul Mediu și Epoca Modernă cetatea a fost ocrotită
                prin multe minuni ale Maicii Domnului de năvălirile barbare și
                otomane, dar și de secetă sau potop. Astfel că românii veniți
                aici au găsit un sprijin de nădejde în Maica Domnului prin Brâul
                ei.
              </p>
              <p className={styles.desc}>
                Viața bisericească a românilor ortodocși din această zonă s-a
                desfășurat mai întâi în cadrul parohiei &quot;Înălțarea Sfintei
                Cruci&quot; din Florența care a luat naștere în 1984 prin
                răspunsul dat de către Patriarhia Română la cererea românilor
                din Florența și Prato de a avea un preot român și slujire
                ortodoxă în limba maternă.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/Paroh3.jpg"
                  alt="Image 1"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                Parohia Ortodoxă Română Prato s-a înființat în data de 10
                decembrie 2010 prin hotărâre Preasfințitului Parinte Episcop
                Siluan al Episcopiei Ortodoxe Române a Italiei ca răspuns la
                cerea scrisă a românilor de la Prato. Parohia a primit hramul
                &quot;Sfânta Mare Muceniță Anastasia Romana&quot;(22 decembrie)
                având ca preot și întemeietor pe Preacucernicul pr. Ionică
                Saghin. Românii și-au regăsit identiatea duhovnicească și
                națională în sânul parohiei și participă cu râvnă la viața
                bisericească.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/Paroh1.jpg"
                  alt="Image 2"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                Comunitatea ortodoxă a fost găzduită pe rând în mai multe
                biserici catolice în perioada 2010 – 2013 după care, începând
                din vara anului 2013 , își trăia bucuria slujbelor într-un
                spațiu închiriat (un fost depozit de materiale textile) care a
                fost amenajat cu toate cele de trebuință bunei desfășurări a
                cultului ortodox.
                <br /> Creștinii parohiei au devenit la rândul lor misionari în
                diferite feluri prin trăirea și mărturisirea credinței ortodoxe
                printre cei de alte religii și prin participarea activă la
                înființarea de noi parohii în zonă, astfel că an de an sunt și
                alte suflete ce se adaugă Bisericii lui Hristos.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/Paroh4.jpg"
                  alt="Image 1"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                Începând cu luna septembrie 2016, prin transferul la cerere al
                P.C. Pr. Ionică Saghin în Arhiepiscopia Germaniei, Austriei și
                Luxembourgului, slujirea parohiei a fost înmânată tânărului
                preot Mihai Anton. Slujirea continuă sub îndrumarea ierarhilor
                Episcopiei pe aceleași coordonate duhovnicești căutând adâncirea
                în Liturghie, Spovedanie, Împărtășanie și Cateheză.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/Paroh7.jpg"
                  alt="Image 2"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                Încă de la începuturile Parohiei, creștinii și preotul au simțit
                nevoia unui spațiu de slujire propriu în care să se poată trăi
                credința fără grija plății chiriei sau a schimbării frecvente a
                locului de slujbă. Astfel că, după îndelungi demersuri și
                așteptări, în anul 2018 comunitatea românilor ortodocși de la
                Prato a cumpărat o veche Fabrică de Textile pentru care a
                obținut avizele transformării în biserică ortodoxă.
                <br />
                La 1 decembrie 2019 s-a făcut rugăciunea de binecuvântare a
                începutului lucrărilor de restaurare și amenajare cu nădejdea că
                vor ajunge la bun sfârșit.
              </p>
              <div className={styles.imageContainer}>
                <Image
                  src="/Paroh8.jpg"
                  alt="Image 1"
                  width={300}
                  height={200}
                />
              </div>
              <p className={styles.desc}>
                Printre evenimentele și activitățile importante din viața
                parohiei amintim:
                <br />
                - Vizitele ierarhilor noștri: 2014 – PS Siluan și 2019 - PS
                Atanasie,
                <br />
                - Pelerinaje la Ierusalim, Loreto (casa Maicii Domnului), Roma
                (mormintele sf. Petru și Pavel și ale altor sfinți), Bari
                (moaștele sf. Nicolae) și diferite excursii
                <br />
                - Serbările copiilor de Nașterea Domnului, Învierea Domnului,
                Buna Vestire și Ziua Națională (1 decembrie)
                <br />
                - Concertele de Colinde ale Corurilor de Adulți, Adolescenți și
                Copii
                <br />
                - Convorbiri duhovnicești cu personalități bisericești din țară
                și diaspora
                <br />
                - Cercul de Convorbiri Filocalice de citire și comentare a
                textelor din colecția Filocalia
                <br />
                - Organizarea de colete pentru ajutorarea celor aflați în nevoi
                din România și Republica Moldova
                <br />
                - Cercetarea celor din Închisoarea de la Prato
                <br />
                - Tabere de vară pentru copii și adolescenți. <br />
              </p>
              <p className={styles.desc}>
                Un gând de prețuire se îndreaptă către părinții, frații,
                surorile și toate rudeniile noastre din România și din alte
                părți care ne-au adus la viață și ne-au dăruit nouă credința cea
                adevărată. Bucuria cea sfântă să fie peste toți cei ce sunt
                întemeietori ai parohiei, membri ai comunității și ctitori ai
                bisericii ce se zidește! <br /> <br />
                <strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pr. Mihai Anton
                </strong>
              </p>
              {/* Aggiungi altri contenuti in rumeno qui */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
