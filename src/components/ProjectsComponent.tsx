import { useState } from "react";
import ReactModal from "react-modal";
import { Proyecto } from "../types";

const proyectos = [
  {
    nombre: "Quique Frío",
    tags: ["React", "TailwindCSS", "TypeScript", "PWA", "Vite"],
    iconos: ["react", "tailwindcss", "typescript", "vite"],
    pathImg: "projectImages/quiquefrio.png",
    url: "https://www.youtube.com/embed/hJZIT4JhMUM",
  },
  {
    nombre: "Dev Web Camp",
    tags: ["PHP", "JavaScript", "Sass", "MySql", "MVC"],
    iconos: ["php", "sass", "mysql", "javascript"],
    pathImg: "projectImages/devwebcamp.png",
    url: "",
  },
  {
    nombre: "Bienes Raíces Vue",
    tags: ["VueJs", "TailwindCSS", "NodeJs", "Vuetify", "Leaflet"],
    iconos: ["vuejs", "tailwindcss", "nodejs", "vite"],
    pathImg: "projectImages/bnvue.png",
    url: "https://www.youtube.com/embed/-FkjpyIK1Io",
  },
  {
    nombre: "Bienes Raices Node",
    tags: ["NodeJs", "Css", "Pug", "Leaflet", "Express", "MySql"],
    iconos: ["nodejs", "css3", "mysql"],
    pathImg: "projectImages/bnnode.png",
    url: "https://www.youtube.com/embed/T6AIFqFGOLY",
  },
  {
    nombre: "Bienes Raices PHP",
    tags: ["PHP", "Sass", "MySql", "JavaScript"],
    iconos: ["php", "sass", "mysql", "javascript"],
    pathImg: "projectImages/bnphp.png",
    url: "https://www.youtube.com/embed/M2VAdUbbNKI",
  },
  {
    nombre: "Agencia de Viajes",
    tags: ["NodeJs", "Css", "JavaScript", "MySql"],
    iconos: ["nodejs", "css3", "mysql", "JavaScript"],
    pathImg: "projectImages/agviajes.png",
    url: "https://www.youtube.com/embed/RRw6ENd5vUY",
  },
  {
    nombre: "Proyectos Varios",
    tags: [
      "NodeJs",
      "Css",
      "TailwindCSS",
      "React",
      "Fetch Api",
      "MySql",
      "JavaScript",
      "TypeScript",
    ],
    iconos: [
      "nodejs",
      "css3",
      "tailwindcss",
      "javascript",
      "react",
      "typescript",
      "vuejs",
    ],
    pathImg: "projectImages/varios.png",
    url: "https://www.youtube.com/embed/LWcXm8QHa60",
  },
];

ReactModal.setAppElement("#root");

const ProjectsComponent = () => {
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);

  function openModal(proyecto : Proyecto) {
    setSelectedProject(proyecto);
  }

  function closeModal() {
    setSelectedProject(null);
  }

  return (
    <>
      <section
        className="relative bg-primary-light pb-8 flex flex-col items-center"
        id="projects"
      >
        <div className="absolute w-full overflow-hidden top-0">
          <img
            src="/wave.svg"
            alt="animated waves"
            className="w-full h-full rotate-180 object-cover md:hidden"
          />
        </div>
        <div className="pt-32 flex flex-col justify-center items-center gap-5 p-5 mx-3 shadow-xl rounded-md md:gap-3 md:pt-16 md:pb-8 max-w-[650px]">
          <h3 className="text-primary-dark text-3xl text-center mb-3 py-2 px-2 border-b border-primary-dark">
            EXPERIENCIA
          </h3>
          <p className="text-center font-extralight max-w-xl">
            {" "}
            He trabajado en proyectos que van desde páginas simples hasta
            aplicaciones complejas con{" "}
            <strong className="text-accent">
              bases de datos integradas y sistemas de autenticación de usuarios
            </strong>
            .
          </p>
          <p className="text-center font-extralight max-w-xl">
            Mi compromiso con el{" "}
            <strong className="text-accent">aprendizaje continuo</strong> es
            clave en mi carrera. Actualmente estoy{" "}
            <strong className="text-accent">ampliando mis habilidades </strong>
            estudiando Java y C# para fortalecer aún más mis conocimientos en
            desarrollo Backend.
          </p>
        </div>
        <div className="pb-14 pt-10 flex flex-col justify-center items-center gap-5 p-5 mx-3 shadow-lg rounded-md">
          <h3 className="text-primary-dark text-3xl text-center mb-3 py-2 px-2 border-b border-primary-dark">
            PROYECTOS
          </h3>
          <div className="grid gap-5 md:grid-cols-2">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.nombre}
                className="md:hover:scale-90 md:transition-all md:hover:shadow-2xl md:hover:bg-accent/80 hover:cursor-pointer"
              >
                <article>
                  <div
                    onClick={() => openModal(proyecto)}
                    className="border border-accent shadow-lg text-center flex flex-col"
                  >
                    <div className="flex flex-col gap-2 pb-2">
                      <div>
                        <img src={proyecto.pathImg} alt={proyecto.nombre} />
                      </div>
                      <h3>{proyecto.nombre}</h3>
                      <div className="flex gap-2 justify-center">
                        {proyecto.iconos.map((icon) => (
                          <i
                            key={icon}
                            className={`devicon-${icon}-plain text-primary-dark text-xl`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        {selectedProject && (
          <ReactModal
            isOpen={!!selectedProject}
            onRequestClose={closeModal}
            className="outline-none mt-10 backdrop-blur-md bg-primary-light/90 rounded-lg max-w-lg w-full shadow-2xl mx-5 relative text-center font-extralight flex flex-col gap-5"
            overlayClassName="outline-none fixed inset-0 bg-black bg-opacity-50 backdrop-blur flex items-center justify-center"
            contentLabel="Project Modal"
          >
            <h3 className="font-extralight text-primary-light absolute text-6xl top-[-100px] left-0 right-0 drop-shadow-xl">
              G<span className="font-extrabold text-accent">K</span>
            </h3>

            <div>
              <iframe
                className="w-full h-52 rounded-t-md"
                src={selectedProject.url}
                title="YouTube video player"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col items-center gap-6 w-full">
              <h3 className="font-normal text-2xl uppercase">
                {selectedProject.nombre}
              </h3>
              <div className="flex flex-wrap gap-5 px-5 max-w-[400px]">
                {selectedProject.tags.map((tag) => (
                  <div
                    key={Math.random() + Math.random()}
                    className="relative flex flex-grow "
                  >
                    <p
                      key={tag}
                      className="flex-grow px-2 py-1 rounded-md text-primary-light font-semibold shadow-md"
                    >
                      {tag}
                    </p>
                    <div className="absolute w-full -z-10 overflow-hidden bottom-0">
                      <img
                        src="/wave-accent.svg"
                        alt="animated waves"
                        className="w-full h-24 object-cover rounded-b-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center px-5 pb-5 gap-3 w-full">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  className="py-2 w-full bg-red-600 text-primary-light font-medium flex justify-center items-center gap-2 shadow-md rounded-md"
                >
                  ver en Youtube <i className="fa-brands fa-youtube"></i>
                </a>
                <button
                  className="py-2 w-1/4 bg-secondary text-primary-light font-medium rounded-md"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
            </div>
          </ReactModal>
        )}
      </section>
    </>
  );
};

export default ProjectsComponent;
