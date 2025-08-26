import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";



const PresentationComponent = () => {

  const {t} = useTranslation()

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative z-30 overflow-hidden ">
      <div className="w-full h-screen fixed top-0 bg-primary-dark"></div>
      <img src="/wave-accent.svg" alt="efecto de animacion" className="fixed top-0 right-[-680px] 4xl:right-[-820px] scale-y-[-1] rotate-90"/>
      <img src="/wave-accent.svg" alt="efecto de animacion" className="fixed top-0 left-[-680px] 4xl:left-[-820px] rotate-90"/>
      <div
        className="w-full h-screen flex flex-col justify-start mt-24 md:justify-center md:mt-0"
        id="home"
      >
        <div className="flex flex-col justify-center items-center gap-4 md:gap-12 w-11/12 mx-auto lg:w-full py-16 xl:flex-row xl:gap-20">
          <div className="md:p-10">
            <div className="flex justify-center items-start md:items-center size-72 relative">
              <div className="absolute w-96 4xl:w-[450px] h-[220%] 4xl:h-[280%] rounded-b-full left-1/2 top-[-120%] md:top-[-100%] 4xl:top-[-150%] -translate-x-1/2 bg-gradient-to-b from-transparent to-accent"></div>
              <img
                data-aos="zoom-in"
                data-aos-duration="600"
                src="images/profile__img2.png"
                alt="retrato gonzalo"
                className="w-56 md:w-72 rounded-full"
              />
            </div>
          </div>
          <div className="flex justify-center flex-col xl:items-start select-none">
            <h1
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-72 md:w-full text-3xl md:text-6xl font-semibold text-center text-accent xl:text-[6rem]"
            >
              Gonzalo Kerbs
            </h1>
            <h2
              data-aos="fade-left"
              data-aos-duration="1000"
              className="mt-1 text-primary-light text-center md:text-3xl xl:text-5xl font-thin"
            >
              {t('PRESENTATION_SUBTITLE')}
            </h2>
            <div className="flex justify-center gap-4 text-2xl text-primary-light/70 drop-shadow-md mt-5 md:text-3xl xl:text-4xl md:gap-8">
              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-offset="0"
              >
                <div className="md:hover:scale-125 md:transition-all">
                  <a
                    className="hover:text-accent md:hover:scale-125 md:transition-all"
                    href="https://www.linkedin.com/in/gonzalo-kerbs"
                    target="_blank"
                    aria-label="link linkedin"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                <div className="md:hover:scale-125 md:transition-all">
                  <a
                    className="hover:text-accent md:duration-200 "
                    href="https://github.com/SbrekDev"
                    target="_blank"
                    aria-label="link github x"
                  >
                    <i className="fa-brands fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="0"
          className="flex justify-center h-48 md:h-24 absolute bottom-20 md:bottom-5 right-0 left-0"
        >
          <a
            className="text-primary-light hover:scale-150 md:transition-all hover:text-accent "
            href="#profile"
            aria-label="siguiente pagina"
          >
            <i className="fa-solid fa-chevron-down text-4xl drop-shadow-md lg:text-6xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PresentationComponent;
