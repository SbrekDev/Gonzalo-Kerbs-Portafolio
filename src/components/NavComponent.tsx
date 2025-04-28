import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const NavComponent = () => {

    const [navClick, setNavClick] = useState(false);
    const [langClick, setLangClick] = useState(false)
    const { t, i18n } = useTranslation()
    const handleLang = () => {
      setLangClick(prev => !prev);
    };

    useEffect(() => {
      i18n.changeLanguage(langClick ? 'es' : 'en');
    }, [langClick]); 

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
          navClick ? "md:gap-5 lg:gap-8 justify-center" : "hidden md:flex md:justify-start lg:justify-center"
        } w-full flex flex-col md:flex-row items-center list-none font-normal`}
      >
        <a
          className="px-9 py-2 md:hover:bg-primary-light md:hover:transition-all md:hover:text-primary-dark hover:cursor-pointer rounded-lg"
          href="#home"
        >
          {t('NAV_START')}
        </a>

        <a
          className="px-9 py-2 md:hover:bg-primary-light md:hover:transition-all md:hover:text-primary-dark hover:cursor-pointer rounded-lg"
          href="#profile"
        >
          {t('NAV_PROFILE')}
        </a>
        <a
          className="px-9 py-2 md:hover:bg-primary-light md:hover:transition-all md:hover:text-primary-dark hover:cursor-pointer rounded-lg"
          href="#projects"
        >
          {t('NAV_PROJECTS')}
        </a>
        <a
          className="px-9 py-2 md:hover:bg-primary-light md:hover:transition-all md:hover:text-primary-dark hover:cursor-pointer rounded-lg"
          href="#contact"
        >
          {t('NAV_CONTACT')}
        </a>
      </div>
      <div className={`flex w-40 items-center gap-5 absolute ${navClick ? 'hidden' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'} md:left-auto md:translate-x-0 md:right-16`}>
        <p className={`${langClick ? '' : 'text-accent'}`}>EN</p>

        <button
          onClick={handleLang}
          className={`relative w-16 h-7 ${langClick ? 'bg-accent' : 'bg-secondary'} rounded-full p-1 transition-all duration-200 ease-in-out`}>

          <div className={`
            absolute top-[2px] left-1 size-6 rounded-full shadow-md  transition-all duration-200 ease-in-out
            ${langClick ? 'translate-x-8 bg-secondary' : 'translate-x-0 bg-accent'}
          `}></div>
        </button>

        <p className={`${langClick ? 'text-accent' : ''}`}>ES</p>
      </div>
    </nav>
  );
}

export default NavComponent