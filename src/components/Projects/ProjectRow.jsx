import { motion } from 'framer-motion';

export default function ProjectRow({ project, index }) {
  const { title, tags, year, liveUrl, sourceUrl, featured } = project;

  return (
    <motion.div
      className="project-row"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: index * 0.06 }}
    >
      {/* Index number */}
      <span className="project-row__num">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Title */}
      <div className="project-row__title">
        {featured && <span className="project-row__featured-dot" title="Featured" />}
        {title}
      </div>

      {/* Tags */}
      <div className="project-row__tags">
        {tags.map(t => <span key={t} className="chip">{t}</span>)}
      </div>

      {/* Year */}
      <span className="project-row__year">{year}</span>

      {/* Links */}
      <div className="project-row__links">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="project-row__icon-link"
            aria-label={`${title} live demo`}
          >
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </a>
        )}
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="project-row__icon-link"
            aria-label={`${title} source code`}
          >
            <i className="fa-brands fa-github" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
