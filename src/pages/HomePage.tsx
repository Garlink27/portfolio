import { useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  GitBranch,
  Network,
  Menu,
  Moon,
  Search,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { projectCategories, projects, type ProjectCategory } from '../data/projects';
import { useTheme } from '../context/ThemeContext';

type CategoryFilter = 'Todas' | ProjectCategory;

const skillGroups = [
  { title: 'Desarrollo', skills: ['C#', '.NET MAUI', 'Blazor'] },
  { title: 'Datos y servicios', skills: ['SQLite', 'PostgreSQL', 'MySQL', 'OData', 'API TCGdex'] },
  { title: 'Herramientas y procesos', skills: ['SAP Signavio', 'SAP Fiori Guidelines', 'ITIL'] },
];

const cvUrl = `${import.meta.env.BASE_URL}evidencias/cv/CV.pdf`;

export const HomePage = () => {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('Todas');

  const matchingProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('es');
    return projects.filter((project) => {
      const matchesCategory = category === 'Todas' || project.category === category;
      const searchableText = `${project.title} ${project.summary} ${project.technologies.join(' ')}`
        .toLocaleLowerCase('es');
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [category, query]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Ir al inicio">
            <span className="brand__mark">GB</span>
            <span className="brand__name">Luis Gael Bonilla Paleta</span>
          </a>
          <button
            className="icon-button mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Navegación principal">
            <a href="#inicio" onClick={closeMenu}>Inicio</a>
            <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
            <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
            <a href="#hackatones" onClick={closeMenu}>Hackatones</a>
            <a href="#expo-ingenierias" onClick={closeMenu}>Expo-Ingenierías</a>
            <a href="#certificaciones" onClick={closeMenu}>Certificaciones</a>
            <a href="#curriculum" onClick={closeMenu}>CV</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
            <button
              className="icon-button theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> Portafolio de desarrollo de software</p>
              <h1>Transformando ideas en <span>soluciones digitales.</span></h1>
              <p className="hero-lede">
                Soy Luis Gael Bonilla Paleta. Explora mis proyectos, experiencias académicas y
                soluciones tecnológicas desarrolladas a lo largo de mi formación.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#proyectos">
                  Explorar proyectos <ArrowRight size={17} />
                </a>
                <a className="button button--outline" href="#curriculum">
                  Ver currículum <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="hero-socials">
                <a href="https://github.com/Garlink27" target="_blank" rel="noopener noreferrer">
                  <GitBranch size={17} /> GitHub <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://www.linkedin.com/in/luis-gael-bonilla-paleta-646511408/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Network size={17} /> LinkedIn <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
            <div className="hero-art" aria-label="Desarrollo, ideas y tecnología">
              <div className="hero-orbit hero-orbit--one" />
              <div className="hero-orbit hero-orbit--two" />
              <div className="hero-code-card">
                <div className="code-card__top"><span /><span /><span /><small>ideas.ts</small></div>
                <pre aria-hidden="true"><code><span className="code-purple">const</span> idea = {'{'}{'\n'}  <span className="code-cyan">curiosity</span>: <span className="code-green">true</span>,{'\n'}  <span className="code-cyan">learning</span>: <span className="code-green">"always"</span>,{'\n'}  <span className="code-cyan">build</span>: () =&gt; <span className="code-green">"solutions"</span>{'\n'}{'}'};</code></pre>
                <div className="code-card__footer"><span><Code2 size={14} /> crear · aprender · compartir</span><span className="code-cursor" /></div>
              </div>
              <div className="hero-float hero-float--projects"><BriefcaseBusiness size={15} /> 10 proyectos documentados</div>
              <div className="hero-float hero-float--learning"><Sparkles size={15} /> Aprendizaje continuo</div>
              <div className="hero-vertical-label">PORTAFOLIO · 2026</div>
            </div>
          </div>
          <a className="scroll-cue" href="#sobre-mi"><ArrowDown size={16} /> Desliza para explorar</a>
        </section>

        <section className="section section--about" id="sobre-mi">
          <div className="container about-layout">
            <div className="section-intro">
              <p className="eyebrow">01 / Perfil</p>
              <h2>Sobre mí</h2>
              <p className="section-lede">Interés por construir, entender y mejorar soluciones con tecnología.</p>
            </div>
            <div className="about-content">
              <p className="about-lede">
                Mi portafolio reúne proyectos académicos de desarrollo móvil y web, bases de datos,
                modelado de procesos y gestión de proyectos. En cada ficha encontrarás las evidencias
                disponibles y el alcance que puede verificarse en ellas.
              </p>
              <p>
                He trabajado con aplicaciones .NET MAUI y Blazor, persistencia de datos, servicios
                OData y APIs, además de documentación de ingeniería de software y actividades en equipo.
                Me interesa seguir aprendiendo y crear herramientas claras y útiles.
              </p>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <div className="tag-list">
                      {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--projects" id="proyectos">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / Trabajo seleccionado</p>
                <h2>Proyectos y evidencias</h2>
                <p className="section-lede">Una selección de proyectos académicos, retos y experiencias de equipo.</p>
              </div>
              <span className="project-count"><strong>{projects.length.toString().padStart(2, '0')}</strong> proyectos</span>
            </div>

            <div className="project-toolbar">
              <div className="filter-list" role="group" aria-label="Filtrar proyectos por categoría">
                {(['Todas', 'Académico', 'Hackatón', 'Expo-Ingenierías'] as CategoryFilter[]).map((filter) => (
                  <button
                    className={`filter-chip${category === filter ? ' is-active' : ''}`}
                    key={filter}
                    type="button"
                    onClick={() => setCategory(filter)}
                    aria-pressed={category === filter}
                  >
                    {filter === 'Todas' ? 'Todos' : filter === 'Académico' ? 'Académicos' : filter}
                  </button>
                ))}
              </div>
              <label className="search-field">
                <Search size={17} />
                <span className="sr-only">Buscar proyectos</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar por nombre o tecnología"
                />
                {query && (
                  <button type="button" onClick={() => setQuery('')} aria-label="Limpiar búsqueda">
                    <X size={15} />
                  </button>
                )}
              </label>
            </div>

            <div className="project-groups">
              {projectCategories.map((group) => {
                const groupProjects = matchingProjects.filter((project) => project.category === group.category);
                if (!groupProjects.length) return null;

                return (
                  <section className="project-group" id={group.id} key={group.id}>
                    <div className="project-group__heading">
                      <div>
                        <p className="eyebrow">{group.id === 'proyectos-academicos' ? 'Exploración y práctica' : group.label}</p>
                        <h3>{group.label}</h3>
                      </div>
                      <span>{groupProjects.length.toString().padStart(2, '0')}</span>
                    </div>
                    <div className="project-grid">
                      {groupProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
                    </div>
                  </section>
                );
              })}
              {matchingProjects.length === 0 && (
                <div className="empty-search">
                  <Search size={22} />
                  <p>No se encontraron proyectos con esos criterios.</p>
                  <button className="text-link" type="button" onClick={() => { setCategory('Todas'); setQuery(''); }}>
                    Limpiar filtros <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section section--certifications" id="certificaciones">
          <div className="container certification-panel">
            <div className="certification-panel__icon"><BookOpen size={22} /></div>
            <div>
              <p className="eyebrow">03 / Aprendizaje</p>
              <h2>Certificaciones</h2>
              <p>
                En las evidencias revisadas no se localizaron certificados para publicar.
                Esta sección queda lista para incorporar registros verificables.
              </p>
            </div>
            <span className="certification-empty">Sin registros disponibles</span>
          </div>
        </section>

        <section className="section section--resume" id="curriculum">
          <div className="container resume-layout">
            <div>
              <p className="eyebrow">04 / Trayectoria</p>
              <h2>Currículum</h2>
              <p className="section-lede">Consulta o descarga el documento original en PDF.</p>
              <a className="button button--primary" href={cvUrl} target="_blank" rel="noopener noreferrer">
                Abrir CV <ArrowUpRight size={16} />
              </a>
              <a className="resume-download" href={cvUrl} download>
                Descargar PDF <ArrowDown size={15} />
              </a>
            </div>
            <div className="resume-preview">
              <div className="resume-preview__bar"><span /><span /><span /><small>CV · PDF</small></div>
              <iframe src={cvUrl} title="Vista previa del currículum de Luis Gael Bonilla Paleta" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">05 / Contacto</p>
              <h2>¿Hablamos de tecnología?</h2>
              <p>Encuéntrame en mis perfiles profesionales.</p>
            </div>
            <div className="contact-links">
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/luis-gael-bonilla-paleta-646511408/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Network size={20} /><span><small>Conectemos en</small>LinkedIn</span><ArrowUpRight size={17} />
              </a>
              <a className="contact-link" href="https://github.com/Garlink27" target="_blank" rel="noopener noreferrer">
                <GitBranch size={20} /><span><small>Explora mi código en</small>GitHub</span><ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <a className="brand" href="#inicio"><span className="brand__mark">GB</span><span className="brand__name">Luis Gael Bonilla Paleta</span></a>
          <p>Portafolio de desarrollo de software <span>·</span> 2026</p>
          <a className="back-top" href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
