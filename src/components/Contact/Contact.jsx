import { motion } from 'framer-motion';
import { contactData, socialLinks } from '../../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay },
});

export default function Contact() {
  const { heading, sub, email, phones } = contactData;

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.p className="section__eyebrow" {...fadeUp(0)}>Contact</motion.p>
        <motion.h2 className="section__title" {...fadeUp(0.08)}>{heading}</motion.h2>
        <motion.p className="section__sub" {...fadeUp(0.14)}>{sub}</motion.p>

        <div className="contact__inner">
          {/* Big email link */}
          <motion.a
            href={`mailto:${email}`}
            className="contact__email-link"
            {...fadeUp(0.18)}
          >
            {email}
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </motion.a>

          {/* Detail cards */}
          <motion.div className="contact__details" {...fadeUp(0.24)}>
            <div className="contact__detail-item">
              <i className="fa-regular fa-envelope" />
              <span>{email}</span>
            </div>
            {phones.map(phone => (
              <div key={phone} className="contact__detail-item">
                <i className="fa-solid fa-phone" />
                <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div className="contact__actions" {...fadeUp(0.3)}>
            <a href={`mailto:${email}`} className="btn btn--primary">
              <i className="fa-regular fa-envelope" /> Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/vignesh-g-0023aa116/"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              <i className="fa-brands fa-linkedin" /> LinkedIn
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div className="contact__social" {...fadeUp(0.36)}>
            <span className="contact__social-label">Find me on</span>
            {socialLinks.map(({ id, icon, url, label }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="contact__social-link"
              >
                <i className={icon} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
