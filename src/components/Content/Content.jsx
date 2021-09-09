import classes from "./Content.module.css";
import Items from "./Note-items/Note-items";
function Content() {
    return(
      <div className={classes.wrapper}>
        <h1>hello</h1>
        <p>Content</p>
        <Items />
      </div>

    );
  }

  export default Content;