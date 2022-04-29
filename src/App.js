import Wrapper from "./Components/Wrapper";
import Styles from './Styles/App.module.css'
const App=()=> {
  return (
    <div className={Styles.app}>
      <header>
        <h2>Counter App</h2>
      </header>
      <Wrapper />
    </div>
  );
}

export default App;
