import { createUseStyles } from "react-jss" // Более популярна styled-components
import Header from './compounds/Header/Header';
import MainPage from "./page/MainPage/MainPage";

const viewportHeight = window.innerHeight // Удалить, если не нужна

const useStyles = createUseStyles({
  container: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});

function App() {
  const classes = useStyles()

  return (
    <div>
      <Header />
      <main className={classes.container}>
        <MainPage />
      </main>
    </div>
  );
}

export default App;
