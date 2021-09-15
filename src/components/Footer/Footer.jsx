import classes from "./Footer.module.css"
function Footer() {
    return (
        <div className={classes.footer}>
            <p>Footer</p>
            <div>
                <button className={classes.btn}>prev</button>
                <button className={classes.btn}>next</button>
            </div>
        </div>

    );
}

export default Footer;