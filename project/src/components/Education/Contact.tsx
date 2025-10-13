import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { socialLinks } from '../../data/portfolio';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const handleEmail = () => {
    const emailAddress = "victor.azam10@gmail.com";
    const subject = "Contato pelo Portfólio";
    const body = "Olá Victor! Vi o seu portfólio e gostaria de conversar...";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Tente com _blank para garantir em todos os navegadores
    window.open(mailtoLink, "_blank");

    console.log("email");
  };

  return (
    <section
      id="contact"
      className={styles.contact}
      ref={ref}
      aria-labelledby="contact-title"
    >
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 id="contact-title" className={styles.title}>
          {t('contactTitle')}
        </h2>

        <p className={styles.description}>
          {t('contactDescription')}
        </p>

        <div
          className={styles.socialLinks}
          role="list"
          aria-label="Links para redes sociais"
        >
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== 'Email' ? '_blank' : '_self'}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className={styles.socialLink}
              role="listitem"
              aria-label={`${link.name} - ${t('socialLink')}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={(e) => {
                // Se o link for do tipo 'Email', executa uma função customizada.
                if (link.name === 'Email') {
                  e.preventDefault(); // Impede a navegação padrão do href.
                  handleEmail();      // Chama a função que abre o cliente de email.
                }
                // Para outros links, o comportamento padrão do href é mantido.
              }}
            >
              <div className={styles.iconWrapper}>
                {/* Ícone é decorativo e escondido de leitores de tela */}
                <span className={styles.icon} aria-hidden="true">
                  {link.icon}
                </span>
              </div>
              <span className={styles.linkText}>
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;