import { useTranslation } from "react-i18next";


const SkillsComponent = () => {

  const {t} = useTranslation()

  const skills = [
    ["HTML", t("SKILLS_HABILTIES_PROFESSIONAL"), "html5"],
    ["CSS", t("SKILLS_HABILTIES_PROFESSIONAL"), "css3"],
    ["JAVASCRIPT", t("SKILLS_HABILTIES_PROFESSIONAL"), "javascript"],
    ["TYPESCRIPT", t("SKILLS_HABILTIES_PROFESSIONAL"), "typescript",],
    ["REACT", t("SKILLS_HABILTIES_PROFESSIONAL"), "react"],
    ["NEXT JS", t("SKILLS_HABILTIES_INTERMEDIATE"), "nextjs"],
    ["NODE JS", t("SKILLS_HABILTIES_PROFESSIONAL"), "nodejs"],
    ["EXPRESS", t("SKILLS_HABILTIES_ADVANCED"), "nodejs"],
    ["SEQUELIZE", t("SKILLS_HABILTIES_ADVANCED"), "sequelize"],
    ["MYSQL", t("SKILLS_HABILTIES_ADVANCED"), "mysql"],
    ["MONGO DB", t("SKILLS_HABILTIES_ADVANCED"), "mongodb"],
    ["SQL", t("SKILLS_HABILTIES_ADVANCED"), "azuresqldatabase"],
    ["GIT", t("SKILLS_HABILTIES_ADVANCED"), "git"],
  ];

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
    <div className="relative bg-primary-dark text-primary-light px-3 md:px-12 xl:px-32 3xl:px-96 z-40 overflow-hidden">
      <section className="profile pt-28" id="profile">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center w-full xl:flex-row xl:gap-3">
            <div className="flex justify-center my-3 xl:mb-0 w-full rounded-xl">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-offset="0"
                className="relative w-full flex flex-col justify-center items-center gap-6 px-5 rounded-md "
              >
                <div className="hidden lg:block absolute w-[50%] h-96 rounded-r-full left-[-35%] bg-gradient-to-r from-primary-dark to-accent shadow-2xl"></div>
                <div className="hidden lg:block absolute w-[50%] h-96 rounded-l-full right-[-35%] bg-gradient-to-l from-primary-dark to-accent shadow-2xl"></div>
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
          </div>
          <div className="flex flex-col gap-5 my-10 py-5 mx-3 w-full">
            <h3 className="text-3xl text-center mb-5 uppercase">{t('SKILLS_SUBTITLE')}</h3>
            <div className="flex flex-wrap justify-center gap-4 py-5 md:px-6 w-full">
              {skills.map((skills, i) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-offset="0"
                  key={`lenguaje - ${i}`}
                >
                  <div className="flex justify-between w-72 md:min-w-[220px] items-center gap-4 rounded-md md:w-full px-5 py-3 border-t-[3px] border-accent shadow-xl bg-secondary/30 select-none md:transition-all md:hover:scale-95">
                    <div className="w-full">
                      <p className="font-semibold">{skills[0]}</p>
                      <div className=" flex gap-1 flex-col">
                        <p className="text-sm">{skills[1]}</p>

                      </div>
                    </div>
                    <i
                      className={`devicon-${skills[2]}-plain text-accent text-4xl`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 p-3 mt-3 py-5 w-full">
            <h3 className="text-3xl text-center mb-5 uppercase">{t('SKILLS_CERTIFICATIONS_SUBTITLE')}</h3>
            <div className="flex flex-wrap justify-center gap-4 py-5 md:px-6 w-full">
              {certificaciones.map((certificacion, i) => (
                <div
                  data-aos="flip-down"
                  data-aos-duration="300"
                  key={`certificacion - ${i}`}
                  className="w-72 md:w-[220px]"
                >
                  <a
                    target="_blank"
                    className="border-2 border-accent rounded-md flex flex-col justify-center items-center gap-2 shadow-xl h-28 md:h-48 p-1 md:p-6 md:hover:scale-95 md:transition-all"
                    href={certificacion[1]}
                  >
                    <i className="fa-solid fa-graduation-cap text-3xl text-accent md:text-6xl md:mb-5" />
                    <p className="text-center">
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
