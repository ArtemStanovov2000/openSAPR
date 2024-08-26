import { FC } from "react"
import { createUseStyles } from "react-jss"
import ToolItem from "../ToolItem/ToolItem";
import LineIcon from "../../assets/images/LineIcon";
import CircleIcon from "../../assets/images/CircleIcon";

const useStyles = createUseStyles({
    window: { // Назвать panel
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

// Переместить в compounds

// article — самостоятельный и независимый
// в article обычно нужны заголовки
const ToolsPanel: FC = () => {
    const classes = useStyles()
    return (
        <article className={classes.window}>
            <ToolItem icon={<LineIcon />} tool="line"  />
            <ToolItem icon={<CircleIcon/>} tool="circle"/>
        </article>
    )
}

export default ToolsPanel