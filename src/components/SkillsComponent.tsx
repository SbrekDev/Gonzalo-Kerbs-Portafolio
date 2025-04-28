import { useTranslation } from "react-i18next";


const SkillsComponent = () => {

  const {t} = useTranslation()

  const lenguajes = [
    ["HTML", t("SKILLS_HABILTIES_PROFESSIONAL"), "html5", 100],
    ["CSS", t("SKILLS_HABILTIES_PROFESSIONAL"), "css3", 100],
    ["JAVASCRIPT", t("SKILLS_HABILTIES_PROFESSIONAL"), "javascript", 100],
    ["SQL", t("SKILLS_HABILTIES_ADVANCED"), "azuresqldatabase", 80],
    ["PHP", t("SKILLS_HABILTIES_INTERMEDIATE"), "php", 70],
    ["JAVA", t("SKILLS_HABILTIES_INTERMEDIATE"), "java", 60],
    ["PYTHON", t("SKILLS_HABILTIES_INTERMEDIATE"), "python", 60],
    ["C#", t("SKILLS_HABILTIES_BASIC"), "csharp", 30],
  ];

  const tecnologias = [
    ["TYPESCRIPT", t("SKILLS_HABILTIES_PROFESSIONAL"), "typescript", 100],
    ["REACT", t("SKILLS_HABILTIES_PROFESSIONAL"), "react", 100],
    ["NODE JS", t("SKILLS_HABILTIES_PROFESSIONAL"), "nodejs", 100],
    ["GIT", t("SKILLS_HABILTIES_ADVANCED"), "git", 80],
    ["MYSQL", t("SKILLS_HABILTIES_ADVANCED"), "mysql", 80],
    ["MONGO DB", t("SKILLS_HABILTIES_ADVANCED"), "mongodb", 80],
    ["SEQUELIZE", t("SKILLS_HABILTIES_ADVANCED"), "sequelize", 80],
    ["EXPRESS", t("SKILLS_HABILTIES_ADVANCED"), "nodejs", 80],
    ["REACT NATIVE", t("SKILLS_HABILTIES_INTERMEDIATE"), "react", 60],
    ["NEXT JS", t("SKILLS_HABILTIES_INTERMEDIATE"), "nextjs", 70],
    ["VUE", t("SKILLS_HABILTIES_INTERMEDIATE"), "vuejs", 70],
    ["Angular", t("SKILLS_HABILTIES_INTERMEDIATE"), "angular", 60],
    ["POSTGRE SQL", t("SKILLS_HABILTIES_INTERMEDIATE"), "postgresql", 60],
    ["NEST JS", t("SKILLS_HABILTIES_INTERMEDIATE"), "nestjs", 60],
  ];

  // const complementos = [
  //   ["ADOBE PHOTOSHOP", "Profesional", "photoshop", 100],
  //   ["ADOBE PREMIERE", "Avanzado", "premierepro", 80],
  //   ["ADOBE ILLUSTRATOR", "Intermedio", "illustrator", 70],
  //   ["AUTODESK AUTOCAD", "Intermedio", "elixir", 70],
  //   ["AUTODESK FUSION 360", "Intermedio", "elixir", 70],
  // ];

  const certificaciones = [
    [
      "Responsive Web Design",
      "https://coursera.org/share/43a593f1f8dfadc568db1899592a6d41",
    ],
    [
      "Bootstrap 4",
      "https://coursera.org/share/7a64b1cccc0b596857464f41464f02f8",
    ],
    [
      "HTML5, CSS3, JS, PHP, MYSQL",
      "https://www.udemy.com/certificate/UC-7e77a4fb-ce0a-4c64-a4fc-b8049cea5a6a/",
    ],
    [
      "JavaScript, Testing",
      "https://www.udemy.com/certificate/UC-158e8998-f260-4841-a727-9fefe8220689/",
    ],
    [
      "Node JS, Express, MVC",
      "https://www.udemy.com/certificate/UC-20ae2b2d-5fb3-4c3a-b782-105d8efc02ac/",
    ],
    [
      "React, TypeScript",
      "https://www.udemy.com/certificate/UC-4c4e6275-86fc-432a-bc50-763eeb54e1ce/",
    ],
    [
      "React, NestJs, NextJs, TypeScript",
      "https://www.udemy.com/certificate/UC-20286ed0-a8dc-4ab8-bc3c-8dd19ba6e51c/",
    ],
    [
      "React, NextJS, MongoDB, GraphQL",
      "https://www.udemy.com/certificate/UC-95b282e0-2860-4996-9007-531930751444/",
    ],
    [
      "React Native",
      "https://www.udemy.com/certificate/UC-9ac6cb32-22e6-46b9-8dac-9b5f8b90f595/",
    ],
    [
      "Vue, Firebase, MongoDB",
      "https://www.udemy.com/certificate/UC-52a94e0d-d57c-49f1-80d7-a1054df74fdf/",
    ],
    [
      "Responsive Web Design",
      "https://www.freecodecamp.org/certification/GonzaloKerbs/responsive-web-design",
    ],
  ];

  

  return (
    <div className="relative bg-primary-dark text-primary-light py-5 px-3 md:px-12 lg:px-44 z-40">
      <section className="profile" id="profile">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center w-full xl:flex-row xl:gap-3">
            <div className="flex justify-center mb-3 xl:mb-0 w-full ">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="w-full flex flex-col justify-center items-center gap-6 p-5 shadow-2xl rounded-md pt-28 pb-8 xl:pb-12 "
              >
                <h3 className="text-3xl text-center mb-1 uppercase">{t('SKILLS_ABOUT_TITLE')}</h3>
                <p className="text-center font-extralight max-w-xl">
                  {t('SKILLS_ABOUT_TEXT_1')}{" "}
                  <strong className="text-accent">
                    {t('SKILLS_ABOUT_TEXT_STRONG_1')}
                  </strong>
                  {t('SKILLS_ABOUT_TEXT_2')}
                </p>
                <p className="text-center font-extralight max-w-xl">
                  {t('SKILLS_ABOUT_TEXT_3')}{" "}
                  <strong className="text-accent">{t('SKILLS_ABOUT_TEXT_STRONG_2')}</strong> {t('SKILLS_ABOUT_TEXT_4')}{" "}
                  <strong className="text-accent">{t('SKILLS_ABOUT_TEXT_STRONG_3')}</strong>
                  {t('SKILLS_ABOUT_TEXT_5')}
                </p>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-offset="0"
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    <a
                      className="text-center bg-accent px-5 py-3 rounded-md shadow-md hover:bg-secondary hover:text-accent md:transition-all md:mt-3"
                      href="documents/CV - Gonzalo Kerbs - ES.pdf"
                      download="CV - Gonzalo Kerbs - ES"
                    >
                      {t('SKILLS_CV_BUTTON')} (ES) <i className="fa-solid fa-download" />
                    </a>
                    <a
                      className="text-center bg-accent px-5 py-3 rounded-md shadow-md hover:bg-secondary hover:text-accent md:transition-all md:mt-3"
                      href="documents/CV - Gonzalo Kerbs - EN.pdf"
                      download="CV - Gonzalo Kerbs- EN"
                    >
                      {t('SKILLS_CV_BUTTON')} (EN) <i className="fa-solid fa-download" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-offset="0"
              className="w-full flex flex-col justify-start items-center gap-5 p-5 shadow-2xl rounded-md xl:pt-20 xl:h-96"
            >
              <h3 className="text-3xl text-center mb-3 pt-5 lg:pt-3">APTITUDES</h3>
              <div className="flex flex-col gap-6 w-full font-extralight text-xl md:flex-row md:flex-wrap md:justify-center max-w-[650px] lg:grid lg:pl-10 lg:grid-cols-2 lg:gap-8 break-words">
                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-offset="100"
                >
                  <strong className="text-accent accent-shadow mr-2">⬤</strong>
                  Disciplina
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-offset="100"
                >
                  <strong className="text-accent accent-shadow mr-2">⬤</strong>
                  Actitud Positiva
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="100"
                >
                  <strong className="text-accent accent-shadow mr-2">⬤</strong>
                  Aprendizaje Continuo
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  data-aos-offset="100"
                >
                  <strong className="text-accent accent-shadow mr-2">⬤</strong>
                  Adaptabilidad
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-offset="100"
                >
                  <strong className="text-accent accent-shadow mr-2">⬤</strong>
                  Disposición Constante
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1300"
                  data-aos-offset="100"
                >
                  <strong className="text-accent accent-shadow mr-2">⬤</strong>
                  Compañerismo
                </p>
              </div>
            </div> */}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-offset="0"
            className="flex flex-col gap-5 mt-3 py-5 mx-3 shadow-2xl rounded-md w-full"
          >
            <h3 className="text-3xl text-center mb-5 uppercase">{t('SKILLS_LANGUAGES_SUBTITLE')}</h3>
            <div className="grid gap-4 px-3 md:grid-cols-2 md:px-12 w-full xl:grid-cols-3">
              {lenguajes.map((lenguaje, i) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-offset="100"
                  key={`lenguaje - ${i}`}
                >
                  <div className="flex justify-between items-center gap-4 rounded-md w-full px-5 py-3 border-t-[3px] border-accent shadow-xl bg-secondary/30 select-none md:transition-all md:hover:scale-95">
                    <div className="w-full">
                      <p className="font-semibold">{lenguaje[0]}</p>
                      <div className=" flex gap-1 flex-col">
                        <p className="text-sm">{lenguaje[1]}</p>
                        <div className={`w-full h-2 rounded-full bg-accent/20`}>
                          <div
                            className={`h-full bg-accent accent-shadow rounded-full`}
                            style={{
                              width: `${lenguaje[3]}%`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <i
                      className={`devicon-${lenguaje[2]}-plain text-accent text-4xl`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-offset="0"
            className="flex flex-col gap-5 mt-3 py-5 mx-3 shadow-2xl rounded-md w-full"
          >
            <h3 className="text-3xl text-center mb-5 uppercase">{t('SKILLS_TECHNOLOGIES_SUBTITLE')}</h3>
            <div className="grid px-3 md:grid-cols-2 gap-4 md:px-12 xl:grid-cols-3">
              {tecnologias.map((tecnologia, i) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-offset="100"
                  key={`tecnlogia - ${i}`}
                >
                  <div className="flex justify-between  items-center gap-4 rounded-md w-full px-5 py-3 border-t-[3px] border-accent shadow-xl bg-secondary/30 select-none md:transition-all md:hover:scale-95">
                    <div className="w-full">
                      <p className="font-semibold">{tecnologia[0]}</p>
                      <div className=" flex gap-1 flex-col">
                        <p className="text-sm">{tecnologia[1]}</p>
                        <div className={`w-full h-2 rounded-full bg-accent/20`}>
                          <div
                            className={`h-full bg-accent accent-shadow rounded-full`}
                            style={{ width: `${tecnologia[3]}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <i
                      className={`devicon-${tecnologia[2]}-plain text-accent text-4xl`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-offset="0"
            className="flex flex-col gap-5 mt-3 py-5 mx-3 shadow-2xl rounded-md w-full"
          >
            <h3 className="text-3xl text-center mb-5">COMPLEMENTOS</h3>
            <div className="grid px-3 md:grid-cols-2 gap-4 md:px-12 xl:grid-cols-3">
              {complementos.map((complemento, i) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-offset="100"
                  key={`complemento - ${i}`}
                >
                  <div className="flex justify-between items-center gap-4 rounded-md w-full px-5 py-3 border-t-[3px] border-accent2 shadow-xl bg-secondary/30 select-none md:transition-all md:hover:scale-95">
                    <div className="w-full">
                      <p className="font-semibold">{complemento[0]}</p>
                      <div className=" flex gap-1 flex-col">
                        <p className="text-sm">{complemento[1]}</p>
                        <div
                          className={`w-full h-2 rounded-full bg-accent2/20`}
                        >
                          <div
                            className={`h-full bg-accent2 shadow-secondaccent rounded-full`}
                            style={{ width: `${complemento[3]}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <i
                      className={`devicon-${complemento[2]}-plain text-accent2 text-4xl`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-offset="0"
            className="flex flex-col justify-center items-center gap-5 p-3 mt-3  py-5 shadow-lg rounded-md w-full"
          >
            <h3 className="text-3xl text-center mb-5 uppercase">{t('SKILLS_CERTIFICATIONS_SUBTITLE')}</h3>
            <div className="grid grid-cols-2  gap-3 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
              {certificaciones.map((certificacion, i) => (
                <div
                  data-aos="flip-down"
                  data-aos-duration="600"
                  key={`certificacion - ${i}`}
                >
                  <a
                    target="_blank"
                    className="bg-gradient-to-b from-transparent to-secondary/30 rounded-md p-3 flex flex-col justify-center items-center gap-2 h-40 md:h-48 md:p-6 md:hover:scale-90 md:transition-all"
                    href={certificacion[1]}
                  >
                    <i className="fa-solid fa-graduation-cap text-3xl text-accent md:text-6xl md:mb-5" />
                    <p className="text-center font-extralight">
                      {certificacion[0]}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsComponent;
