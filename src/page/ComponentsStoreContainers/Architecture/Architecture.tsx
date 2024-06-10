import { FC } from "react"
import { createUseStyles } from "react-jss"
import { colors } from "../../../utils/colors";

const useStyles = createUseStyles({
    section: {
        marginTop: "20px"
    },
    mainTitle: {
        color: colors.black,
        fontSize: "28px",
        fontFamily: "oswald",
        fontWeight: "400",
        marginTop: "6px",
        marginBottom: "6px",
        textAlign: "center"
    },
    structure: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "15px"
    },
    structureBlock: {
        padding: "10px",
        border: `1px solid ${colors.black}`,
        marginTop: "15px",
        borderRadius: "10px"
    },
    title: {
        color: colors.black,
        fontSize: "25px",
        fontFamily: "oswald",
        fontWeight: "400",
        marginTop: "6px",
        marginBottom: "6px"
    },
    list: {
        padding: "0",
        margin: "0"
    },
    item: {
        listStyleType: "none",
        color: colors.black,
        fontSize: "20px",
        fontFamily: "oswald",
        fontWeight: "400",
    },
    componentsBox: {
        display: "flex",
        gap: "15px",
        flexWrap: "wrap"
    },
    component: {
        color: colors.black,
        fontSize: "23px",
        fontFamily: "oswald",
        fontWeight: "400",
        width: "min-content",
        padding: "3px 12px",
        borderRadius: "5px",
        marginTop: "6px",
        marginBottom: "6px",
        cursor: "pointer"
    },
    backgroundViolet: {
        backgroundColor: colors.pastelViolet.shaded,
        "&:hover": {
            backgroundColor: colors.pastelViolet.darker
        },
        "&:active": {
            backgroundColor: colors.pastelViolet.darker,
            color: colors.white,
        },
    },
    backgroundVioletLight: {
        backgroundColor: colors.pastelViolet.extraBright,
    },
    backgroundBlue: {
        backgroundColor: colors.pastelBlue.shaded,
        "&:hover": {
            backgroundColor: colors.pastelBlue.darker
        },
        "&:active": {
            backgroundColor: colors.pastelBlue.darker,
            color: colors.white,
        },
    },
    backgroundGreen: {
        backgroundColor: colors.pastelGreen.shaded,
        "&:hover": {
            backgroundColor: colors.pastelGreen.darker
        },
        "&:active": {
            backgroundColor: colors.pastelGreen.darker,
            color: colors.white,
        },
    },
    backgroundYellowLight: {
        backgroundColor: colors.pastelYellow.extraBright,
    },
    backgroundYellow: {
        backgroundColor: colors.pastelYellow.shaded,
        "&:hover": {
            backgroundColor: colors.pastelYellow.darker
        },
        "&:active": {
            backgroundColor: colors.pastelYellow.darker,
            color: colors.white,
        },
    },
    backgroundRed: {
        backgroundColor: colors.pastelRed.shaded,
        "&:hover": {
            backgroundColor: colors.pastelRed.darker
        },
        "&:active": {
            backgroundColor: colors.pastelRed.darker,
            color: colors.white,
        },
    },
    backgroundRedLight: {
        backgroundColor: colors.pastelRed.extraBright,
    },
});

const Architecture: FC = () => {
    const classes = useStyles()

    return (
        <section className={classes.section}>
            <h3 className={classes.mainTitle}>Архитектура Components-Store-Containers</h3>
            <div className={classes.structure}>
                <div>
                    <article className={`${classes.structureBlock} ${classes.backgroundYellowLight}`}>
                        <h4 className={classes.title}>Compounds</h4>
                        <ul className={classes.list}>
                            <li className={classes.item}>1) куски страниц, которые используются на нескольких страницах</li>
                            <li className={classes.item}>2) куски страниц, которые работают со store или с сервером</li>
                        </ul>
                        <div className={classes.componentsBox}>
                            <p className={`${classes.component} ${classes.backgroundGreen}`}>Header</p>
                            <p className={`${classes.component} ${classes.backgroundGreen}`}>Footer</p>
                        </div>
                    </article>
                    <article className={`${classes.structureBlock} ${classes.backgroundYellowLight}`}>
                        <h4 className={classes.title}>shared</h4>
                        <ul className={classes.list}>
                            <li className={classes.item}>1) нельзя использовать store</li>
                            <li className={classes.item}>2) нельзя делать сетевые запросы</li>
                            <li className={classes.item}>3) нельзя работать с localStorage</li>
                            <li className={classes.item}>4) эти компоненты должны использоваться в других компонентах (хотя бы потенциально)</li>
                        </ul>
                        <div className={classes.componentsBox}>
                            <p className={`${classes.component} ${classes.backgroundBlue}`}>TextField</p>
                            <p className={`${classes.component} ${classes.backgroundBlue}`}>ButtonWithIcon</p>
                            <p className={`${classes.component} ${classes.backgroundBlue}`}>Table</p>
                            <p className={`${classes.component} ${classes.backgroundBlue}`}>Button</p>
                        </div>
                        <div className={`${classes.structureBlock} ${classes.backgroundVioletLight}`}>
                            <h4 className={classes.title}>users</h4>
                            <div className={classes.componentsBox}>
                                <p className={`${classes.component} ${classes.backgroundViolet}`}>UserInfo</p>
                                <p className={`${classes.component} ${classes.backgroundViolet}`}>UserProfile</p>
                                <p className={`${classes.component} ${classes.backgroundViolet}`}>AddUserToFriendButton</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div>
                    <article className={`${classes.structureBlock} ${classes.backgroundYellowLight}`}>
                        <h4 className={classes.title}>pages</h4>
                        <ul className={classes.list}>
                            <li className={classes.item}>1) страницы приложения</li>
                            <li className={classes.item}>2) и вложенные в них компоненты которые могут использоваться только на родительской странице</li>
                        </ul>
                        <div className={`${classes.structureBlock} ${classes.backgroundVioletLight}`}>
                            <h5 className={classes.title}>AuthPage</h5>
                            <div className={classes.componentsBox}>
                                <p className={`${classes.component} ${classes.backgroundViolet}`}>LoginForm</p>
                                <p className={`${classes.component} ${classes.backgroundViolet}`}>RegesterForm</p>
                            </div>
                        </div>
                        <div className={`${classes.structureBlock} ${classes.backgroundVioletLight}`}>
                            <h5 className={classes.title}>Users</h5>
                            <div className={classes.componentsBox}>
                                <p className={`${classes.component} ${classes.backgroundViolet}`}>UserFriendPage</p>
                                <p className={`${classes.component} ${classes.backgroundViolet}`}>UserProfilePage</p>
                            </div>
                        </div>
                        <div className={`${classes.structureBlock} ${classes.backgroundVioletLight}`}>
                            <h5 className={classes.title}>PostPage</h5>
                            <div className={classes.componentsBox}>
                                <p className={`${classes.component} ${classes.backgroundViolet}`}>PostEditForm</p>
                            </div>
                        </div>
                        <div className={`${classes.structureBlock} ${classes.backgroundVioletLight}`}>
                            <h5 className={classes.title}>CommentsPage</h5>
                            <div className={classes.componentsBox}>
                                <p className={`${classes.component} ${classes.backgroundViolet}`}>AddCommentForm</p>
                                <p className={`${classes.component} ${classes.backgroundViolet}`}>EditCommentForm</p>
                            </div>
                        </div>
                    </article>
                    <article className={`${classes.structureBlock} ${classes.backgroundRedLight}`}>
                        <h4 className={classes.title}>api</h4>
                        <div className={classes.componentsBox}>
                            <p className={`${classes.component} ${classes.backgroundRed}`}>postsApi</p>
                            <p className={`${classes.component} ${classes.backgroundRed}`}>usersApi</p>
                            <p className={`${classes.component} ${classes.backgroundRed}`}>commentsApi</p>
                            <p className={`${classes.component} ${classes.backgroundRed}`}>authApi</p>
                        </div>
                    </article>
                </div>
                <div>
                    <article className={`${classes.structureBlock} ${classes.backgroundYellowLight}`}>
                        <h4 className={classes.title}>stores</h4>
                        <div className={classes.componentsBox}>
                            <p className={`${classes.component} ${classes.backgroundGreen}`}>Posts</p>
                            <p className={`${classes.component} ${classes.backgroundGreen}`}>Users</p>
                            <p className={`${classes.component} ${classes.backgroundGreen}`}>Comments</p>
                        </div>
                    </article>
                    <article className={`${classes.structureBlock} ${classes.backgroundYellowLight}`}>
                        <h4 className={classes.title}>utils</h4>
                        <div className={classes.componentsBox}>
                            <p className={`${classes.component} ${classes.backgroundBlue}`}>dateUtils</p>
                        </div>
                    </article>
                    <article className={`${classes.structureBlock} ${classes.backgroundYellowLight}`}>
                        <h4 className={classes.title}>assets</h4>
                        <div className={classes.componentsBox}>
                            <p className={`${classes.component} ${classes.backgroundBlue}`}>images</p>
                            <p className={`${classes.component} ${classes.backgroundBlue}`}>fonts</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Architecture