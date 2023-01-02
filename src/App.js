import "./App.css";
import Routing from "./Routing";
import {
  StateProvider,
  useStateValue,
} from "./components/StateProvider/StateProvider";
import reducer, { initialState } from "./reducer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Routing />
      <Footer />
    </StateProvider>
  );
}

export default App;
