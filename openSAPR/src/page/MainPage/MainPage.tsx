import { FC } from "react"
import { createUseStyles } from "react-jss"
import { useState } from "react";
import Canvas from "./Canvas/Canvas";
import ToolsPanel from "../../compounds/ToolsPanel/ToolsPanel";

const useStyles = createUseStyles({
    window: {
        display: "grid",
        gap: "25px",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center"
    },
});

const MainPage: FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.window}>
            <ToolsPanel />
            <Canvas width={window.innerWidth} height={window.innerHeight} />
        </div>
    )
}

export default MainPage