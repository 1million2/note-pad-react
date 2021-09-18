// список элементов
import classes from "./Note-items.module.css";
import NoteItem from "./Note-item/Note-item";

let noteItemsData = [
	{ id: 1, text: "Vasya", description: "qqws" },
	{ id: 2, text: "Vasya", description: "qqws" },
	{ id: 3, text: "Vasya", description: "qqws" },
	{ id: 4, text: "Vasya", description: "qqws" },
	{ id: 5, text: "Vasya", description: "qqws" },
	{ id: 6, text: "Vasya", description: "qqws" },
];

let noteElements = noteItemsData.map(item => <NoteItem name={item.text} key={item.id} id={item.id} descript={item.description} />)


function NoteItems() {
	return (
		<div className={classes.items}>
			{noteElements}
		</div>

	);
}

export default NoteItems;