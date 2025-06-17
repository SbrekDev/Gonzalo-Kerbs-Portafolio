import ReactModal from "react-modal";
import { useTranslation } from "react-i18next";


ReactModal.setAppElement("#root");

const ProjectsComponent = () => {
  
  const {t} = useTranslation()
  
  const proyectos = [
    {
      nombre: t("PROJECTS_NAME_1"),
      description: t('PROJECTS_DESCRIPTION_1'),
      tags: ["React", "TailwindCSS", "TypeScript", "PWA"],
      iconos: ["react", "tailwindcss", "typescript"],
      pathImg: "projectImages/quiquefrio.png",
      url: "https://www.youtube.com/embed/hJZIT4JhMUM",
    },
    {
      nombre: t("PROJECTS_NAME_2"),
      description: t('PROJECTS_DESCRIPTION_2'),
      tags: ["PHP", "JavaScript", "Sass", "MySql", "MVC"],
      iconos: ["php", "sass", "mysql", "javascript"],
      pathImg: "projectImages/devwebcamp.png",
      url: "https://www.youtube.com/embed/T0WwgMe2gvE",
    },
    {
      nombre: t("PROJECTS_NAME_3"),
      description: t('PROJECTS_DESCRIPTION_3'),
      tags: ["NextJs","JavaScript","TypeScript","Prisma","NodeJs","TailwindCss"],
      iconos: ["nextjs", "typescript", "prisma", "tailwindcss"],
      pathImg: "projectImages/cafenext.png",
      url: "https://www.youtube.com/embed/hCWKLDcxcZU",
    },
    {
      nombre: t("PROJECTS_NAME_4"),
      description: t('PROJECTS_DESCRIPTION_4'),
      tags: ["VueJs", "TailwindCSS", "NodeJs", "Vuetify", "Leaflet"],
      iconos: ["vuejs", "tailwindcss", "nodejs", "firebase"],
      pathImg: "projectImages/bnvue.png",
      url: "https://www.youtube.com/embed/-FkjpyIK1Io",
    },
    {
      nombre: t("PROJECTS_NAME_5"),
      description: t('PROJECTS_DESCRIPTION_5'),
      tags: ["NodeJs", "Css", "Pug", "Leaflet", "Express", "MySql"],
      iconos: ["nodejs", "css3", "mysql"],
      pathImg: "projectImages/bnnode.png",
      url: "https://www.youtube.com/embed/T6AIFqFGOLY",
    },
    {
      nombre: t("PROJECTS_NAME_6"),
      description: t('PROJECTS_DESCRIPTION_6'),
      tags: ["PHP", "Sass", "MySql", "JavaScript"],
      iconos: ["php", "sass", "mysql", "javascript"],
      pathImg: "projectImages/bnphp.png",
      url: "https://www.youtube.com/embed/M2VAdUbbNKI",
    },
    {
      nombre: t("PROJECTS_NAME_7"),
      description: t('PROJECTS_DESCRIPTION_7'),
      tags: ["PHP", "Sass", "MySql", "JavaScript"],
      iconos: ["php", "sass", "mysql", "javascript"],
      pathImg: "projectImages/upphp.png",
      url: "https://www.youtube.com/embed/Qlc6ZQN2NDA",
    },
    {
      nombre: t("PROJECTS_NAME_8"),
      description: t('PROJECTS_DESCRIPTION_8'),
      tags: ["React", "TailwindCSS", "NodeJs", "TypeScript"],
      iconos: ["react", "tailwindcss", "nodejs", "typescript", "mysql"],
      pathImg: "projectImages/upreact.png",
      url: "https://www.youtube.com/embed/CfgYdUFwriI",
    },
    {
      nombre: t("PROJECTS_NAME_9"),
      description: t('PROJECTS_DESCRIPTION_9'),
      tags: ["VueJs", "TailwindCSS", "NodeJs", "Vuetify", "Firebase"],
      iconos: ["vuejs", "tailwindcss", "nodejs", "firebase"],
      pathImg: "projectImages/peluvue.png",
      url: "https://www.youtube.com/embed/h9hEBgOAP4k",
    },
    {
      nombre: t("PROJECTS_NAME_10"),
      description: t('PROJECTS_DESCRIPTION_10'),
      tags: ["PHP", "Sass", "MySql", "JavaScript"],
      iconos: ["php", "sass", "mysql", "javascript"],
      pathImg: "projectImages/peluphp.png",
      url: "https://www.youtube.com/embed/CxMfUdaYsEQ",
    },
    {
      nombre: t("PROJECTS_NAME_11"),
      description: t('PROJECTS_DESCRIPTION_11'),
      tags: ["VueJs", "TailwindCSS", "NodeJs", "Vuetify", "Firebase"],
      iconos: ["vuejs", "tailwindcss", "nodejs", "firebase"],
      pathImg: "projectImages/eshopvue.png",
      url: "https://www.youtube.com/embed/U3TCgOnGQ0o",
    },
    {
      nombre: t("PROJECTS_NAME_12"),
      description: t('PROJECTS_DESCRIPTION_12'),
      tags: ["React", "TailwindCSS", "NodeJs", "TypeScript", "MongoDB"],
      iconos: ["react", "tailwindcss", "nodejs", "typescript", "mongodb"],
      pathImg: "projectImages/devtree.png",
      url: "https://www.youtube.com/embed/Ksv-ccthY9Q",
    },
    {
      nombre: t("PROJECTS_NAME_13"),
      description: t('PROJECTS_DESCRIPTION_13'),
      tags: ["JavaScript", "React", "TypeScript", "MySql", "TailwindCSS"],
      iconos: ["react", "tailwindcss", "typescript", "javascript", "mysql"],
      pathImg: "projectImages/admreact.png",
      url: "https://www.youtube.com/embed/y-SBo2WeRUM",
    },
  ];


  return (
    <>
      <section
        className="relative bg-primary-dark text-primary-light lg:pb-8 pt-10 lg:pt-20 flex flex-col items-center px-3 md:px-12 xl:px-32 3xl:px-96 overflow-hidden"
        id="projects"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="0"
          className="flex items-center justify-center p-5 w-full md:gap-3 md:pt-16 md:pb-10 lg:pb-12 xl:gap-24 z-30"
        >
          <div className="hidden lg:block absolute w-[50%] h-96 rounded-r-full left-[-35%] bg-gradient-to-r from-primary-dark to-accent shadow-2xl"></div>
          <div className="hidden lg:block absolute w-[50%] h-96 rounded-l-full right-[-35%] bg-gradient-to-l from-primary-dark to-accent shadow-2xl"></div>
          <div className="flex flex-col justify-center items-center gap-5 px-6">
            <h3 className="text-3xl text-center mb-3 py-2 px-2 border-b border-primary-dark uppercase">
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
          className="flex flex-col items-center justify-center  p-5 w-full mt-10 z-30"
        >
          <h3 className=" text-3xl text-center mb-12 py-2 px-2 uppercase">
            {t('PROJECTS_WORK_SUBTITLE')}
          </h3>

          <div className="flex flex-col justify-center items-center">
            <div className="size-7 rounded-full bg-primary-light"></div>
            <div className="mb-5 md:mb-0 h-10 w-1 bg-primary-light rounded-full -translate-y-1"></div>
            {proyectos.map( (proyecto, index) => (
              <div key={proyecto.nombre}>
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse' } justify-center items-center md:gap-20`}>
                  <div className="flex flex-col gap-5">
                    <div className="md:w-60 lg:w-96 h-52 shadow-black shadow-lg rounded-lg">
                      <img src={proyecto.pathImg} className="w-full h-full object-cover rounded-lg" alt={proyecto.nombre} />
                    </div>
                    <a
                      href={proyecto.url}
                      target="_blank"
                      className="py-2 w-full bg-accent hover:bg-secondary hover:text-accent transition-colors text-primary-light font-medium flex justify-center items-center gap-2 shadow-md rounded-lg"
                    >
                      {t('PROJECTS_YT_BUTTON')} <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                  <div className="hidden md:flex flex-col justify-center items-center gap-3">
                    <div className="h-44 w-1 bg-primary-light rounded-full -translate-y-2"></div>
                    <div className="size-4 rounded-full bg-primary-light"></div>
                    <div className={`h-44 w-1 rounded-full translate-y-2 ${index === proyectos.length - 1 ? 'bg-primary-dark' : 'bg-primary-light'}`}></div>
                  </div>
                  <div className="pt-5 pb-16 md:py-0 px-10 md:p-0 md:w-60 lg:w-96 text-primary-light">
                    <h3 className="text-center md:text-left font-semibold text-xl mb-2">{proyecto.nombre}</h3>
                    <p className="text-center md:text-left font-extralight mb-2">{proyecto.description}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      {proyecto.iconos.map((icon) => (
                        <div key={icon} className="flex flex-col items-center mr-1">
                          <i className={`devicon-${icon}-plain text-accent text-xl`}/>
                          <p className="font-extralight text-sm">{icon}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:hidden flex flex-col items-center justify-center mb-8 mt-[-28px]">
                  <div className={`h-4 w-1 rounded-full -translate-y-2 ${index === proyectos.length - 1 ? 'bg-primary-dark' : 'bg-primary-light'}`}></div>
                  <div className={`size-4 rounded-full ${index === proyectos.length - 1 ? 'bg-primary-dark' : 'bg-primary-light'}`}></div>
                  <div className={`h-4 w-1 rounded-full translate-y-2 ${index === proyectos.length - 1 ? 'bg-primary-dark' : 'bg-primary-light'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default ProjectsComponent;
