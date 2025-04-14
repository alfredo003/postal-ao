import styles from "./styles.module.scss";

export function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutText}>
        <h1>Sobre o Sistema</h1>
        <p>
          Nosso sistema foi desenvolvido para facilitar a consulta de códigos postais e o mapeamento
          de Angola. Com uma interface intuitiva e ferramentas avançadas, ajudamos cidadãos e
          empresas a localizar endereços e explorar regiões de forma eficiente e precisa.
        </p>
      </div>
      <div className={styles.aboutImage}>
        <img
          src="/about-image.jpg"
          alt="Sobre o sistema"
        />
      </div>
    </section>
  );
}