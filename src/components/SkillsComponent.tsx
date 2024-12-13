const SkillsComponent = () => {
  const lenguajes = [
    ["HTML", "Profesional", "html5"],
    ["CSS", "Profesional", "css3"],
    ["JAVASCRIPT", "Profesional", "javascript"],
    ["PHP", "Intermedio", "php"],
    ["JAVA", "Intermedio", "java"],
    ["C#", "Aprendiz", "csharp"],
    ["PYTHON", "Intermedio", "python"],
    ["SQL", "Avanzado", "azuresqldatabase"],
  ];

  const tecnologias = [
    ["TYPESCRIPT", "Profesional", "typescript"],
    ["REACT", "Profesional", "react"],
    ["REACT NATIVE", "Intermedio", "react"],
    ["NEXT JS", "Intermedio", "nextjs"],
    ["VUE", "Intermedio", "vuejs"],
    ["Angular", "Intermedio", "angular"],
    ["NODE JS", "Profesional", "nodejs"],
    ["GIT", "Avanzado", "git"],
    ["MYSQL", "Avanzado", "mysql"],
    ["POSTGRE SQL", "Intermedio", "postgresql"],
    ["MONGO DB", "Avanzado", "mongodb"],
    ["SEQUELIZE", "Avanzado", "sequelize"],
    ["EXPRESS", "Avanzado", "nodejs"],
  ];

  const complementos = [
    ["ADOBE PHOTOSHOP", "Profesional", "photoshop"],
    ["ADOBE PREMIERE", "Avanzado", "premierepro"],
    ["ADOBE ILLUSTRATOR", "Intermedio", "illustrator"],
    ["AUTODESK AUTOCAD", "Intermedio", "elixir"],
    ["AUTODESK FUSION 360", "Intermedio", "elixir"],
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
      "JavaScript Moderno, Testing",
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
    <div className="relative bg-primary-dark text-primary-light py-5 px-3 md:px-12 lg:px-44 z-50">
      <section className="profile" id="profile">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center w-full xl:flex-row xl:gap-3">
            <div className="flex justify-center mb-5 w-full ">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="w-full flex flex-col justify-center items-center gap-5 p-5 shadow-2xl rounded-md md:gap-5 lg:pt-20 xl:h-96"
              >
                <h3 className="text-3xl text-center mb-3">PRESENTACIÓN</h3>
                <p className="text-center font-extralight max-w-xl">
                  Desarrollador Fullstack autodidacta, apasionado por la{" "}
                  <strong className="text-accent">
                    informática y el diseño
                  </strong>
                  . Proveniente de Argentina.
                </p>
                <p className="text-center font-extralight max-w-xl">
                  Llevo dos años especializándome en el área del Front-end y
                  Back-end, aprendiendo{" "}
                  <strong className="text-accent">nuevos recursos</strong> a
                  diario para{" "}
                  <strong className="text-accent">mejorar la calidad </strong>
                  de mis servicios.
                </p>
                <a
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-offset="0"
                  className="text-center bg-accent px-5 py-3 rounded-md shadow-md hover:bg-secondary hover:text-accent md:hover:scale-110 md:transition-all md:mt-3"
                  href="/cv/CV - Gonzalo Kerbs.pdf"
                  download="CV - Gonzalo Kerbs"
                >
                  Descargar CV <i className="fa-solid fa-download" />
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-offset="0"
              className="mb-5 flex flex-col justify-center items-center gap-5 p-6 mt-3 py-5 shadow-2xl rounded-md w-full xl:h-96 xl:mt-0"
            >
              <h3 className="text-3xl text-center mb-5">APTITUDES</h3>
              <div className="flex flex-col gap-6 w-full font-extralight text-xl md:flex-row md:flex-wrap md:justify-center max-w-[650px] lg:grid lg:pl-10 lg:grid-cols-2 xl:grid-cols-2 break-words">
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
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-offset="0"
            className="flex flex-col gap-5 mt-3 py-5 mx-3 shadow-2xl rounded-md w-full"
          >
            <h3 className="text-3xl text-center mb-5">LENGUAJES</h3>
            <div className="grid gap-4 px-3 md:grid-cols-2 md:px-12 w-full xl:grid-cols-3">
              {lenguajes.map((lenguaje) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-offset="100"
                  key={Math.random() + Math.random()}
                >
                  <div className="flex justify-between items-center gap-4  w-full px-5 py-3 bg-gradient-to-r from-accent/90 to-transparent select-none md:transition-all md:hover:scale-95">
                    <div>
                      <p className="font-semibold">{lenguaje[0]}</p>
                      <p className=" text-sm">{lenguaje[1]}</p>
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
            <h3 className="text-3xl text-center mb-5">TECNOLOGÍAS</h3>
            <div className="grid px-3 md:grid-cols-2 gap-4 md:px-12 xl:grid-cols-3">
              {tecnologias.map((tecnologia) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-offset="100"
                  key={Math.random() + Math.random()}
                >
                  <div className="flex justify-between  items-center gap-4  w-full px-5 py-3 bg-gradient-to-r from-accent/80 to-transparent select-none md:transition-all md:hover:scale-95">
                    <div>
                      <p className="font-semibold">{tecnologia[0]}</p>
                      <p className=" text-sm">{tecnologia[1]}</p>
                    </div>
                    <i
                      className={`devicon-${tecnologia[2]}-plain text-accent text-4xl`}
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
            <h3 className="text-3xl text-center mb-5">COMPLEMENTOS</h3>
            <div className="grid px-3 md:grid-cols-2 gap-4 md:px-12 xl:grid-cols-3">
              {complementos.map((complemento) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-offset="100"
                  key={Math.random() + Math.random()}
                >
                  <div className="flex justify-between items-center gap-4  w-full px-5 py-3 bg-gradient-to-r from-accent2/80 to-transparent select-none md:transition-all md:hover:scale-95">
                    <div>
                      <p className="font-semibold">{complemento[0]}</p>
                      <p className=" text-sm">{complemento[1]}</p>
                    </div>
                    <i
                      className={`devicon-${complemento[2]}-plain text-accent2 text-4xl`}
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
            className="flex flex-col justify-center items-center gap-5 p-3 mt-3  py-5 shadow-lg rounded-md w-full"
          >
            <h3 className="text-3xl text-center mb-5">CERTIFICACIONES</h3>
            <div className="grid grid-cols-2  gap-3 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
              {certificaciones.map((certificacion) => (
                <div
                  data-aos="flip-down"
                  data-aos-duration="600"
                  key={Math.random() + Math.random()}
                >
                  <a
                    target="_blank"
                    className="bg-gradient-to-b from-transparent to-secondary/70 rounded-md p-3 flex flex-col justify-center items-center gap-2 h-40 md:h-48 md:p-6 md:hover:scale-90 md:transition-all"
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
