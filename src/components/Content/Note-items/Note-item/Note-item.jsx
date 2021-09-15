// элемент
import { NavLink } from "react-router-dom";
import classes from "./Note-item.module.css";

function NoteItem(props) {
  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <p>{props.name}</p>
        <p>Описание</p>
      </div>
      <div className={classes.aside}>
        <NavLink to="/editPage" className={classes.btn}>edit</NavLink>
        <p className={classes.date}>дата создания: 12.09.2021</p>
        <p className={classes.date}>дата ред.: 12.09.2021</p>
      </div>
    </div>
  );
}

export default NoteItem;