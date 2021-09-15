import classes from "./Header.module.css";
function Header() {
    return(
      <div className={classes.header}>
        <div>
          <p>Notepad</p>
        </div>
        <form>
          <input type="text" placeholder="Заголовок"></input>
          <textarea type="text" placeholder="Описание"></textarea>
          <button className={classes.btn}>add</button>
        </form>
      </div>
    );
  }

  export default Header;