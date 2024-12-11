import { useState } from 'react'

const NavComponent = () => {

    const [navClick, setNavClick] = useState(false);
    

    const desplegarNav = () => {
        setNavClick(!navClick);
    };
  return (
    <nav
      className={`${
        navClick ? "h-56 z-50" : "h-12"
      } w-full lg:h-20 lg:w-full absolute lg:sticky top-0 flex flex-col lg:flex-row lg:justify-center lg:items-center bg-primary-dark/95 text-primary-light shadow-md z-50 lg:bg-primary-dark/95 lg:text-primary-light lg:shadow-xl`}
    >
      <div className='flex justify-between items-center px-5'>
        <h3 className="lg:hidden font-extralight text-primary-light">
          G<span className='font-extrabold text-accent'>K</span>
        </h3>
        <button
          onClick={() => desplegarNav()}
          className={`w-full h-12 flex justify-end items-center lg:hidden`}
        >
          <i className={`fa-solid fa-bars text-primary-light text-2xl`} />
        </button>
      </div>
      <div
        className={`${
          navClick ? "" : "hidden lg:flex"
        } w-screen flex flex-col lg:flex-row justify-center lg:gap-5 xl:gap-8 items-center list-none font-normal lg:text-xl`}
      >
        <a
          className="px-9 py-2 lg:hover:bg-secondary lg:hover:text-primary-light hover:cursor-pointer rounded-lg"
          href="#home"
        >
          Inicio
        </a>

        <a
          className="px-9 py-2 lg:hover:bg-secondary lg:hover:text-primary-light hover:cursor-pointer rounded-lg"
          href="#profile"
        >
          Perfil
        </a>
        <a
          className="px-9 py-2 lg:hover:bg-secondary lg:hover:text-primary-light hover:cursor-pointer rounded-lg"
          href="#projects"
        >
          Proyectos
        </a>
        <a
          className="px-9 py-2 lg:hover:bg-secondary lg:hover:text-primary-light hover:cursor-pointer rounded-lg"
          href="#contact"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}

export default NavComponent