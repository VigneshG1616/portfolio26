import { socialLinks } from '../../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__name">
            Vignesh G<span>.</span>
          </span>
          <span className="footer__copy">
            &copy; {year} — Designed &amp; built from scratch
          </span>
        </div>

        <div className="footer__right">
          <a href="#hero" className="footer__back">
            <i className="fa-solid fa-arrow-up" /> Back to top
          </a>
          <div className="footer__social">
            {socialLinks.map(({ id, icon, url, label }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="footer__social-link"
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
