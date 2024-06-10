import { FC } from "react"
import { createUseStyles } from "react-jss"
import { page } from "../../../utils/page";
import { colors } from "../../../utils/colors";

const useStyles = createUseStyles({
    section: {
        marginTop: "50px"
    },
    architectureArticle: {
        background: `linear-gradient(${colors.pastelGreen.bright}, ${colors.pastelViolet.bright});`,
        padding: "20px",
        borderRadius: "20px"
    },
    title: {
        color: colors.black,
        fontSize: "34px",
        fontFamily: "oswald",
        fontWeight: "400",
        marginTop: "10px",
        marginBottom: "6px",
        textAlign: "start"
    },
    description: {
        color: colors.black,
        fontSize: "24px",
        fontFamily: "oswald",
        fontWeight: "300",
        marginTop: "6px",
        marginBottom: "6px",
        textAlign: "justify",
        textIndent: "15px",
    },
    article: {
    },
    list: {
        padding: "0",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "15px",
    },
    item: {
        color: colors.black,
        fontSize: "24px",
        fontFamily: "oswald",
        textAlign: "justify",
        textIndent: "15px",
        listStyleType: "none",
        display: "flex",
        alignItems: "center",
        border: `3px solid ${colors.pastelGreen.darker}`,
        padding: "15px",
        borderRadius: "15px",
        backgroundColor: colors.pastelGreen.extraBright,
        "&:hover": {
            borderRadius: "30px",
            backgroundColor: colors.pastelGreen.ligth,
            textIndent: "17px",
        },
    }
});


const Description: FC = () => {
    const classes = useStyles()

    return (
        <section className={classes.section}>
            <article className={classes.architectureArticle}>
                <h3 className={classes.title}>Что такое архитектурa?</h3>
                <p className={classes.description}>Раньше фронтенд был очень простым. Банк или интернет-магазин мог содержать
                    всего одну страницу, а большая часть логики осуществлялась на серверной стороне".
                    Сейчас использование архитектуры это уже не способ преодолеть трудности, а базовое умение
                    фронтендера.
                </p>
                <p className={classes.description}>Архитектура - совокупность важнейших решений об организации программной системы. Любая архитектура
                    содержит какие-либо узнаваемые паттерны, позволяющие разработчику ориентироваться в ней.
                </p>
            </article>
            <article className={classes.article}>
                <h3 className={classes.title}>Зачем нужна архитектурa?</h3>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        Сложнее запутаться в своем же коде - представьте балкон, на который складывали всё подряд. Через какое-то
                        время вы в лучшем случае будете знать, что нужная вещь там есть, в худшем купите уже имеющююся вещь ещё раз.
                        Можно дублировать код, нарушая принцип DRY, или много часов шерстить проверяя файлы в поисках нужного.
                    </li>
                    <li className={classes.item}>
                        Ваш код возможно будут использовать другие программисты. Если вы ещё как-то можете разбираться свой код, то
                        другие разработчики могут вообще не смочь разобраться. Легкий по сути проект может иметь очень сложную структуру
                        на сленге "hard-code".
                    </li>
                    <li className={classes.item}>
                        Вы как разработчик скорее всего заинтересованы с своем профессиональном развитии. Чем лучше вы разбираетесь в правильных
                        подходах проектирования, тем лучше, даже если в этом нет необходимости. Пренебрегать архитектурой это тоже самое, что Пренебрегать
                        уборкой в помещении или на рабочем месте. Можно жить и так, но вы же не хотите быть неопрятным?
                    </li>
                    <li className={classes.item}>
                        В конце концов это просто стандарт. Даже если вы не видите в этом смысла, это не значит, что нужно делать по-своему.
                        Можно использовать эти принципы хотя бы потому что "так принято".
                    </li>
                </ul>
            </article>
        </section>
    )
}

export default Description