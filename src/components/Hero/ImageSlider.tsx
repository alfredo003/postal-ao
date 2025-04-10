"use client"
import { useState, useEffect } from "react"
import { Circle, CircleDot } from "lucide-react"
import "./image-slider.scss"

type ImageSliderProps = {
  images: {
    url: string
    alt: string
    title: string
    subtitle: string
    description: string
    ctaText?: string
    ctaLink?: string
  }[]
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => (index === images.length - 1 ? 0 : index + 1))
  }

  useEffect(() => {
    const interval = setInterval(showNextImage, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section aria-label="Image Slider" className="hero-slider">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt, title, subtitle, description, ctaText, ctaLink }, index) => (
          <div
            key={`${url}-${index}`} // Adiciona o índice para garantir que a chave seja única
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              translate: `${-100 * imageIndex}%`,
              flexShrink: 0,
            }}
          >
            <img
              src={url}
              alt={alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
            />
            <div className="img-slider-text">
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
              <p>{description}</p>
              {ctaText && ctaLink && (
                <a href={ctaLink} className="cta-btn">
                  {ctaText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
          </button>
        ))}
      </div>
    </section>
  )
}
