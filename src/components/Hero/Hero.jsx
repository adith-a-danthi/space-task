import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className='col_1'>
          <img
            className="hero__image portrait_image"
            src="https://images.unsplash.com/photo-1593314731059-d6eb89748e65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="Woman standing in the middle of a forest"
          />
        </div>
        <div>
          <h1 className="hero__title heading-1">
            Requirements gathering and analysis for references.
          </h1>
          <p className="hero__text">
            Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
            auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
            tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum
            malesuada a, duis volutpat.
          </p>

          <img
            className="hero__image landscape"
            src="https://images.unsplash.com/photo-1586798274322-2e6b63a43a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80"
            alt="Woman standing in the middle of a forest"
          />
        </div>
      </div>
      <div className="bg"></div>
    </section>
  );
}
