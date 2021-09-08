import classes from "./Footer.module.css"
function Footer() {
    return (
        <div className={classes.footer}>
            <p>Footer</p>
            <div>
                <button>prev</button>
                <button>next</button>
            </div>
        </div>

    );
}

export default Footer;