import { useState } from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ProjectsComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <section className="relative bg-primary-light" id="projects">
        <div className="absolute w-full overflow-hidden top-0">
          <img
            src="/wave.svg"
            alt="animated waves"
            className="w-full h-full rotate-180 object-cover"
          />
        </div>
        <div className="pt-32  flex flex-col justify-center items-center gap-5 p-5 mx-3 shadow-xl rounded-md">
          <h3 className="text-primary-dark text-3xl text-center mb-3 shadow-lg rounded-md py-2 px-6">
            EXPERIENCIA
          </h3>
          <p className="text-center font-extralight">
            {" "}
            He trabajado en proyectos que van desde páginas simples hasta
            aplicaciones complejas con{" "}
            <strong className="text-accent">
              bases de datos integradas y sistemas de autenticación de usuarios
            </strong>
            .
          </p>
          <p className="text-center font-extralight">
            Mi compromiso con el{" "}
            <strong className="text-accent">aprendizaje continuo</strong> es
            clave en mi carrera. Actualmente estoy{" "}
            <strong className="text-accent">ampliando mis habilidades </strong>
            estudiando Java y C# para fortalecer aún más mis conocimientos en
            desarrollo Backend.
          </p>
        </div>

        <div className="pb-14 pt-10 flex flex-col justify-center items-center gap-5 p-5 mx-3 shadow-xl rounded-md">
          <h3 className="text-primary-dark text-3xl text-center mb-3">
            PROYECTOS
          </h3>
          <div className="grid">
            <article>
              <div
                onClick={openModal}
                className="border border-accent shadow-lg text-center flex flex-col"
              >
                <div className="flex flex-col gap-2 pb-2">
                  <div>
                    <img src="images/background.webp" alt="" />
                  </div>
                  <h3>StarKerbs</h3>
                  <div className="flex gap-2 justify-center">
                    <i
                      className={`devicon-react-plain text-primary-dark text-xl`}
                    />
                    <i
                      className={`devicon-react-plain text-primary-dark text-xl`}
                    />
                    <i
                      className={`devicon-react-plain text-primary-dark text-xl`}
                    />
                    <i
                      className={`devicon-react-plain text-primary-dark text-xl`}
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="bg-white p-5 rounded max-w-lg w-full shadow-2xl mx-5 relative text-center font-extralight flex flex-col gap-5"
        overlayClassName="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center"
        contentLabel="Example Modal"
      >
        <button
          className="rounded-full border border-accent size-6 absolute top-4 right-4"
          onClick={closeModal}
        >
          X
        </button>
        <h3 className="font-normal text-2xl uppercase">PROYECTO</h3>
        <div className="shadow-md">
          <img className="rounded-md" src="images/background.webp" alt="" />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quam
          fugiat nulla. Ullam sapiente architecto molestias sunt pariatur quos
          iure velit quis modi quidem debitis ex reiciendis obcaecati, ipsa
          veniam?
        </div>
        <div className="flex gap-2 justify-around">
          <button className="py-2 px-4 bg-red-600 rounded-md text-primary-light font-medium">
            Youtube
          </button>
          <button className="py-2 px-4 bg-slate-800 rounded-md text-primary-light font-medium">
            Github
          </button>
        </div>
      </ReactModal>
    </>
  );
};

export default ProjectsComponent;
