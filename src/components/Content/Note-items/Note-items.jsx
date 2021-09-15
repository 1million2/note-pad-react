// список элементов
import classes from "./Note-items.module.css";
import NoteItem from "./Note-item/Note-item";

function NoteItems() {
    return (
        <div className={classes.items}>
            <NoteItem name="eduard"/>
            <NoteItem />
            <NoteItem />
        </div>

    );
}

export default NoteItems;