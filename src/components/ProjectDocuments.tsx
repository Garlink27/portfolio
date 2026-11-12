import { Download, FileText } from 'lucide-react';
import type { ProjectDocument } from '../data/projects';

interface ProjectDocumentsProps {
  documents: ProjectDocument[];
}

export function ProjectDocuments({ documents }: ProjectDocumentsProps) {
  return (
    <div className="document-list">
      {documents.map((item) => (
        <article className="document-item" key={item.href}>
          <div className="document-item__icon" aria-hidden="true">
            <FileText size={20} />
          </div>
          <div className="document-item__content">
            <span className="eyebrow">{item.type}</span>
            <h3>{item.title}</h3>
            {item.type === 'PDF' && (
              <details className="document-preview">
                <summary>Vista previa</summary>
                <iframe
                  src={item.href}
                  title={`Vista previa: ${item.title}`}
                  loading="lazy"
                />
              </details>
            )}
          </div>
          <a className="button button--small button--outline" href={item.href} download>
            <Download size={15} />
            Descargar
          </a>
        </article>
      ))}
    </div>
  );
}
