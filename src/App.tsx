import { defaultTheme, Provider } from "@adobe/react-spectrum";
import "./App.css";
import Ingredients from "./components/Ingredients/Ingredients";

function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <h1>Broetjim</h1>

      <Ingredients />
    </Provider>
  );
}

export default App;
