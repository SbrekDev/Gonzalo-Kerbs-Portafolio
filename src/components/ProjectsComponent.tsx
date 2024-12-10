import { useState } from "react";
import ReactModal from "react-modal";

type Proyecto = {
  nombre: string;
  tags: string[];
  iconos: string[];
  pathImg: string;
  url: string;
};

const proyectos: Proyecto[] = [
  {
    nombre: "Quique Frío",
    tags: ["React", "TailwindCSS", "TypeScript", "PWA", "Vite"],
    iconos: ["react", "tailwindcss", "typescript", "vite"],
    pathImg: "projectImages/quiquefrio.png",
    url: "",
  },
  {
    nombre: "Dev Web Camp",
    tags: ["PHP", "JavaScript", "Sass", "MySql", "MVC"],
    iconos: ["php", "sass", "mysql", "javascript"],
    pathImg: "projectImages/devwebcamp.png",
    url: "",
  },
  {
    nombre: "Quique Farío",
    tags: ["React", "TailwindCSS", "TypeScript", "PWA", "Vite"],
    iconos: ["react", "tailwindcss", "typescript", "vite"],
    pathImg: "images/background.webp",
    url: "",
  },
  {
    nombre: "Quique Fríso",
    tags: ["React", "TailwindCSS", "TypeScript", "PWA", "Vite"],
    iconos: ["react", "tailwindcss", "typescript", "vite"],
    pathImg: "images/background.webp",
    url: "",
  },
];

// Configura el elemento raíz de la aplicación
ReactModal.setAppElement("#root");

const ProjectsComponent = () => {
  // Almacena el índice del proyecto seleccionado o null si no hay modal abierto
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

  // Abrir modal para un proyecto específico
  function openModal(index: number) {
    setSelectedProjectIndex(index);
  }

  // Cerrar modal
  function closeModal() {
    setSelectedProjectIndex(null);
  }

  return (
    <>
      <section className="relative bg-primary-light" id="projects">
        <div className="pb-14 pt-10 flex flex-col justify-center items-center gap-5 p-5 mx-3 shadow-xl rounded-md">
          <h3 className="text-primary-dark text-3xl text-center mb-3">
            PROYECTOS
          </h3>
          <div className="grid gap-5">
            {proyectos.map((proyecto, index) => (
              <div key={proyecto.nombre}>
                <article>
                  <div
                    onClick={() => openModal(index)}
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
        {selectedProjectIndex !== null && (
          <ReactModal
            isOpen={selectedProjectIndex !== null}
            onRequestClose={closeModal}
            className="bg-white rounded max-w-lg w-full shadow-2xl mx-5 relative text-center font-extralight flex flex-col gap-5"
            overlayClassName="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center"
            contentLabel="Project Modal"
          >
            <button className="absolute top-4 right-4" onClick={closeModal}>
              <i className="fa-solid fa-circle-xmark text-accent text-2xl"></i>
            </button>
            <div>
              <img
                src={proyectos[selectedProjectIndex].pathImg}
                alt={proyectos[selectedProjectIndex].nombre}
              />
            </div>
            <h3 className="font-normal text-2xl uppercase">
              {proyectos[selectedProjectIndex].nombre}
            </h3>
            <div className="flex flex-wrap gap-2 px-5">
              {proyectos[selectedProjectIndex].tags.map((tag) => (
                <p
                  key={tag}
                  className=" px-2 py-1 rounded-md text-accent border border-accent font-semibold shadow-md flex-grow"
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className="flex justify-center px-5 pb-5">
              <button className="py-2 w-full bg-red-600 text-primary-light font-medium flex justify-center items-center gap-2 shadow-md">
                ver en Youtube <i className="fa-brands fa-youtube"></i>
              </button>
            </div>
          </ReactModal>
        )}
      </section>
    </>
  );
};

export default ProjectsComponent;
