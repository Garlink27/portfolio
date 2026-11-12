import { ArrowDownRight, ArrowUpRight, ExternalLink, FolderKanban } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link
        className="project-card__visual"
        to={`/proyecto/${project.id}`}
        aria-label={`Ver detalles de ${project.title}`}
      >
        {project.cover ? (
          <img src={project.cover.src} alt={project.cover.alt} loading="lazy" />
        ) : (
          <span className="project-card__placeholder" aria-hidden="true">
            <FolderKanban size={42} strokeWidth={1.4} />
          </span>
        )}
        <span className="project-card__open" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </Link>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="eyebrow">{project.category}</span>
          <span className="project-card__year">Evidencias</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.technologies.length > 0 && (
          <div className="tag-list" aria-label="Tecnologías">
            {project.technologies.slice(0, 3).map((technology) => (
              <span className="tag" key={technology}>{technology}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tag tag--muted">+{project.technologies.length - 3}</span>
            )}
          </div>
        )}
        <div className="project-card__actions">
          <Link className="text-link" to={`/proyecto/${project.id}`}>
            Explorar proyecto <ArrowDownRight size={16} />
          </Link>
          {project.repository && (
            <a
              className="icon-link"
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir repositorio de ${project.title}`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
