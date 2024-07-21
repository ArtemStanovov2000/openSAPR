import { FC } from "react"
import { createUseStyles } from "react-jss"
import { useDispatch } from "react-redux";
import { setTool } from "../../store/toolSlise";

const useStyles = createUseStyles({
    window: {
        display: "flex",
        width: "35px",
        height: "35px",
        padding: "4px",
        border: "1px solid black",
        backgroundColor: "inherit",
        cursor: "pointer",
        borderRadius: "4px"
    },
});

type Props = {
    icon: JSX.Element,
    label: string,
}

const ToolItem: FC<Props> = ({icon, label}) => {
    const classes = useStyles()

    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(setTool(label))} className={classes.window}>
            {icon}
        </button>
    )
}

export default ToolItem