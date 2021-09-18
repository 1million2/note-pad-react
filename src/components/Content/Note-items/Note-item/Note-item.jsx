// элемент
import { NavLink } from "react-router-dom";
import classes from "./Note-item.module.css";

function NoteItem(props) {
  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <p>Заголовок: {props.name}</p>
        <p>Описание: {props.descript}</p>
        <p>id: {props.id}</p>
      </div>
      <div className={classes.aside}>
        <NavLink to="/edit-page" className={classes.btn}>edit</NavLink>
        <p className={classes.date}>дата создания: 12.09.2021</p>
        <p className={classes.date}>дата ред.: 12.09.2021</p>
      </div>
    </div>
  );
}

export default NoteItem;