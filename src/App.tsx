import Header from './compounds/Header/Header';
import ComponentsStoreContainers from './page/ComponentsStoreContainers/ComponentsStoreContainers';
import { createUseStyles } from "react-jss"
import { page } from './utils/page';

const useStyles = createUseStyles({
  container: {
    width: `${page.width}px`,
    marginLeft: "auto",
    marginRight: "auto",
  }
});

function App() {
  const classes = useStyles()

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <ComponentsStoreContainers />
      </div>
    </div>
  );
}

export default App;
