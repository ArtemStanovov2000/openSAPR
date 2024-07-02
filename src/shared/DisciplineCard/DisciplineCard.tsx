import { FC } from "react"
import { createUseStyles } from "react-jss"
import { colors } from "../../utils/colors";

type Color = {
    [key:string]: string
}

type Props = {
    title: string,
    icon: JSX.Element, 
    color: Color
}

const DisciplineCard: FC<Props> = ({title, icon, color}) => {
    const useStyles = createUseStyles({
        article: {
            backgroundColor: color.basic,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            width: "400px",
            paddingBottom: "15px",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: color.dark1level,
            },
            "&:active": {
                backgroundColor: color.dark2level,
            },
        },
        title: {
            fontFamily: "Oswald",
            fontWeight: "300",
            fontSize: "40px",
            textTransform: "uppercase",
            margin: "7px 0",
            color: colors.black,
        },
        image: {
            width: "150px",
        }
    });

    const classes = useStyles()

    return (
        <article className={classes.article}>
            <h3 className={classes.title}>{title}</h3>
            <div className={classes.image}>
                {icon}
            </div>
        </article>
    )
}

export default DisciplineCard