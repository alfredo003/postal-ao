
import Image from "next/image";
import { ApiButton } from "./ApiButton";
import styles from "./style.module.scss";
export function Header() {
    return (
      <header className={styles.headerContainer}>
      
        <div className={styles.headerContent}> 
          <Image src='/postal_logo.png' 
          alt="Logo" 
          width={210}
          height={60} 
          />
          <nav>
            <a href="">Pagina Inicial</a>
            <a href="">Código Postal</a>
            <a href="">Mapeamento</a>
          </nav>
          <ApiButton/>
        </div>
      </header>
    );
  }
  