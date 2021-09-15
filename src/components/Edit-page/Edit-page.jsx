// страница редактирования элемента
import classes from "./Edit-page.module.css";
import { NavLink } from "react-router-dom";
const EditPage = (props) => {
    return (
        <div className={classes.page}>
            <NavLink to="/content" className={classes.btn}>back</NavLink>
            <h1>Edit page</h1>
            <div>
                <h2>Заголовок</h2> 
                <button className={classes.btn}>edit</button>
            </div>
            <div>
                <h4>Описание</h4>
                <button className={classes.btn}>edit</button>
            </div>
        </div>
    )
}

export default EditPage;