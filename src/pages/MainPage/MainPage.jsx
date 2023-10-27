import styles from './SinglePage.module.css';
import { Parallax } from 'react-parallax';
import MainCarousel from '../../modules/MainCarousel/MainCarousel.jsx';
import ContactForm from '../../modules/ContactForm/ContactForm';
import MainPageImage from '../../assets/images/MainPagePhoto.webp';
import locales from '../../assets/localization/localization.js';
import { useLocale } from '../../assets/localization/localeContext.js';

const MainPage = () => {
    const { currentLocale } = useLocale();

  return (
    <>
      <Parallax id="topNav" bgImage={MainPageImage} strength={200}>
        <div style={{ height: '100vh' }} />
      </Parallax>
      <div className={styles.body}>
        <p id="aboutNav" className={styles.mainText}></p>
        <p className={styles.headerText}>{locales[currentLocale].MainPage.welcomeText}</p>
          <p className={styles.mainText}>{locales[currentLocale].MainPage.aboutText}</p>
        <div className={styles.picture}>
          <MainCarousel />
        </div>
          <p id="scheduleNav" className={styles.mainText}></p>
          <p className={styles.headerText}>{locales[currentLocale].MainPage.howToJoinText}</p>
          <div className={styles.col}>
            <div className={styles.infoForm}>
              <p className={styles.infoText}>{locales[currentLocale].MainPage.individualTrainingTitle}</p>
              <p className={styles.mainText}>{locales[currentLocale].MainPage.individualTrainingText}</p>
            </div>
            <div className={styles.infoForm}>
              <p className={styles.infoText}>{locales[currentLocale].MainPage.groupTrainingTitle}</p>
              <p className={styles.mainText}>{locales[currentLocale].MainPage.groupTrainingText}</p>
            </div>
            <div className={styles.contactForm}>
              <p className={styles.formText}>{locales[currentLocale].MainPage.contactFormTitle}</p>
              <ContactForm />
            </div>
          </div>
      </div>
        <iframe title="maps"
                id="contactsNav"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad15cdbe0f91a8e6531040b5f5541c4173e772ff6cea8d6c43e6c716c50f152a6&amp;source=constructor"
                width="100%"
                height="400"
                frameborder="0"/>
    </>
    );
};

export default MainPage;
