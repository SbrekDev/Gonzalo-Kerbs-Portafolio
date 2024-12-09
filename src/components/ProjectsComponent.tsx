const ProjectsComponent = () => {
  return (
    <>
      <section className="projects relative " id="projects">
        <div className="absolute w-full -z-10 overflow-hidden top-0">
          <img
            src="/wave.svg"
            alt="animated waves"
            className="w-full h-full rotate-180 object-cover"
          />
        </div>
        <div className="projects__wrapper">
          <div className="projects__polygon pr--1"></div>
        </div>
        <div className="projects__wrapper">
          <div className="projects__polygon pr--2"></div>
        </div>
        <div className="projects__wrapper">
          <div className="projects__polygon pr--3"></div>
        </div>
        <div className="">
          <h2 className="text-primary-light">PORTFOLIO PERSONAL</h2>
          <div className="portfolio__project-container">
            <article className="portfolio__project pj-1">
              <a
                className="project__link"
                href="https://storied-crisp-bee3f5.netlify.app/"
                target="_blank"
                aria-label="link proyecto starkerbs"
              >
                <div className="project__description">
                  <h3>StarKerbs</h3>
                  <p>
                    Pagina web dedicada a la fotografia espacial y los misterios
                    que revela el universo conocido
                  </p>
                </div>
              </a>
            </article>
            <article className="portfolio__project">
              <a
                className="project__link"
                href="#"
                target="_blank"
                aria-label="link proyecto faltante"
              >
                <div className="project__description">
                  <h3>Project</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam quaerat, deserunt simi.
                  </p>
                </div>
              </a>
            </article>
            <article className="portfolio__project">
              <a
                className="project__link"
                href="#"
                target="_blank"
                aria-label="link proyecto faltante"
              >
                <div className="project__description">
                  <h3>Project</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam quaerat, deserunt simi.
                  </p>
                </div>
              </a>
            </article>
            <article className="portfolio__project">
              <a
                className="project__link"
                href="#"
                target="_blank"
                aria-label="link proyecto faltante"
              >
                <div className="project__description">
                  <h3>Project</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam quaerat, deserunt simi.
                  </p>
                </div>
              </a>
            </article>
            <article className="portfolio__project">
              <a
                className="project__link"
                href="#"
                target="_blank"
                aria-label="link proyecto faltante"
              >
                <div className="project__description">
                  <h3>Project</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam quaerat, deserunt simi.
                  </p>
                </div>
              </a>
            </article>
            <article className="portfolio__project">
              <a
                className="project__link"
                href="#"
                target="_blank"
                aria-label="link proyecto faltante"
              >
                <div className="project__description">
                  <h3>Project</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam quaerat, deserunt simi.
                  </p>
                </div>
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsComponent;
