<<<<<<< HEAD
import style from './userCard.module.css';
import { useDispatch } from 'react-redux';
import { isAdminConverter, getAllUsers } from '../../../../../redux/actions';


function UserCard({id, name, username, email, isAdmin, image, courses}) {

  const dispatch = useDispatch();
=======
import lightTheme from "./userCardLight.module.css";
import darkTheme from "./userCardDark.module.css";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
>>>>>>> css

function UserCard({ name, username, email, isAdmin, image, courses }) {
  const popUpFunction = () => {
    console.log("some function not implemented yet");
  };

  const deleteFunction = () => {
    console.log("user deleted");
  };

  const adminFunction = (e) => {
<<<<<<< HEAD
    if(e.target.name === "add_admin") {
        dispatch(isAdminConverter(id, true))
        dispatch(getAllUsers())
    } else if(e.target.name === "delete_admin") {
        dispatch(isAdminConverter(id, false))
        dispatch(getAllUsers())
=======
    if (e.target.name === "add_admin") {
      console.log("user is admin");
    } else if (e.target.name === "delete_admin") {
      console.log("user is  admin");
>>>>>>> css
    }
  };

  var style = darkTheme;
  const theme = useSelector((store) => store.theme);

  //SE TENDRIAN QUE CREAR LOS COMPONENETES POPUP PARA LA OPCION DE BANEAR

  return (
    <ThemeProvider
      theme={theme === "light" ? (style = lightTheme) : (style = darkTheme)}
    >
      <div className={style.cardContainer}>
        <div className={style.userIdentity}>
          <div className={style.imgContainer}>
            <img src={image} alt="profile" />
          </div>

          <div className={style.dataContainer}>
            <h1>{username}</h1>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>isAdmin: {isAdmin.toString()}</h4>
          </div>
        </div>
        <div className={style.userCourses}>
          <h2>Cursos:</h2>
          <div className={style.coursesContainer}>
            {courses.map((course) => (
              <h5 key={course.title}>{course.title}</h5>
            ))}
          </div>
        </div>
        <div className={style.adminOptions}>
          <button
            className={style.optionButton}
            onClick={() => popUpFunction()}
            name="ban"
          >
            Banear
          </button>
          <button
            className={style.optionButton}
            onClick={() => deleteFunction()}
            name="delete"
          >
            Eliminar
          </button>
          {isAdmin ? (
            <button
              className={style.optionButton}
              onClick={(e) => adminFunction(e)}
              name="delete_admin"
            >
              Quitar Admin
            </button>
          ) : (
            <button
              className={style.optionButton}
              onClick={(e) => adminFunction(e)}
              name="add_admin"
            >
              Hacer Admin
            </button>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default UserCard;
