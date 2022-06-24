// libraries
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Redux actions
import { bookmarkCourse } from "../../../../redux/actions";

// styles
import { ThemeProvider } from "styled-components";
import CompletedIcon from "../../../icons/completedicon";
import FavoriteIcon from "../../../icons/Favorite";
import JSIcon from "../../../icons/javascript";
import darkTheme from "./coursesCardDark.module.css";
import lightTheme from "./coursesCardLight.module.css";

let style = darkTheme;

function CoursesCard({ courses, setRefresh, refresh }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme);
  let isLogged = useSelector((store) => store.isLogged);

  const { user } = useSelector((store) => store);

  const handleClick = () => {
    dispatch(bookmarkCourse());
    refresh ? setRefresh(false) : setRefresh(true);
  };

  return (
    <div>
      {courses.map((curse) => (
        <ThemeProvider
          key={curse._id}
          theme={theme === "light" ? (style = lightTheme) : (style = darkTheme)}
        >
          <div className={style.containerCourse}>
            <div className={style.flexContainer}>
              <NavLink to={`/course/${curse._id}`} className={style.courseName}>
                {curse.titulo}
              </NavLink>
              <div className={style.courseStats}>
                {isLogged ? (
                  <button onClick={() => handleClick()}>
                    {" "}
                    <FavoriteIcon />{" "}
                  </button>
                ) : (
                  <button onClick={() => navigate("/login")}>
                    {" "}
                    <FavoriteIcon />{" "}
                  </button>
                )}
                <span>{curse.calificacion}</span>
                <CompletedIcon />
                <span>1600</span>
              </div>
              <div className={style.descripcion}>
                <span>{curse.descripcion}</span>
              </div>
            </div>
            <div className={style.lenguaje}>
              <JSIcon lenguajes={curse.lenguaje} />
            </div>
            <div></div>
          </div>
        </ThemeProvider>
      ))}
    </div>
  );
}

export default CoursesCard;
