import { ImageSlider } from "./ImageSlider"
import silide1 from "./imgs/silide_1.png"
import silide2 from "./imgs/silide_2.jpg"

const IMAGES = [
  {
    url: silide1.src,
    alt: "Mapa de Angola",
    title: "Consulta de Código Postal",
    subtitle: "Encontre códigos postais de forma rápida e precisa",
    description:
      "Nosso sistema permite que você consulte os códigos postais de todas as regiões de Angola, promovendo eficiência e conectividade para cidadãos e empresas.",
    ctaText: "Saiba Mais",
    ctaLink: "/consulta-codigo-postal",
  },
  {
    url: silide2.src,
    alt: "Mapeamento Interativo",
    title: "Mapeamento de Angola",
    subtitle: "Explore o mapa interativo de Angola",
    description:
      "Descubra localidades, bairros e regiões com nosso mapa interativo, projetado para facilitar a navegação e o planejamento.",
    ctaText: "Explorar Mapa",
    ctaLink: "/mapeamento",
  },
]

export function Hero() {
  return (
    <section style={{ width: "100%" }}>
      <ImageSlider images={IMAGES} />
    </section>
  )
}