"use client";
import { useLanguage } from "@/lib/LanguageContext";
import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  const { locale } = useLanguage();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.textContainer}>
        <div
          className={`${styles.languageContent} ${
            locale === "it" ? styles.flip : ""
          }`}
        >
          {locale === "it" ? (
            <>
              {/* Contenuto in italiano */}
              <h2 className={styles.subtitle}>Storia della Parrocchia</h2>
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
                La Parrocchia &quot;Santa Grande Martire Anastasia Romana&quot;
                si trova nella città di Prato, in via Elena Berruti 30 (PO) e fa
                parte dell&rsquo;Episcopato Ortodosso Romeno d&rsquo;Italia.
                Prato è situata a una distanza di 20 km da Firenze ed è la
                seconda città per numero di abitanti nella regione Toscana e la
                terza nell&rsquo;Italia centrale con oltre 220.000 abitanti. Le
                scoperte archeologiche attestano che il luogo dove sorge
                attualmente la città era popolato già dal Neolitico. Essendo
                attraversata da nord a sud dal fiume Bisenzio, la città ha la
                risorsa naturale necessaria per la lavorazione delle fibre
                tessili, così che i documenti del periodo medievale (anno 1360)
                attestano una ricca produzione di materiali tessili in questa
                zona. Nel tempo, la produzione e la lavorazione dei materiali
                tessili sono diventate la principale occupazione degli abitanti
                di Prato, tanto che nel XX secolo la città era il più grande
                centro dell&rsquo;industria tessile in Europa. La storia e
                l&rsquo;evoluzione della lavorazione di questi materiali sono
                presentate in dettaglio al Museo del Tessile situato in città.
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
                Al centro della città si trova la cattedrale cattolica di Santo
                Stefano che, oltre a conservare reliquie di Santo Stefano e di
                Sant&rsquo;Anna, custodisce fin dal XIII secolo una parte della
                Cintola della Madonna, portata da Gerusalemme nel contesto delle
                crociate. Per gli abitanti della zona, questa reliquia è
                diventata il riferimento più importante della città perché nel
                Medioevo e nell&rsquo;Epoca Moderna la città è stata protetta
                attraverso miracoli dalla Madonna dalle invasioni barbariche e
                ottomane, nonché da siccità, inondazioni e incendi. Così anche i
                rumeni che sono venuti qui hanno trovato un valido sostegno
                nella protezione della Madonna.
              </p>
              <p className={styles.desc}>
                La Provincia di Prato è nata nel 1992, e le località e i sette
                comuni che la compongono facevano parte in precedenza della
                Provincia di Firenze. Così anche la vita ecclesiastica degli
                ortodossi rumeni della zona si è svolta inizialmente
                nell&rsquo;ambito della parrocchia &quot;Ascensione del
                Signore&quot; di Firenze, nata nel 1984 in risposta alla
                richiesta dei rumeni delle città di Firenze e Prato di avere un
                prete ortodosso rumeno e funzioni in lingua madre.
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
                Con la creazione della nuova provincia di Prato e a causa
                dell&rsquo;aumento del numero di rumeni nella zona, si sentiva
                sempre più la necessità di organizzare un servizio ortodosso in
                lingua rumena in città. Così il 10 dicembre 2010, a seguito
                della richiesta scritta avanzata dai cristiani ortodossi rumeni
                di Prato, è stata fondata la Parrocchia Ortodossa Romena
                &quot;Santa Grande Martire Anastasia Romana &quot; con la
                decisione del Vescovo Siluan dell&rsquo;Episcopato Ortodosso
                Romeno d&rsquo;Italia, e come prete fondatore è stato designato
                il Reverendo Prete Ionică Saghin. A partire dal settembre 2016,
                il servizio sacerdotale è stato assunto dal padre Mihai Anton a
                seguito del trasferimento del primo parroco nella Metropolia
                dell&rsquo;Europa Centrale e Settentrionale, e dal 24 settembre
                2022 si è aggiunto nel servizio liturgico anche il diacono padre
                Marian Raghină.
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
                La comunità è stata ospitata in vari luoghi di culto cattolici
                dal 2010 al 2013, dopo di che le funzioni e le attività della
                parrocchia si sono svolte in uno spazio affittato dal 2013 al
                2022. Sia la preoccupazione per il pagamento dell&rsquo;affitto
                mensile sia la mancanza di possibilità di una stabile ospitalità
                in un luogo di culto cattolico hanno suscitato il bisogno e il
                desiderio di possedere uno spazio liturgico proprio che
                corrispondesse alla vita ecclesiastica ortodossa. Così, dopo
                lunghi sforzi e attese, nel 2018 la comunità ha acquistato, con
                il contributo esclusivo dei fedeli, un&rsquo;antica Fabbrica di
                Tessuti in via Elena Berruti 30 a Prato, per la quale ha
                ottenuto le autorizzazioni delle autorità per la trasformazione
                in un luogo di culto cristiano ortodosso. Il 1° dicembre 2019 è
                stata fatta la preghiera di benedizione per l&rsquo;inizio dei
                lavori, e il 1° giugno 2022 la comunità si è trasferita nel
                proprio luogo di culto - la chiesa di Santa Anastasia.
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
                Il 10 dicembre 2023 la Parrocchia ha ricevuto un importante
                sostegno dal Dipartimento per i Rumeni all&rsquo;Estero per l&rsquo;acquisto
                di un immobile ad uso culturale catechetico vicino alla chiesa,
                in via Elena Berruti 32, dove funzionerà la Scuola Parrocchiale
                e una Sala da Pranzo. La comunità parrocchiale sta proseguendo i
                lavori per adornare la chiesa con pitture e tutto ciò che è
                necessario per lo spazio di culto. Inoltre, tra le
                preoccupazioni della comunità vi è anche l&rsquo;allestimento dello
                spazio per attività culturali, educative e sociali accanto alla
                chiesa.
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
                Tra gli eventi e le attività importanti nella vita della
                parrocchia si ricordano:
                <br />
                - Visite dei nostri gerarchi: PS Siluan nel 2014 e PS Atanasie
                nel 2019 e 2022.
                <br />
                - Pellegrinaggi a Gerusalemme, Grecia, Monte Athos, Roma,
                Loreto, Bari, Venezia, Firenze e varie escursioni.
                <br />
                - Concerti di canti natalizi dei Cori di Adulti e Bambini.
                <br />
                -Conversazioni spirituali e Conferenze.
                <br />
                - Organizzazione di Raccolte per i bisognosi di Romania e
                Moldavia.
                <br />
                - Visita e assistenza ai detenuti nel carcere di Prato <br />
                - I campi estivi ed escursioni per bambini e adolescenti. <br />
                <br />
                È doveroso ringraziare Dio e Santa Anastasia per tutti i
                benefici elargiti a questa benedetta comunità.
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
              <div className={styles.languageToggleContainer}></div>
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
                Parohia ,,Sfânta Mare Muceniță Anastasia Romana” se află în
                orașul Prato, via Elena Berruti 30 (PO) și face parte din
                Episcopia Ortodoxă Română a Italiei. Prato este situat la o
                distanță de 20 km de Florența (Firenze), este al doilea oraș ca
                număr de locuitori din regiunea Toscana și al treilea din Italia
                centrală cu peste 220 000 de locuitori. Descoperirile
                arheologice atestă că locul în care este așezat actualmente
                orașul a fost populat încă din perioada Neoliticului. Fiind
                traversat de la nord spre sud de râul Bisenzio, orașul are
                resursa naturală necesară prelucrării fibrelor textile, astfel
                că documentele din perioada medievală (anul 1360) atestă o
                bogată producție de materiale textile în această zonă. Cu
                timpul, producerea și prelucrarea materialelor textile a devenit
                principala ocupație a locuitorilor din Prato, încât în secolul
                20 orașul era cel mai mare centru de industrie textilă din
                Europa. Istoria și evoluția prelucrării acestor materială este
                prezentată în detaliu la Muzeul Textilelor aflat în localitate.
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
                În centrul orașului se află catedrala catolică Sfântul Ștefan
                care pe lângă părticele din moaștele Sf. Ștefan și ale Sf. Ana
                păstrează încă din secolul 13 o parte din Brâul Maicii Domnului
                adusă de la Ierusalim în contextul cruciadelor. Pentru
                locuitorii din zonă acest odor a devenit cel mai important reper
                al orașului deoarece în Evul Mediu și în Epoca Modernă cetatea a
                fost ocrotită prin minuni de către Maica Domnului de năvălirile
                barbare și otomane dar și de secetă, potop și incendiu. Astfel
                că și românii care au venit aici au găsit un sprijin de nădejde
                în ocrotirea Maicii Domnului.
              </p>
              <p className={styles.desc}>
                Provincia Prato a luat naștere în anul 1992, iar localitățile și
                cele 7 comune componente făceau parte anterior din Provincia
                Firenze. Astfel că și viața bisericească a românilor ortodocși
                din zonă s-a desfășurat mai întâi în cadrul parohiei ,,Înălțarea
                Domnului” din Firenze care a luat naștere în anul 1984 prin
                răspunsul dat de Patriarhia Română la cererea românilor din
                orașele Florența și Prato de a a avea preot ortodox român și
                slujbe în limba maternă.
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
                Odată cu înființarea noii provincii Prato dar și datorită
                creșterii numărului românilor din zonă se simțea tot mai mult
                nevoia organizării unei slujiri ortodoxe în limba română în
                localitate. Astfel că pe data de 10 decembrie 2010, ca urmarea a
                solicitării scrise înaintate de creștinii ortodocși români din
                Prato s-a înființat Parohia Ortodoxă Română ,,Sf. M. Mc.
                Anastasia Romana” prin hotărârea Preasfințitului Părinte Episcop
                Siluan al Episcopiei Ortodoxe Române a Italiei, iar ca preot și
                întemeietor a fost desemnat Preacucernicul Preot Ionică Saghin.
                Începând cu luna septembrie a anului 2016 slujirea preoțească a
                fost preluată de părintele Mihai Anton ca urmare a transferului
                celui dintâi preot paroh în Mitropolia Europei Centrale și de
                Nord, iar de la 24 septembrie 2022 s-a adăugat în slujire
                liturgică și părintele diacon Marian Raghină.
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
                Comunitatea a fost găzduită pe rând în mai multe locașuri de
                cult catolice în perioada 2010 – 2013, după care slujbele și
                activitățile parohiei s-au desfășurat într-un spațiu închiriat
                în perioada 2013 – 2022. Atât grija pentru plata chiriei lunare
                cât și lipsa posibilității unei găzduiri stabile într-un locaș
                de cult catolic au trezit nevoia și dorința deținerii unui
                spațiu liturgic propriu care să corespundă vieții bisericești
                ortodoxe. Astfel că după îndelungi demersuri și așteptări, în
                anul 2018 comunitatea a achiziționat, prin contribuția exclusivă
                a credincioșilor, o veche Fabrică de Textile la adresa Via Elena
                Berruti nr. 30 la Prato, pentru care a obținut avizele
                autorităților în vederea amenajării unui locaș de cult creștin
                ortodox. La 1 decembrie 2019 s-a făcut rugăciunea de
                binecuvântare a începutului lucrărilor, iar la 1 iunie 2022
                comunitatea s-a mutat în propriul locaș de cult – biserica Sf.
                Anastasia.
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
                Pe 10 decembrie 2023 Parohia a beneficiat de o susținere
                importantă din partea Departamentului pentru Românii de
                Pretutindeni la achiziția unui imobil pentru uz cultural
                catehetic în proximitatea bisericii la adresa Via Elena Berruti
                nr. 32 în care va funcționa Școala Parohială și o Sală de Mese.
                Comunitatea parohială urmează demersul împodobirii bisericii cu
                pictură și toate cele de folos spațiului de cult. De asemenea
                printre preocupările comunității este și amenajarea spațiului
                pentru activitățile culturale, educative și sociale aflat lângă
                biserică.
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
                Printre evenimentele și activitățile importante din viața
                parohiei amintim:
                <br />
                - Vizitele ierarhilor noștri: 2014 – PS Siluan și PS Atanasie în 2019 și 2022.
                <br />
                - Pelerinaje la Ierusalim, Grecia, Sfântul Munte Athos, Loreto,
                Roma, Bari, Venezia, Firenze și diferite excursii.
                <br />
                - Concertele de Colinde ale Corurilor de Adulți și de Copii.
                <br />
                - Convorbiri duhovnicești și Conferințe.
                <br />
                - Cercul de cateheză cu Adulții – Convorbiri Filocalice.
                <br />
                - Organizarea de colete pentru nevoiași din România și Moldova.
                <br />
                - Vizitarea și cercetarea celor din Închisoarea de la Prato
                <br />
                - Tabere și Excursii pentru copii și adolescenți. <br />
              </p>
              <p className={styles.desc}>
                Se cuvine să aducem mulțumire Bunului Dumnezeu și Sfintei
                Anastasia pentru toate binefacerile revărsate asupra acestei
                comunități binecuvântate.
                <br />
                <br />
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
