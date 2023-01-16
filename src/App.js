import classes from'./App.module.css';
import Home from './pages/Home/Home.js';

function App() {
  return (
    <div className={classes.routerBox}>
      <Home />
    </div>
  );
}

export default App;
