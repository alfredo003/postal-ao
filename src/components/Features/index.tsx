import { FileCode2, MapPinHouse, MapPinned } from 'lucide-react';
import styles from './styles.module.scss';    

export  function Features()
{
    return (
        <section className={styles.containerFeatures}>
          <div className={styles.featuresHeader}>
           
            <h2>Descobre Angola, um código de cada vez</h2>
            <p>Mostra que a app não é só sobre códigos postais, mas sobre conhecimento 
              territorial. Instala o postal.ao e começa a tua jornada por Angola.
            Descobre Angola, um código de cada vez.</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}> 
              <MapPinHouse className={styles.icon} size={80} strokeWidth={1} color="#CF142B" />
                <h3>Código Postal</h3>
                <p>Código postal de qualquer rua, bairro, comuna, município ou província em Angola.</p>
            </div>
            <div className={styles.featureCard}>
            <MapPinned  className={styles.icon} size={80} strokeWidth={1} color="#CF142B" />
                <h3>Mapeamento</h3>
                <p>Mapa interativo de Angola com divisões administrativas (províncias, municípios, comunas, bairros).</p>
            </div>
            <div className={styles.featureCard}>
            <FileCode2  className={styles.icon} size={80} strokeWidth={1} color="#CF142B" />
                <h3>API</h3>
                <p>API RESTful que permite a outras plataformas, apps e serviços consultar códigos postais e dados geográficos de Angola.</p>
            </div>
          </div>
        </section>
    );
}