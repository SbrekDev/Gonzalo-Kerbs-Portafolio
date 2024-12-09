const ContactComponent = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact__detail d--1"></div>
        <div className="contact__detail d--2"></div>
        <form className="contact__form">
          <h3 className="form__subtitle">Contácteme</h3>
          <label className="form__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="form__input"
            type="text"
            id="nombre"
            placeholder="John Doe"
          />
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            type="email"
            id="email"
            placeholder="Johndoe@example.com"
            autoComplete="email"
          />
          <label className="form__label" htmlFor="asunto">
            Asunto
          </label>
          <input
            className="form__input"
            type="text"
            id="asunto"
            placeholder="Contenido principal"
          />
          <label className="form__label" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            className="form__input"
            id="mensaje"
            placeholder="Deje su consulta aqui... "
          ></textarea>
          <input className="form__input button" type="button" value="ENVIAR" />
        </form>
        <footer className="end__footer">
          <p className="footer__copyright">Gonzalo Kerbs - 2024</p>
        </footer>
      </section>
    </>
  );
};

export default ContactComponent;
