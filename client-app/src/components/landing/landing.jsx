import { NavLink } from "react-router-dom";

import style from "./landing.module.css";

const Landing = () => {
  return (
    <div className={style.containerHeader}>
      <div className={`${style.container} ${style.containerMain}`}>
        <div className={style.item}>
          <h1>CodeLearn</h1>
          <p>
            Mejora tus habilidades completando las clases que desafían e
            impulsan continuamente su practica en programación
          </p>

          <div className={style.containerButton}>
            <NavLink to="Home">
              <button> ir a conocer los cursos </button>
            </NavLink>

            <NavLink to="Register">
              <button> Registrarme </button>
            </NavLink>
          </div>
        </div>
        <div className={style.item}>
          <img
            className={style.img}
            src="../../../public/img/Landing_Draw.svg"
            alt="Landing"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
