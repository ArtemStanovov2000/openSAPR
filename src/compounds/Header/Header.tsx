import { FC } from "react"
import { createUseStyles } from "react-jss"
import { page } from "../../utils/page";
import { colors } from "../../utils/colors";

const useStyles = createUseStyles({
    header: {
        backgroundColor: colors.pastelGreen.normal,
    },
    container: {
        width: `${page.width}px`,
        marginLeft: "auto",
        marginRight: "auto"
    },
    nav: {

    },
    list: {
        display: "flex",
        margin: "0",
        padding: "0",
    },
    item: {
        listStyleType: "none",
        height: "60px"
    },
    link: {
        textDecoration: "none",
        backgroundColor: colors.pastelBlue.normal,
        color: colors.black,
        fontSize: "30px",
        fontFamily: "oswald",
        fontWeight: "400",
        paddingLeft: "20px",
        paddingRight: "20px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        "&:hover": {
            backgroundColor: colors.pastelBlue.shaded
        },
        "&:active": {
            backgroundColor: colors.pastelBlue.darker,
            color: colors.white,
        },
    }
});

const Header: FC = () => {
    const classes = useStyles()

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <ul className={classes.list}>
                        <li className={classes.item}><a className={classes.link} href="#">Главная</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header