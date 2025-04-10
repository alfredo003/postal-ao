
import Image from "next/image";
import { ApiButton } from "./ApiButton";
import styles from "./style.module.scss";
export function Header() {
    return (<>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}> 
          <Image src='/postal_logo.png' 
          alt="Logo" 
          width={140}
          height={40} 
          />
          <nav>
            <a className={styles.active}>Pagina Inicial</a>
            <a href="">Código Postal</a>
            <a href="">Mapeamento</a>
          </nav>
          <ApiButton/>
         
        </div>
      </header>  
      <img src="/bg-header.jpg" alt="fffffffff" className={styles.img_full} />
      </>
    );
  }
  