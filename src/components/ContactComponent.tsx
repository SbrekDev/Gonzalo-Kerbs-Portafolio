const ContactComponent = () => {
  return (
    <>
      <section className="relative bg-primary-light" id="contact">
        <div className="pb-8 pt-10 flex flex-col justify-center items-center gap-5 px-5 mx-3 shadow-lg rounded-md">
          <h3 className="text-primary-dark text-3xl text-center mb-3 py-2 px-2 border-b border-primary-dark">
            CONTACTO
          </h3>
          <div className="text-center flex flex-col justify-center items-center font-extralight">
            <h4 className="text-primary-dark text-xl text-center mb-3 py-2 border-b border-primary-dark w-28">
              CORREO
            </h4>
            <p>gonzakerbs@gmail.com</p>
          </div>
          <div className="text-center flex flex-col justify-center items-center font-extralight">
            <h4 className="text-primary-dark text-xl text-center mb-3 py-2 border-b border-primary-dark w-36">
              TELÉFONO
            </h4>
            <p>+54 3435031208</p>
          </div>
          <div className="text-center flex flex-col justify-center items-center font-extralight">
            <h4 className="text-primary-dark text-xl text-center mb-3 py-2 border-b border-primary-dark w-48">
              REDES SOCIALES
            </h4>
            <div className="flex gap-5 mt-1 text-2xl text-secondary">
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
          </div>
        </div>
        <footer className="p-5 ">
          <p className="text-center">
            Gonzalo Kerbs - {new Date().getFullYear()}
          </p>
          <p className="text-center text-sm  font-light">
            React | TailwindCSS | TypeScript
          </p>
          <h3 className="font-extralight text-primary-light drop-shadow-xl text-center text-6xl mt-8">
            G<span className="font-extrabold text-accent">K</span>
          </h3>
        </footer>
      </section>
    </>
  );
};

export default ContactComponent;
