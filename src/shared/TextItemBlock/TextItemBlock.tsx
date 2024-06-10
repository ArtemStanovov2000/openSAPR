import { FC } from "react"
import { createUseStyles } from "react-jss"
import { page } from "../../utils/page";
import { colors } from "../../utils/colors";

const useStyles = createUseStyles({
    article: {
        backgroundColor: colors.pastelGreen.normal,
    },
});

const TextItemBlock: FC = () => {
    const classes = useStyles()

    return (
        <article className={classes.article}>
        </article>
    )
}

export default TextItemBlock