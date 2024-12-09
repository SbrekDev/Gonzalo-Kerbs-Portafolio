const ProjectsComponent = () => {
  return (
    <>
      <section className="relative bg-accent" id="projects">
        <div className="absolute w-full overflow-hidden top-0">
          <img
            src="/wave.svg"
            alt="animated waves"
            className="w-full h-full rotate-180 object-cover"
          />
        </div>
        <div className="pt-28">
          <h2 className="text-primary-dark text-3xl text-center mb-3">
            PORTFOLIO
          </h2>
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
