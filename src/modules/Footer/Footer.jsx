import React from 'react';
import styles from './Footer.module.css';
import LogoWhite from '../../assets/icon/LogoWhite.png';
import NavigateIcon from '../../assets/icon/NavigateIcon.svg';
import CallIcon from '../../assets/icon/CallIcon.svg';
import InstIcon from '../../assets/icon/inst.png';
import WhatsIcon from '../../assets/icon/whats.png';
import TgIcon from '../../assets/icon/tg.png';
import locales from '../../assets/localization/localization.js';
import { useLocale } from '../../assets/localization/localeContext.js';

const Footer = () => {
  const { currentLocale } = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGroup}>
        <img alt='' className={styles.footerLogo} src={LogoWhite} />
      </div>
      <div className={styles.footerGroup}>
        <a href={"https://instagram.com/sergei_kunagbekov"}>
          <img alt='' className={styles.footerSocNetIcon} src={InstIcon} />
        </a>
        <a href={"https://wa.me/79258936505"}>
          <img alt='' className={styles.footerSocNetIcon} src={WhatsIcon} />
        </a>
        <a href={"https://t.me/fightsportsclub"}>
          <img alt='' className={styles.footerSocNetIcon} src={TgIcon} />
        </a>
      </div>
      <div className={styles.footerGroup}>
        <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
          <img alt='' className={styles.footerIcon} src={NavigateIcon} />
          <p className={styles.footerText}>{locales[currentLocale].Footer.address}</p>
        </div>
        <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
          <img alt='' className={styles.footerIcon} src={CallIcon} />
          <p className={styles.footerText}>{locales[currentLocale].Footer.phoneNumber}</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;