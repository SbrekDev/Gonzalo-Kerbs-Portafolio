const PresentationComponent = () => {
  return (
    <div className="relative">
      <div
        className="h-screen w-full bg-fixed bg-cover bg-center absolute -z-10"
        style={{ backgroundImage: 'url("images/background.webp")' }}
      ></div>
      <div className="w-full h-screen flex flex-col justify-around" id="home">
        <div className="flex flex-col justify-center items-center mt-10 md:mt-24">
          <div className="relative flex justify-center items-center size-72 ">
            <img
              src="/circle.svg"
              alt="efecto circulo"
              className="absolute size-72"
            />
            <img
              src="images/profile__img2.webp"
              alt="retrato gonzalo"
              className="w-56 md:w-72 drop-shadow-lg"
            />
          </div>
          <div className="flex justify-center flex-col md:mt-10">
            <h1 className="text-6xl font-semibold text-center text-primary-dark">
              Gonzalo Kerbs
            </h1>
            <h2 className="mt-1 text-primary-light drop-shadow text-center md:text-3xl">
              Desarrollador FullStack
            </h2>
          </div>
        </div>
        <div className="flex justify-center gap-4 text-2xl text-primary-light/70 drop-shadow-md md:text-4xl md:gap-8">
          <a
            className="hover:text-accent md:hover:scale-125 md:transition-all "
            href="https://www.linkedin.com/in/gonzalo-kerbs"
            target="_blank"
            aria-label="link linkedin"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a
            className="hover:text-accent md:hover:scale-125 md:duration-200 "
            href="https://api.whatsapp.com/send?phone=543435031208"
            target="_blank"
            aria-label="link whatsapp"
          >
            <i className="fa-brands fa-whatsapp" />
          </a>
          <a
            className="hover:text-accent md:hover:scale-125 md:duration-200 "
            href="https://www.instagram.com/gonzaakerbs"
            target="_blank"
            aria-label="link instagram"
          >
            <i className="fa-brands fa-instagram" />
          </a>
          <a
            className="hover:text-accent md:hover:scale-125 md:duration-200 "
            href="https://twitter.com/GonzaaaKerbs"
            target="_blank"
            aria-label="link twitter x"
          >
            <i className="fa-brands fa-x-twitter" />
          </a>
        </div>
        <div className="flex justify-center relative">
          <a
            className=" hover:scale-150 md:transition-all "
            href="#profile"
            aria-label="siguiente pagina"
          >
            <i className="fa-solid fa-chevron-down text-4xl text-primary-light drop-shadow-md" />
          </a>
        </div>
      </div>
      <div className="absolute w-full -z-10 overflow-hidden bottom-0 md:hidden">
        <img
          src="/wave.svg"
          alt="animated waves"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:block bg-gradient-to-t from-primary-dark to-transparent w-full h-80 absolute bottom-0 -z-10"></div>
    </div>
  );
};

export default PresentationComponent;
