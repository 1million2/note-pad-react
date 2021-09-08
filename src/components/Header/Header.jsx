import classes from "./Header.module.css";
function Header() {
    return(
      <div className={classes.header}>
        <div>
          <p>Notepad</p>
        </div>
        <form>
          <input type="text" placeholder="Заголовок"></input>
          <input type="text" placeholder="Описание"></input>
          <button >add</button>
        </form>
      </div>
    );
  }

  export default Header;