import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>Parohia Ortodoxă Română Prato</p>
        <p>&quot;Sfânta Mare Muceniță Anastasia Romana&quot;</p>
      </div>
      <div className={styles.text}>
      2024© Parohia Ortodoxă Română Prato - Made by <a  href="https://github.com/AncutaCos?tab=overview&from=2024-04-01&to=2024-04-30" className={styles.text1} target="_blank" rel="noopener noreferrer">AncutaCosovanu</a>
      </div>
    </div> 
  );
};

export default Footer;