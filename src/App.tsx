import { defaultTheme, Provider } from "@adobe/react-spectrum";
import "./App.css";
import Ingredients from "./components/Ingredients/Ingredients";
import Recipe from "./components/Recipe/Recipe";

function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <h1>Broetjim</h1>

      <Ingredients />
      <Recipe />
    </Provider>
  );
}

export default App;
