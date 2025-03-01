import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.privacyContainer}>
      <h1>Privacy Policy</h1>
      <p>
        Questa informativa descrive come vengono trattati i dati personali
        degli utenti che visitano il nostro sito.
      </p>

      <h2>1. Titolare del Trattamento</h2>
      <p><strong>Parohia Ortodoxă Prato</strong></p>
      <p>Indirizzo: Via Elena Berruti, 30, 59100, Prato, PO</p>
      <p>
        Email:{" "}
        <a href="mailto:prato@mitropolia.eu" className={styles.emailLink}>
          prato@mitropolia.eu
        </a>
      </p>

      <h2>2. Dati Raccolti</h2>
      <p>
        Non raccogliamo direttamente dati personali tramite moduli. Tuttavia, il
        sito può utilizzare servizi di terze parti (es. Google Analytics) che
        raccolgono dati anonimi.
      </p>

      <h2>3. Finalità del Trattamento</h2>
      <p>
        I dati raccolti vengono usati solo per migliorare il sito e garantire un
        servizio efficiente agli utenti.
      </p>

      <h2>4. Diritti dell Utente</h2>
      <p>
        Gli utenti possono richiedere l accesso, la rettifica o la cancellazione
        dei propri dati contattandoci.
      </p>

      <h2>5. Contatti</h2>
      <p>
        Per qualsiasi domanda sulla privacy, scrivici a:{" "}
        <a
          href="mailto:ancuta_cosovanu@yahoo.com"
          className={styles.emailLink}
        >
          ancuta_cosovanu@yahoo.com
        </a>
      </p>
    </div>
  );
}
