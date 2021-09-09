import classes from "./Note-item.module.css";

function Item () {
    return (
        <div>
            <p className={classes.item}>Item</p>
        </div>
    );
}

export default Item;