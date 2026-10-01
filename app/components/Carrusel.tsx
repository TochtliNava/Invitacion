import { useState, useEffect } from "react";
import img1 from "~/assets/img/carrusel/_DSC0074.jpg";
import img2 from "~/assets/img/carrusel/_DSC3447.jpg";
import img3 from "~/assets/img/carrusel/_DSC3568.jpg";
import img4 from "~/assets/img/carrusel/_DSC3613.jpg";
import img5 from "~/assets/img/carrusel/_DSC3618.jpg";
import img6 from "~/assets/img/carrusel/_DSC3660.jpg";
import img7 from "~/assets/img/carrusel/_DSC3719.jpg";
import img8 from "~/assets/img/carrusel/_DSC3767.jpg";

const IMAGENES = [
  { src: img1, alt: "Leslie y Héctor 1" },
  { src: img2, alt: "Leslie y Héctor 2" },
  { src: img3, alt: "Leslie y Héctor 3" },
  { src: img4, alt: "Leslie y Héctor 4" },
  { src: img5, alt: "Leslie y Héctor 5" },
  { src: img6, alt: "Leslie y Héctor 6" },
  { src: img7, alt: "Leslie y Héctor 7" },
  { src: img8, alt: "Leslie y Héctor 8" },
];

export default function Carrusel() {
  const [indiceActual, setIndiceActual] = useState(0);
  const [estaPausado, setEstaPausado] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Cambio automático cada 6 segundos
  useEffect(() => {
    if (estaPausado) return;

    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % IMAGENES.length);
    }, 6000);

    return () => clearInterval(intervalo);
  }, [estaPausado]);

  const anterior = () => {
    setIndiceActual((prev) => (prev - 1 + IMAGENES.length) % IMAGENES.length);
  };

  const siguiente = () => {
    setIndiceActual((prev) => (prev + 1) % IMAGENES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Deslizar izquierda/derecha con umbral de 40px
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        siguiente();
      } else {
        anterior();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div
      className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-amber-900/20 select-none bg-amber-950/20"
      onMouseEnter={() => setEstaPausado(true)}
      onMouseLeave={() => setEstaPausado(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Carrusel de fotos de Leslie y Héctor"
    >
      {/* Imágenes superpuestas con transición de difuminación (crossfade) */}
      {IMAGENES.map((imagen, index) => {
        const esActiva = index === indiceActual;
        return (
          <img
            key={imagen.src}
            src={imagen.src}
            alt={imagen.alt}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              esActiva
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 pointer-events-none z-0"
            }`}
          />
        );
      })}

      {/* Degradado inferior para resaltar controles */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none z-20" />

      {/* Flecha anterior */}
      <button
        type="button"
        onClick={anterior}
        aria-label="Foto anterior"
        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/55 text-white/90 active:scale-95 transition-all backdrop-blur-xs focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 md:w-5 md:h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Flecha siguiente */}
      <button
        type="button"
        onClick={siguiente}
        aria-label="Siguiente foto"
        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/55 text-white/90 active:scale-95 transition-all backdrop-blur-xs focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 md:w-5 md:h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores / Puntos de navegación */}
      <div className="absolute bottom-3 inset-x-0 z-30 flex justify-center items-center gap-1.5">
        {IMAGENES.map((_, index) => {
          const esActivo = index === indiceActual;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setIndiceActual(index)}
              aria-label={`Ir a foto ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                esActivo
                  ? "w-6 bg-white shadow-xs"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
