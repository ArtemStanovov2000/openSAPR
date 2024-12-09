import { FC } from "react"
import { createUseStyles } from "react-jss"

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