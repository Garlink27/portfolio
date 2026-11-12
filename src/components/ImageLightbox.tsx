import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import type { ProjectImage } from '../data/projects';

interface ImageLightboxProps {
  images: ProjectImage[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function ImageLightbox({ images, activeIndex, onClose, onChange }: ImageLightboxProps) {
  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onChange((activeIndex + 1) % images.length);
      if (event.key === 'ArrowLeft') onChange((activeIndex - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, images.length, onChange, onClose]);

  if (activeIndex === null) return null;

  const activeImage = images[activeIndex];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imágenes del proyecto"
      onClick={onClose}
    >
      <button className="lightbox__close" type="button" onClick={onClose} aria-label="Cerrar visor">
        <X />
      </button>
      {images.length > 1 && (
        <button
          className="lightbox__arrow lightbox__arrow--left"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onChange((activeIndex - 1 + images.length) % images.length);
          }}
          aria-label="Imagen anterior"
        >
          <ArrowLeft />
        </button>
      )}
      <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
        <img src={activeImage.src} alt={activeImage.alt} />
        <figcaption>{activeImage.alt}</figcaption>
      </figure>
      {images.length > 1 && (
        <button
          className="lightbox__arrow lightbox__arrow--right"
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onChange((activeIndex + 1) % images.length);
          }}
          aria-label="Imagen siguiente"
        >
          <ArrowRight />
        </button>
      )}
    </div>
  );
}
