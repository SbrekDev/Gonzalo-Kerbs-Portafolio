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
      } w-full md:h-16 md:w-full backdrop-blur-sm absolute top-0 flex flex-col md:flex-row md:justify-center md:items-center bg-primary-dark/75 text-primary-light shadow-md z-50 md:fixed md:bg-primary-dark/75 md:text-primary-light md:shadow-xl`}
    >
      <div className='flex justify-between items-center px-5'>
        <h3 className="md:hidden font-extralight text-primary-light">
          G<span className='font-extrabold text-accent'>K</span>
        </h3>
        <button
          onClick={() => desplegarNav()}
          className={`w-full h-12 flex justify-end items-center md:hidden`}
        >
          <i className={`fa-solid fa-bars text-primary-light text-2xl`} />
        </button>
      </div>
      <div
        className={`${
          navClick ? "" : "hidden md:flex"
        } w-full flex flex-col md:flex-row justify-center md:gap-5 lg:gap-8 items-center list-none font-normal`}
      >
        <a
          className="px-9 py-2 md:hover:bg-primary-light md:hover:transition-all md:hover:text-primary-dark hover:cursor-pointer rounded-lg"
          href="#home"
        >
          Inicio
        </a>

        <a
          className="px-9 py-2 md:hover:bg-primary-light md:hover:transition-all md:hover:text-primary-dark hover:cursor-pointer rounded-lg"
          href="#profile"
        >
          Perfil
        </a>
        <a
          className="px-9 py-2 md:hover:bg-primary-light md:hover:transition-all md:hover:text-primary-dark hover:cursor-pointer rounded-lg"
          href="#projects"
        >
          Proyectos
        </a>
        <a
          className="px-9 py-2 md:hover:bg-primary-light md:hover:transition-all md:hover:text-primary-dark hover:cursor-pointer rounded-lg"
          href="#contact"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}

export default NavComponent