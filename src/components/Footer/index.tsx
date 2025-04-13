
import styles from './styles.module.scss';

export function Footer() {
    return (
      <footer className={styles.footerContainer}>
        <div className={styles.footerContent}>
    
          <p>© { (new Date()).getFullYear()} Postal.ao. Todos direitos reservados.</p>
        </div>
      </footer>
      
    );
  }
  