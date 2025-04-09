
//import Image from "next/image";
import styles from "./style.module.scss";

export function Header() {
    return (
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <nav>
            <a href="">Pagina Inicial</a>
            <a href="">Código Postal</a>
            <a href="">Mapeamento</a>
          </nav>
        </div>
      </header>
    );
  }
  