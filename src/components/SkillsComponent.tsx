const SkillsComponent = () => {
  return (
    <div className="relative bg-primary-dark text-primary-light py-5">
      <section className="profile" id="profile">
        <div className="">
          <div className="">
            <div className="flex mb-5">
              <div className="w-96 hidden">
                <img src="src/images/profile__img2.webp" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-5 p-5 mx-3 shadow-2xl rounded-md">
                <h3 className="text-3xl text-center mb-3">PRESENTACIÓN</h3>
                <p className="text-center font-extralight">
                  Desarrollador web autodidacta, apasionado por la{" "}
                  <strong className="text-accent">
                    informática y el diseño
                  </strong>
                  . Proveniente de Argentina.
                </p>
                <p className="text-center font-extralight">
                  Llevo un año especializándome en el área del Front-end,
                  aprendiendo{" "}
                  <strong className="text-accent">nuevos recursos</strong> a
                  diario para{" "}
                  <strong className="text-accent">
                    mejorar la calidad de mis servicios
                  </strong>
                  .
                </p>
                <a
                  className="text-center bg-accent px-5 py-3 rounded-md shadow-md hover:bg-secondary hover:text-accent"
                  href="/cv/CV - Gonzalo Kerbs.pdf"
                  download="CV - Gonzalo Kerbs"
                >
                  Descargar CV <i className="fa-solid fa-download" />
                </a>
              </div>
            </div>
            <div className="mb-5 flex flex-col justify-center items-center gap-5 p-6 mt-3  py-5 mx-3 shadow-2xl rounded-md">
              <h3 className="text-3xl text-center mb-5">APTITUDES</h3>
              <div className="grid gap-6 font-extralight text-xl">
                <p>
                  <strong className="text-accent accent-shadow mr-2">⬤</strong>
                  Disciplina
                </p>
                <p>
                  <strong className="text-accent accent-shadow mr-2">⬤</strong>
                  Actitud Positiva
                </p>
                <p>
                  <strong className="text-accent accent-shadow mr-2">⬤</strong>
                  Aprendizaje Continuo
                </p>
                <p>
                  <strong className="text-accent accent-shadow mr-2">⬤</strong>
                  Adaptabilidad
                </p>
                <p>
                  <strong className="text-accent accent-shadow mr-2">⬤</strong>
                  Disposición
                </p>
                <p>
                  <strong className="text-accent accent-shadow mr-2">⬤</strong>
                  Compañerismo
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-3 py-5 mx-3 shadow-2xl rounded-md">
              <h3 className="text-3xl text-center mb-5">TECNOLOGÍAS</h3>
              <div className="grid gap-3 font-extralight text-xl">
                <div className="flex justify-between items-center gap-4  w-full px-5 py-3 bg-gradient-to-r from-accent/80 to-transparent">
                  <div>
                    <p className="font-semibold">HTML</p>
                    <p className=" text-sm">Profesional</p>
                  </div>
                  <i className="devicon-html5-plain text-accent text-4xl" />
                </div>
                <div className="flex justify-between items-center gap-4  w-full px-5 py-3 bg-gradient-to-r from-accent/80 to-transparent">
                  <div>
                    <p className="font-semibold">CSS</p>
                    <p className=" text-sm">Profesional</p>
                  </div>
                  <i className="devicon-css3-plain text-accent text-4xl" />
                </div>
                <div className="flex justify-between items-center gap-4  w-full px-5 py-3 bg-gradient-to-r from-accent/80 to-transparent">
                  <div>
                    <p className="font-semibold">JAVASCRIPT</p>
                    <p className=" text-sm">Profesional</p>
                  </div>
                  <i className="devicon-javascript-plain text-accent text-4xl" />
                </div>
                <div className="flex justify-between items-center gap-4  w-full px-5 py-3 bg-gradient-to-r from-accent/80 to-transparent">
                  <div>
                    <p className="font-semibold">REACT</p>
                    <p className=" text-sm">Profesional</p>
                  </div>
                  <i className="devicon-react-plain text-accent text-4xl" />
                </div>
                <div className="flex gap-4">
                  <i className="devicon-tailwindcss-original" />
                  <p>TAILWIND</p>
                </div>
                <div className="flex gap-4">
                  <i className="devicon-angular-plain" />
                  <p>ANGULAR</p>
                </div>
                <div className="flex gap-4">
                  <i className="devicon-git-plain" />
                  <p>GIT</p>
                </div>
                <div className="flex gap-4">
                  <i className="devicon-bitbucket-original" />
                  <p>BITBUCKET</p>
                </div>
                <div className="flex gap-4">
                  <i className="devicon-vscode-plain" />
                  <p>VSCODE</p>
                </div>
              </div>
              <h3>Tecnologias en Aprendizaje</h3>
              <div className="languajes__learning">
                <div className="flex gap-4">
                  <i className="devicon-astro-plain" />
                  <p>ASTRO</p>
                </div>
                <div className="flex gap-4">
                  <i className="devicon-python-plain" />
                  <p>PYTHON</p>
                </div>
                <div className="flex gap-4">
                  <i className="devicon-typescript-plain" />
                  <p>TYPESCRIPT</p>
                </div>
                <div className="flex gap-4">
                  <i className="devicon-vuejs-plain" />
                  <p>VUE</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-5 p-6 mt-3  py-5 mx-3 shadow-2xl rounded-md">
              <h3 className="text-3xl text-center mb-5">Certificaciones</h3>
              <div className="certification__details-content">
                <a
                  href="/cv/Responsive Web Design Certificado.pdf"
                  download="Responsive Web Design Certificado"
                >
                  <i className="fa-solid fa-graduation-cap" />
                  <p>Responsive Web Design</p>
                </a>
                <a
                  href="/cv/Coursera HTML, CSS, JS Certificado.pdf"
                  download="Coursera HTML, CSS, JS Certificado"
                >
                  <i className="fa-solid fa-graduation-cap" />
                  <p>HTML - CSS - JS</p>
                </a>
                <a
                  href="/cv/Coursera Bootstrap 4 Certificado.pdf"
                  download="Coursera Bootstrap 4 Certificado"
                >
                  <i className="fa-solid fa-graduation-cap" />
                  <p>Bootstrap</p>
                </a>
                <a
                  href="/cv/Coursera Python Certificado.pdf"
                  download="Coursera Python Certificado"
                >
                  <i className="fa-solid fa-graduation-cap" />
                  <p>Crash Python</p>
                </a>
                <a
                  href="/cv/Diseño de Videojuegos Diploma.pdf"
                  download="Diseño de Videojuegos Diploma"
                >
                  <i className="fa-solid fa-graduation-cap" />
                  <p>Videogames Design</p>
                </a>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                  <p>Más</p>
                </a>
              </div>

              <div className="profile__skills">
                <h3>Software Complementario</h3>
                <div className="languajes__design">
                  <div className="languaje__item">
                    <i className="devicon-illustrator-plain" />
                    <p>ADOBE ILLUSTRATOR</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-aftereffects-plain" />
                    <p>ADOBE AFTEREFFECTS</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-photoshop-plain" />
                    <p>ADOBE PHOTOSHOP</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-premierepro-plain" />
                    <p>ADOBE PREMIERE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsComponent;
