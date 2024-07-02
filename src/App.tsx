import { createUseStyles } from "react-jss"
import { page } from './utils/page';
import { Routes, Route, Link } from "react-router-dom";
import Header from './compounds/Header/Header';
import MainPage from "./page/MainPage/MainPage";
import Physics from "./page/PhysicsPages/Physics/Physics";

const viewportHeight = window.innerHeight

const useStyles = createUseStyles({
  container: {
    width: `${page.width}px`,
    marginLeft: "auto",
    marginRight: "auto",
  },
  section: {
    display: "grid",
    gap: "25px",
    gridTemplateColumns: "1fr 1fr 1fr",
    height: `${viewportHeight}px`,
    alignItems: "center"
  },
});

function App() {
  const classes = useStyles()

  return (
    <div>
      <Header />
      <main className={classes.container}>
        <section className={classes.section}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Physics" element={<Physics />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
