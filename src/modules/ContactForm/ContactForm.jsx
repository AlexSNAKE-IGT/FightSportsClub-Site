import { useForm } from 'react-hook-form';
import { useLocale } from '../../assets/localization/localeContext.js';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css'
import locales from '../../assets/localization/localization.js';

const ContactForm = () => {
  const { currentLocale } = useLocale();
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const key = process.env.REACT_APP_KEY;

  const onSubmit = async (data) => {
    const { name, email, contactPhone, message } = data;
    try {
      const templateParams = {
        name,
        email,
        contactPhone,
        message
      };

      await emailjs.send(
        serviceID,
        templateId,
        templateParams,
        key
        );

      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.mainDiv}>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.formItem}>
          <label className={styles.labelText} htmlFor="name">
            {locales[currentLocale].ContactForm.name}
          </label>
            <input
              className={styles.input}
              type='text'
              name='name'
              {...register(
                'name',{required: 'Как к вам обращаться?',
                maxLength: {
                  value: 30,
                  message: 'Пожалуйста введите 30 и менее символов'}
                })}
              placeholder='Иванов Иван'
            />
          </div>
        <div className={styles.formItem}>
          <label className={styles.labelText} htmlFor="email">
            {locales[currentLocale].ContactForm.email}
          </label>
            <input
              className={styles.input}
              type='email'
              name='email'
              {...register('email', {
                required: 'Пожалуйста введите корректный почтовый адрес.',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Пожалуйста введите корректный почтовый адрес.'
                }
              })}
              placeholder='example@email.com'
            />
          </div>
        <div className={styles.formItem}>
          <label className={styles.labelText} htmlFor="contactPhone">
            {locales[currentLocale].ContactForm.contactPhone}
          </label>
          <input
            className={styles.input}
            type='phone'
            name='contactPhone'
            {...register('contactPhone', {
              required: 'Пожалуйста введите номер телефона',
              minLength: {
                value: 9,
                message: 'Обычно номера длиннее'
              },
              maxLength: {
                value: 12,
                message: 'Номер телефона слишком длинный.'
              }
            })}
            placeholder='+7 (123) 456-78-90'
          />
        </div>
        <div className={styles.formItem}>
          <label className={styles.labelText} htmlFor="message">
            {locales[currentLocale].ContactForm.message}
          </label>
          <textarea
            className={styles.textArea}
            rows={3}
            name='message'
            {...register('message',
                         {required: 'Задайте интересующий вас вопрос.'})}
            placeholder='Сколько стоит индивидуальная тренировка?'
          />
        </div>
        <button className={styles.button} type='submit'>Отправить</button>
        </form>
        </div>
  );
  };

  export default ContactForm;
