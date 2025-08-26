import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactComponent = () => {

  const [copied, setCopied] = useState(false)
  const {t} = useTranslation()

  const copyEmail = () => {
    const email = "gonzakerbs@gmail.com"
    navigator.clipboard.writeText(email)
       .then(() => setCopied(true))
       .catch(e => console.error("Error copiando email:", e))

    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }

  return (
    <>
      <section className="relative z-30 text-primary-light pb-8 pt-10 lg:pt-48 flex flex-col items-center px-3 md:px-12 xl:px-32 3xl:px-96 overflow-hidden" id="contact">

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-offset="0"
            className="flex items-center bg-primary-dark justify-center w-full md:gap-3 md:pb-10 lg:pb-12 z-30"
          >
          <div className="hidden lg:block absolute w-[50%] h-96 rounded-r-full left-[-35%] bg-gradient-to-r from-transparent to-accent"></div>
          <div className="hidden lg:block absolute w-[50%] h-96 rounded-l-full right-[-35%] bg-gradient-to-l from-transparent to-accent"></div>
            <div className="flex flex-col justify-center items-center gap-5 px-6">
              <h3 className="text-3xl text-center mb-3 py-2 px-2 border-b border-primary-dark uppercase font-semibold">
                {t('CONTACT_SUBTITLE')}
              </h3>
              <p className="text-center font-extralight max-w-xl">
                {" "}
              {t('CONTACT_TEXT_1')}{" "}
                <strong className="text-accent">
                {t('CONTACT_TEXT_STRONG_1')}
                </strong>
              {t('CONTACT_TEXT_2')}
              </p>              
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center gap-5 h-96">
            <div
              className="text-center flex flex-col justify-center items-center"
            >
              <h4 className="text-xl w-full text-center mb-3 py-2 border-b-2 rounded-md border-accent max-w-64 uppercase">
                {t('CONTACT_EMAIL')}
              </h4>
              <img src="/images/email.png" className="w-56 pt-5" alt="email direction" />
            </div>
            <div className="relative w-full">
            <button onClick={copyEmail} className="text-center w-full bg-accent px-5 py-2 rounded-md shadow-md hover:bg-secondary hover:text-accent md:transition-all">{t("CONTACT_COPY_BUTTON")}</button>
              {copied && (
              <p className="absolute left-1/2 -translate-x-1/2 bottom-[-36px] w-56 text-accent text-center mx-auto">{t('CONTACT_COPY_MESSAGE')} <i className="fa-solid fa-circle-check"></i></p>
              )}
            </div>
          </div>

        <footer className="p-5 w-full flex justify-center md:justify-between md:items-center md:px-20">
          <div>
            <p className="text-center">
              Gonzalo Kerbs - {new Date().getFullYear()}
            </p>
            <p className="text-center text-sm  font-light">
              React | TailwindCSS | TypeScript
            </p>
          </div>
          <h3 className="font-extralight drop-shadow-xl text-center text-6xl hidden md:block">
            G<span className="font-extrabold text-accent">K</span>
          </h3>
        </footer>
      </section>
    </>
  );
};

export default ContactComponent;
