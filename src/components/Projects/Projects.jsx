import { motion } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';
import ProjectRow from './ProjectRow';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.p
          className="section__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          Work
        </motion.p>
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.07 }}
        >
          Selected projects
        </motion.h2>

        {/* Table header — hidden on mobile via SCSS */}
        <motion.div
          className="projects__header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
        </motion.div>

        <div className="projects__list">
          {/* Column header row */}
          <div className="projects__list-header">
            <span className="projects__th">#</span>
            <span className="projects__th">Project</span>
            <span className="projects__th">Stack</span>
            <span className="projects__th projects__th--hide-md">Year</span>
            <span className="projects__th">Links</span>
          </div>

          {projectsData.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          style={{ marginTop: '3.2rem', display: 'flex' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="https://github.com/VigneshG1616"
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            <i className="fa-brands fa-github" /> More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
