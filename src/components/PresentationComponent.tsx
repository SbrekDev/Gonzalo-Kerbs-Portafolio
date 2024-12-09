const PresentationComponent = () => {
  return (
    <div className="relative">
      <div
        className="w-screen h-screen flex flex-col justify-around"
        id="home"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="relative flex justify-center items-center size-72 mt-10">
            <img
              src="/circle.svg"
              alt="efecto circulo"
              className="absolute size-72"
            />
            <img
              src="images/profile__img2.webp"
              alt="retrato gonzalo"
              className="w-56 drop-shadow-lg"
            />
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="text-6xl font-semibold text-center text-primary-dark">
              Gonzalo Kerbs
            </h1>
            <h2 className="mt-1 text-primary-light drop-shadow text-center">
              Desarrollador FullStack
            </h2>
          </div>
        </div>
        <div className="flex justify-center gap-4 text-2xl text-primary-light/70 drop-shadow-md">
          <a
            href="https://www.instagram.com/gonzaakerbs"
            target="_blank"
            aria-label="link instagram"
          >
            <i className="fa-brands fa-instagram" />
          </a>
          <a
            href="https://discord.gg/jE8mfWE"
            target="_blank"
            aria-label="link discord"
          >
            <i className="fa-brands fa-discord" />
          </a>
          <a
            href="https://twitter.com/GonzaaaKerbs"
            target="_blank"
            aria-label="link twitter x"
          >
            <i className="fa-brands fa-x-twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/gonzalo-kerbs"
            target="_blank"
            aria-label="link linkedin"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </div>
        <div className="flex justify-center relative">
          <a href="#profile" aria-label="siguiente pagina">
            <i className="fa-solid fa-chevron-down text-4xl text-primary-light drop-shadow-md" />
          </a>
        </div>
      </div>
      <div className="absolute w-full -z-10 overflow-hidden bottom-0">
            <img
              src="/wave.svg"
              alt="animated waves"
              className="w-full h-full object-cover"
            />
      </div>
    </div>
  );
};

export default PresentationComponent;
