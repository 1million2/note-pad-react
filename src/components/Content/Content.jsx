import classes from "./Content.module.css";
import NoteItems from "./Note-items/Note-items";
function Content() {
    return(
      <div className={classes.wrapper}>
        <NoteItems />
      </div>

    );
  }

  export default Content;