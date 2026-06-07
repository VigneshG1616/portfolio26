import { motion } from 'framer-motion';
import { heroData, socialLinks } from '../../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay },
});

export default function Hero() {
  const { name, roles, bio, resumeUrl, meta } = heroData;

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        {/* Status badge moved to navbar */}

        {/* Name */}
        <motion.h1 className="hero__heading" {...fadeUp(0.2)}>
          {name}
        </motion.h1>

        {/* Role row */}
        <motion.div className="hero__role" {...fadeUp(0.3)}>
          {roles.map((r, i) => (
            <span key={r}>
              {i > 0 && <span className="separator"> / </span>}
              <span className={i === 0 ? 'highlight' : ''}>{r}</span>
            </span>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.p className="hero__bio" {...fadeUp(0.4)}>
          {bio}
        </motion.p>

        {/* CTAs */}
        <motion.div className="hero__cta" {...fadeUp(0.5)}>
          <a href="#projects" className="btn btn--primary">
            View Work <i className="fa-solid fa-arrow-down" />
          </a>
          <a href={resumeUrl} download className="btn btn--ghost">
            <i className="fa-solid fa-download" /> Resume
          </a>
          {socialLinks.slice(0, 3).map(({ id, icon, url, label }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="btn btn--ghost"
              style={{ padding: '1.1rem 1.2rem' }}
            >
              <i className={icon} style={{ margin: 0 }} />
            </a>
          ))}
        </motion.div>

        {/* Meta row */}
        <motion.div className="hero__meta" {...fadeUp(0.6)}>
          {meta.map((item, i) => (
            <span key={item.label} style={{ display: 'contents' }}>
              {i > 0 && <div className="hero__meta-divider" />}
              <div className="hero__meta-item">
                <span className="hero__meta-label">{item.label}</span>
                <span className="hero__meta-value">{item.value}</span>
              </div>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
