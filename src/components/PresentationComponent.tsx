import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const PresentationComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative">
      <div
        className="h-screen w-full bg-fixed bg-cover bg-center absolute -z-10"
        style={{ backgroundImage: 'url("images/bg2.webp")' }}
      ></div>
      <div
        className="w-full h-screen flex flex-col justify-center xl:justify-center"
        id="home"
      >
        <div className="flex flex-col justify-center items-center gap-6 backdrop-blur-sm bg-secondary/25 rounded-md w-11/12 mx-auto lg:w-full py-16 xl:flex-row xl:gap-20">
          <div className="bg-primary-dark/85 md:p-10 rounded-xl"> 
            <div className="flex justify-center items-center size-72">
              <img
                data-aos="zoom-in"
                data-aos-duration="600"
                src="images/profile__img2.webp"
                alt="retrato gonzalo"
                className="w-56 md:w-72 drop-shadow-lg"
              />
            </div>
          </div>
          <div className="flex justify-center flex-col  xl:mt-0 xl:items-start select-none">
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="w-72 md:w-full text-3xl md:text-6xl font-semibold text-center text-primary-dark xl:text-[6rem]"
            >
              Gonzalo Kerbs
            </h1>
            <h2
              data-aos="fade-left"
              data-aos-duration="2000"
              className="mt-1 text-primary-light text-center md:text-3xl xl:text-5xl"
            >
              Desarrollador FullStack
            </h2>
            <div className="flex justify-center gap-4 text-2xl text-primary-light/70 drop-shadow-md mt-5 md:text-3xl xl:text-4xl md:gap-8">
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-offset="0"
              >
                <div className="md:hover:scale-125 md:transition-all">
                  <a
                    className="hover:text-primary-dark md:hover:scale-125 md:transition-all "
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
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                <div className="md:hover:scale-125 md:transition-all">
                  <a
                    className="hover:text-primary-dark md:duration-200 "
                    href="https://api.whatsapp.com/send?phone=543435031208"
                    target="_blank"
                    aria-label="link whatsapp"
                  >
                    <i className="fa-brands fa-whatsapp" />
                  </a>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="2500"
                data-aos-offset="0"
              >
                <div className="md:hover:scale-125 md:transition-all">
                  <a
                    className="hover:text-primary-dark md:duration-200 "
                    href="https://www.instagram.com/gonzaakerbs"
                    target="_blank"
                    aria-label="link instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                <div className="md:hover:scale-125 md:transition-all">
                  <a
                    className="hover:text-primary-dark md:duration-200 "
                    href="https://twitter.com/GonzaaaKerbs"
                    target="_blank"
                    aria-label="link twitter x"
                  >
                    <i className="fa-brands fa-x-twitter" />
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
          className="flex justify-center absolute bottom-10 right-0 left-0"
        >
          <a
            className="text-primary-light hover:scale-150 md:transition-all hover:text-primary-dark "
            href="#profile"
            aria-label="siguiente pagina"
          >
            <i className="fa-solid fa-chevron-down text-4xl drop-shadow-md lg:text-6xl" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-6 bg-gradient-to-t from-primary-dark to-transparent "></div>
    </div>
  );
};

export default PresentationComponent;
