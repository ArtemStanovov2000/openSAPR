import { FC, ReactNode} from "react"
import { createUseStyles } from "react-jss"
import { useDispatch } from "react-redux";
import { setTool, Tool } from "../../../store/toolSlise";

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
    icon: ReactNode,
    tool: Tool;
}

const ToolItem: FC<Props> = ({icon, tool}) => {
    const classes = useStyles()

    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(setTool(tool))} className={classes.window}>
            {icon}
        </button>
    )
}

export default ToolItem