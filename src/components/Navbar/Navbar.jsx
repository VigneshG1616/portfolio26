import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { navLinks, heroData } from '../../data/portfolioData';

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="navbar__inner">
          <a href="#hero" className="navbar__logo">
            VG<span>.</span>
          </a>

          {/* <div className="navbar__status">
            <span className="navbar__status-dot" />
            <span className="navbar__status-text">Open to opportunities</span>
          </div> */}

          <div className="navbar__right">
            <ul className="navbar__links">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="navbar__link">{label}</a>
                </li>
              ))}
              <li>
                <a href={heroData.resumeUrl} download className="btn btn--ghost btn--sm">
                  Resume <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </li>
            </ul>

            {/* Theme toggle */}
            <motion.button
              className="navbar__theme-btn"
              onClick={toggle}
              aria-label="Toggle theme"
              whileTap={{ scale: 0.88 }}
              whileHover={{ scale: 1.08 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.i
                  key={isDark ? 'sun' : 'moon'}
                  className={isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
            </motion.button>

            {/* Hamburger */}
            <button
              className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Open menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="navbar__mobile-link" onClick={close}>
                {label} <i className="fa-solid fa-arrow-right" />
              </a>
            ))}
            <a
              href={heroData.resumeUrl}
              download
              className="btn btn--ghost navbar__mobile-resume"
              onClick={close}
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
