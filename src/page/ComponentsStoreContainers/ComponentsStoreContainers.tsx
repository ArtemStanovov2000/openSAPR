import { FC } from "react"
import { createUseStyles } from "react-jss"
import Architecture from "./Architecture/Architecture";
import Description from "./Description/Description";

const useStyles = createUseStyles({
    page: {
    },
});

const ComponentsStoreContainers: FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.page}>
            <Architecture />
            <Description />
        </div>
    )
}

export default ComponentsStoreContainers