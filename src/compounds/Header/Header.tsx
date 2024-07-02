import { FC } from "react"
import { createUseStyles } from "react-jss"
import { colors } from "../../utils/colors";

const useStyles = createUseStyles({
    header: {
    },
});

const Header: FC = () => {
    const classes = useStyles()

    return (
        <header className={classes.header}>
        </header>
    )
}

export default Header