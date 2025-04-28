import { useState } from "react";
import ReactModal from "react-modal";
import { Proyecto } from "../types";
import { useTranslation } from "react-i18next";


ReactModal.setAppElement("#root");

const ProjectsComponent = () => {
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
  
  const {t} = useTranslation()
  
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
      url: "https://www.youtube.com/embed/T0WwgMe2gvE",
    },
    {
      nombre: "Coffee Shop",
      tags: [
        "NextJs",
        "JavaScript",
        "TypeScript",
        "Prisma",
        "NodeJs",
        "TailwindCss",
      ],
      iconos: ["nextjs", "typescript", "prisma", "tailwindcss"],
      pathImg: "projectImages/cafenext.png",
      url: "https://www.youtube.com/embed/hCWKLDcxcZU",
    },
    {
      nombre: "Real Estate 1",
      tags: ["VueJs", "TailwindCSS", "NodeJs", "Vuetify", "Leaflet"],
      iconos: ["vuejs", "tailwindcss", "nodejs", "vite", "firebase"],
      pathImg: "projectImages/bnvue.png",
      url: "https://www.youtube.com/embed/-FkjpyIK1Io",
    },
    {
      nombre: "UpTask React",
      tags: ["React", "TailwindCSS", "NodeJs", "TypeScript"],
      iconos: ["react", "tailwindcss", "nodejs", "vite", "typescript"],
      pathImg: "projectImages/upreact.png",
      url: "https://www.youtube.com/embed/CfgYdUFwriI",
    },
    {
      nombre: "Real Estate 2",
      tags: ["NodeJs", "Css", "Pug", "Leaflet", "Express", "MySql"],
      iconos: ["nodejs", "css3", "mysql"],
      pathImg: "projectImages/bnnode.png",
      url: "https://www.youtube.com/embed/T6AIFqFGOLY",
    },
    {
      nombre: "Dress Ecommerce",
      tags: ["VueJs", "TailwindCSS", "NodeJs", "Vuetify", "Firebase"],
      iconos: ["vuejs", "tailwindcss", "nodejs", "vite", "firebase"],
      pathImg: "projectImages/eshopvue.png",
      url: "https://www.youtube.com/embed/U3TCgOnGQ0o",
    },
    {
      nombre: "Real Estate 3",
      tags: ["PHP", "Sass", "MySql", "JavaScript"],
      iconos: ["php", "sass", "mysql", "javascript"],
      pathImg: "projectImages/bnphp.png",
      url: "https://www.youtube.com/embed/M2VAdUbbNKI",
    },
    {
      nombre: "Barber Shop 1",
      tags: ["VueJs", "TailwindCSS", "NodeJs", "Vuetify", "Firebase"],
      iconos: ["vuejs", "tailwindcss", "nodejs", "vite", "firebase"],
      pathImg: "projectImages/peluvue.png",
      url: "https://www.youtube.com/embed/h9hEBgOAP4k",
    },
    {
      nombre: "DevTree",
      tags: ["React", "TailwindCSS", "NodeJs", "TypeScript", "MongoDB"],
      iconos: ["react", "tailwindcss", "nodejs", "vite", "typescript", "mongodb"],
      pathImg: "projectImages/devtree.png",
      url: "https://www.youtube.com/embed/Ksv-ccthY9Q",
    },
    {
      nombre: "Barber Shop 2",
      tags: ["PHP", "Sass", "MySql", "JavaScript"],
      iconos: ["php", "sass", "mysql", "javascript"],
      pathImg: "projectImages/peluphp.png",
      url: "https://www.youtube.com/embed/CxMfUdaYsEQ",
    },
    {
      nombre: "Travel Agency",
      tags: ["NodeJs", "Css", "JavaScript", "MySql"],
      iconos: ["nodejs", "css3", "mysql", "JavaScript"],
      pathImg: "projectImages/agviajes.png",
      url: "https://www.youtube.com/embed/RRw6ENd5vUY",
    },
    {
      nombre: "Customer Manager",
      tags: ["Javascript", "React", "TypeScript", "MySql", "TailwindCSS"],
      iconos: ["react", "tailwindcss", "typescript", "JavaScript", "mysql"],
      pathImg: "projectImages/admreact.png",
      url: "https://www.youtube.com/embed/y-SBo2WeRUM",
    },
    {
      nombre: "UpTask PHP",
      tags: ["PHP", "Sass", "MySql", "JavaScript"],
      iconos: ["php", "sass", "mysql", "javascript"],
      pathImg: "projectImages/upphp.png",
      url: "https://www.youtube.com/embed/Qlc6ZQN2NDA",
    },
    {
      nombre: "Expense Planner",
      tags: ["Javascript", "React Native", "TypeScript"],
      iconos: ["react", "typescript", "JavaScript"],
      pathImg: "projectImages/native.png",
      url: "https://www.youtube.com/embed/l1kR361brKo",
    },
    {
      nombre: t('PROJECTS_VARIOUS'),
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
  function openModal(proyecto : Proyecto) {
    setSelectedProject(proyecto);
  }

  function closeModal() {
    setSelectedProject(null);
  }

  return (
    <>
      <section
        className="relative bg-primary-light pb-8 flex flex-col items-center  px-3 md:pt-14 md:px-12 lg:pt-24 lg:px-44 xl:pt-32"
        id="projects"
      >
        <div className="absolute w-full overflow-hidden top-0 md:top-[-100px] lg:top-[-100px] xl:top-[-300px]">
          <img
            src="/wave.svg"
            alt="animated waves"
            className="w-full h-full object-cover rotate-180"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="0"
          className="flex items-center bg-primary-light justify-center  p-5 shadow-xl rounded-md w-full md:gap-3 md:pt-16 md:pb-10 lg:pb-12 xl:gap-24 z-30"
        >
          <div className="hidden xl:block">
            <img
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-offset="0"
              src="images/profile__img2.webp"
              alt="imagen gonzalo kerbs"
              className="w-60 drop-shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5 px-6">
            <h3 className="text-primary-dark text-3xl text-center mb-3 py-2 px-2 border-b border-primary-dark uppercase">
              {t('PROJECTS_EXPERIENCE_SUBTITLE')}
            </h3>
            <p className="text-center font-extralight max-w-xl">
              {" "}
              {t('PROJECTS_EXPERIENCE_TEXT_1')}{" "}
              <strong className="text-accent">
                {t('PROJECTS_EXPERIENCE_TEXT_STRONG_1')}
              </strong>
              .
            </p>
            <p className="text-center font-extralight max-w-xl">
              {t('PROJECTS_EXPERIENCE_TEXT_2')}{" "}
              <strong className="text-accent">{t('PROJECTS_EXPERIENCE_TEXT_STRONG_2')}</strong> {t('PROJECTS_EXPERIENCE_TEXT_3')}{" "}
              <strong className="text-accent">
                {t('PROJECTS_EXPERIENCE_TEXT_STRONG_3')}{" "}
              </strong>
              {t('PROJECTS_EXPERIENCE_TEXT_4')}
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="0"
          className="pb-14 pt-10 flex flex-col justify-center items-center gap-5 md:p-5 shadow-lg rounded-md w-full"
        >
          <h3 className="text-primary-dark text-3xl text-center mb-3 py-2 px-2 border-b border-primary-dark uppercase">
            {t('PROJECTS_WORK_SUBTITLE')}
          </h3>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 w-full">
            {proyectos.map((proyecto) => (
              <div
                data-aos="flip-left"
                data-aos-duration="600"
                data-aos-offset="0"
                key={proyecto.nombre}
              >
                <div className="md:hover:scale-90 md:transition-all md:hover:shadow-2xl md:hover:bg-accent/80 hover:cursor-pointer">
                  <article>
                    <div
                      onClick={() => openModal(proyecto)}
                      className="border border-accent shadow-lg text-center flex flex-col h-80"
                    >
                      <div className="flex flex-col gap-2 pb-2">
                        <div className="h-60">
                          <img
                            className="w-full h-full object-cover"
                            src={proyecto.pathImg}
                            alt={proyecto.nombre}
                            loading="lazy"
                          />
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
              </div>
            ))}
          </div>
        </div>
        {selectedProject && (
          <ReactModal
            isOpen={!!selectedProject}
            onRequestClose={closeModal}
            className="outline-none mt-10 backdrop-blur-md bg-primary-light/90 rounded-lg max-w-lg w-full shadow-2xl mx-5 relative text-center font-extralight flex flex-col gap-5"
            overlayClassName="outline-none fixed inset-0 bg-black bg-opacity-50 backdrop-blur flex items-center justify-center z-50"
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
                  {t('PROJECTS_YT_BUTTON')} <i className="fa-brands fa-youtube"></i>
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
