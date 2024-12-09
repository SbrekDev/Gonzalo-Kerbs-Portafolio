const SkillsComponent = () => {
  return (
    <div className="relative bg-primary-dark text-primary-light">
      <section className="profile" id="profile">
        <div className="">
          <div className="">
            <div className="flex ">
              <div className="w-96 hidden">
                <img src="src/images/profile__img2.webp" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-5 p-6 mt-3  py-5 mx-3 shadow-2xl rounded-md">
                <h3 className="text-2xl text-center">Sobre Mí</h3>
                <p className="text-center">
                  Desarrollador web autodidacta, apasionado por la{" "}
                  <strong>informática y el diseño</strong>. Proveniente de
                  Argentina.
                </p>
                <p className="text-center">
                  Llevo un año especializándome en el área del Front-end,
                  aprendiendo <strong>nuevos recursos</strong> a diario para{" "}
                  <strong>mejorar la calidad de mis servicios</strong>.
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

            <div className="">
              <div className="">
                <div className="">
                  <h3>Aptitudes</h3>
                  <div className="">
                    <ul className="">
                      <li>Disciplina</li>
                      <li>Actitud Positiva</li>
                      <li>Aprendizaje Continuo</li>
                      <li>Fácil Adaptación</li>
                      <li>Disposición</li>
                      <li>Nivel de Inglés: Medio</li>
                      <li>Diseño UX</li>
                      <li>Conocimiento Multimedia</li>
                    </ul>
                  </div>
                </div>
                <div className="certification__details">
                  <h3>Certificaciones</h3>
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
                </div>
              </div>

              <div className="profile__skills">
                <h3>Tecnologias Adquiridas</h3>
                <div className="languajes__principal">
                  <div className="languaje__item">
                    <i className="devicon-html5-plain" />
                    <p>HTML5</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-css3-plain" />
                    <p>CSS</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-javascript-plain" />
                    <p>JAVASCRIPT</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-tailwindcss-original" />
                    <p>TAILWIND</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-bootstrap-plain" />
                    <p>BOOTSTRAP</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-react-original" />
                    <p>REACT</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-angular-plain" />
                    <p>ANGULAR</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-git-plain" />
                    <p>GIT</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-bitbucket-original" />
                    <p>BITBUCKET</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-vscode-plain" />
                    <p>VSCODE</p>
                  </div>
                </div>
                <h3>Tecnologias en Aprendizaje</h3>
                <div className="languajes__learning">
                  <div className="languaje__item">
                    <i className="devicon-astro-plain" />
                    <p>ASTRO</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-python-plain" />
                    <p>PYTHON</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-typescript-plain" />
                    <p>TYPESCRIPT</p>
                  </div>
                  <div className="languaje__item">
                    <i className="devicon-vuejs-plain" />
                    <p>VUE</p>
                  </div>
                </div>
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
