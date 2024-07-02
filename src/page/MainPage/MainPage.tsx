import { FC } from "react"
import { createUseStyles } from "react-jss"
import { colors } from "../../utils/colors";
import { Routes, Route, Link } from "react-router-dom";
import DisciplineCard from "../../shared/DisciplineCard/DisciplineCard";
import PhysicsIcon from "../../assets/images/PhysicsIcon";
import MathematicsIcon from "../../assets/images/MathematicsIcon";
import AstronomyIcon from "../../assets/images/AstronomyIcon";

const viewportHeight = window.innerHeight

const useStyles = createUseStyles({
    section: {
        display: "grid",
        gap: "25px",
        gridTemplateColumns: "1fr 1fr 1fr",
        height: `${viewportHeight}px`,
        alignItems: "center"
    },
    link: {
        textDecoration: "none"
    }
});

const MainPage: FC = () => {
    const classes = useStyles()

    return (
        <header className={classes.section}>
            <Link className={classes.link} to="/Physics">
                <DisciplineCard color={colors.pastelBlue} title={"физика"} icon={<PhysicsIcon />} />
            </Link>
            <Link className={classes.link} to="/">
                <DisciplineCard color={colors.pastelBlue} title={"математика"} icon={<MathematicsIcon />} />
            </Link>
            <Link className={classes.link} to="/">
                <DisciplineCard color={colors.pastelBlue} title={"астрономия"} icon={<AstronomyIcon />} />
            </Link>
        </header>
    )
}

export default MainPage