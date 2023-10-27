import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LogoWhite from '../../assets/icon/LogoWhite.png';
import locales from '../../assets/localization/localization.js';
import { useLocale } from '../../assets/localization/localeContext.js';
import BurgerMenuWrapper from "./BurgerMenuWrapper";
import { scrollToElement } from './utils';


function Header() {
  const { currentLocale } = useLocale();

  
  return (
    <div className="header">
      <Link onClick={() => scrollToElement('topNav')} to={""}>
        <img alt='FSC Logo' className="header-logo" src={LogoWhite} />
      </Link>
      <BurgerMenuWrapper>
        <Link to="/about" onClick={() => scrollToElement('aboutNav')} className="button">
          {locales[currentLocale].Header.aboutLinkText}
        </Link>
        <Link to="/schedule" onClick={() => scrollToElement('scheduleNav')} className="button">
          {locales[currentLocale].Header.scheduleLinkText}
        </Link>
        <Link to="/contact" onClick={() => scrollToElement('contactsNav')} className="button">
          {locales[currentLocale].Header.contactLinkText}
        </Link>
      </BurgerMenuWrapper>
    </div>
    );
}

export default Header;
