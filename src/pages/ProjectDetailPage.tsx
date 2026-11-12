import { useCallback, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Code2, Info, Images } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ImageLightbox } from '../components/ImageLightbox';
import { ProjectDocuments } from '../components/ProjectDocuments';
import { projects } from '../data/projects';

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((item) => item.id === id);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveImage(null), []);
  const changeLightboxImage = useCallback((index: number) => setActiveImage(index), []);

  if (!project) {
    return (
      <main className="not-found-page">
        <div className="not-found-card">
          <p className="eyebrow">Proyecto no encontrado</p>
          <h1>Esta evidencia no está disponible.</h1>
          <Link className="button button--primary" to="/#proyectos"><ArrowLeft size={16} /> Volver a proyectos</Link>
        </div>
      </main>
    );
  }

  const evidenceCount = project.gallery.length + (project.documents?.length ?? 0);

  return (
    <main className="detail-page">
      <header className="detail-header">
        <div className="container detail-header__inner">
          <Link className="brand" to="/#inicio">
            <span className="brand__mark">GB</span>
            <span className="brand__name">Luis Gael Bonilla Paleta</span>
          </Link>
          <Link className="back-link" to="/#proyectos"><ArrowLeft size={16} /> Todos los proyectos</Link>
        </div>
      </header>

      <div className="container detail-content">
        <div className="detail-breadcrumb">
          <Link to="/#proyectos">Portafolio</Link><span>/</span><span>{project.category}</span>
        </div>
        <section className="detail-hero">
          <div className="detail-hero__copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> {project.category}</p>
            <h1>{project.title}</h1>
            <p className="detail-lede">{project.description}</p>
            <div className="detail-actions">
              {project.repository && (
                <a className="button button--primary" href={project.repository} target="_blank" rel="noopener noreferrer">
                  <Code2 size={17} /> Ver repositorio <ArrowUpRight size={15} />
                </a>
              )}
              <a className="button button--outline" href={project.gallery.length > 0 ? '#evidencias' : '#documentacion'}>
                <Images size={17} /> Explorar evidencias
              </a>
            </div>
          </div>
          {project.cover && (
            <div className="detail-hero__image">
              <img src={project.cover.src} alt={project.cover.alt} />
              <span className="detail-image-caption">Evidencia del proyecto</span>
            </div>
          )}
        </section>

        <div className="detail-columns">
          <div className="detail-main-column">
            {project.objective && (
              <section className="detail-section">
                <p className="eyebrow">Propósito</p>
                <h2>Objetivo</h2>
                <p>{project.objective}</p>
              </section>
            )}
            <section className="detail-section">
              <p className="eyebrow">Alcance</p>
              <h2>Características y funcionalidades</h2>
              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}><Check size={17} /><span>{feature}</span></li>
                ))}
              </ul>
              {project.pending && (
                <div className="scope-note">
                  <Info size={18} />
                  <div>
                    <strong>Funcionalidad pendiente en esta versión</strong>
                    <ul>{project.pending.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </div>
              )}
              {project.note && <p className="project-note"><Info size={16} />{project.note}</p>}
            </section>
            {project.gallery.length > 0 && (
              <section className="detail-section" id="evidencias">
                <div className="section-heading section-heading--compact">
                  <div>
                    <p className="eyebrow">Galería</p>
                    <h2>Evidencias visuales</h2>
                  </div>
                  <span className="project-count"><strong>{project.gallery.length.toString().padStart(2, '0')}</strong> elementos</span>
                </div>
                <div className="evidence-grid">
                  {project.gallery.map((item, index) => (
                    <button
                      className="evidence-image"
                      key={item.src}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`Ampliar imagen: ${item.alt}`}
                    >
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <span><Images size={15} /> Ampliar</span>
                    </button>
                  ))}
                </div>
              </section>
            )}
            {project.documents && project.documents.length > 0 && (
              <section className="detail-section" id="documentacion">
                <p className="eyebrow">Archivos del proyecto</p>
                <h2>Documentación</h2>
                <p>Consulta los documentos en el navegador cuando sea posible o descarga el archivo original.</p>
                <ProjectDocuments documents={project.documents} />
              </section>
            )}
          </div>

          <aside className="detail-sidebar">
            {project.technologies.length > 0 && (
              <section className="sidebar-card">
                <p className="eyebrow">Herramientas</p>
                <h2>Tecnologías</h2>
                <div className="tag-list">
                  {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
                </div>
              </section>
            )}
            <section className="sidebar-card sidebar-card--accent">
              <span className="sidebar-card__number">{evidenceCount.toString().padStart(2, '0')}</span>
              <h2>Evidencias disponibles</h2>
              <p>Capturas y documentos asociados a este trabajo.</p>
            </section>
            {project.repository && (
              <a className="sidebar-repository" href={project.repository} target="_blank" rel="noopener noreferrer">
                <Code2 size={18} /><span><small>Repositorio</small>Ver código en GitHub</span><ArrowUpRight size={16} />
              </a>
            )}
            <Link className="sidebar-back" to="/#proyectos"><ArrowLeft size={16} /> Volver al portafolio</Link>
          </aside>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span className="brand__name">Luis Gael Bonilla Paleta</span>
          <p>Portafolio de desarrollo de software · 2026</p>
          <Link className="back-top" to="/#inicio">Inicio ↑</Link>
        </div>
      </footer>
      <ImageLightbox
        images={project.gallery}
        activeIndex={activeImage}
        onClose={closeLightbox}
        onChange={changeLightboxImage}
      />
    </main>
  );
};

export default ProjectDetailPage;
