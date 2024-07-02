import { FC } from "react"
import { createUseStyles } from "react-jss"
import DisciplineCard from "../../../shared/DisciplineCard/DisciplineCard";
import AstronomyIcon from "../../../assets/images/AstronomyIcon";
import MechanicsIcon from "../../../assets/images/MechanicsIcon";
import QuantumIcon from "../../../assets/images/QuantumIcon";
import ThermodynamicsIcon from "../../../assets/images/ThermodynamicsIcon";
import { Link } from "react-router-dom";
import { colors } from "../../../utils/colors";

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

const Physics: FC = () => {
    const classes = useStyles()

    return (
        <header className={classes.section}>
            <Link className={classes.link} to="/">
                <DisciplineCard color={colors.pastelGreen} title={"Механика"} icon={<MechanicsIcon />} />
            </Link>
            <Link className={classes.link} to="/">
                <DisciplineCard color={colors.pastelGreen} title={"Квантовая"} icon={<QuantumIcon />} />
            </Link>
            <Link className={classes.link} to="/">
                <DisciplineCard color={colors.pastelGreen} title={"Термодинамика"} icon={<ThermodynamicsIcon />} />
            </Link>
        </header>
    )
}

export default Physics