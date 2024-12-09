import { FC } from "react"
import { createUseStyles } from "react-jss"
import ToolItem from "./ToolItem/ToolItem";
import LineIcon from "../../assets/images/LineIcon";
import CircleIcon from "../../assets/images/CircleIcon";

const useStyles = createUseStyles({
    panel: {
        display: "grid",
        gap: "5px",
        position: "absolute",
        top: "20px",
        left: "2px",
        zIndex: "2",
        backgroundColor: "white",
        padding: "5px"
    },
});

const ToolsPanel: FC = () => {
    const classes = useStyles()
    return (
        <article className={classes.panel}>
            <ToolItem icon={<LineIcon />} tool="Line"  />
            <ToolItem icon={<CircleIcon/>} tool="Line"/>
        </article>
    )
}

export default ToolsPanel