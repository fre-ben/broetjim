import Ingredients from "./components/Ingredients/Ingredients";
import Recipe from "./components/Recipe/Recipe";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
  return (
    <main className="grid gap-4 m-4 justify-items-center">
      <ThemeToggle />
      <Ingredients />
      <Recipe />
    </main>
  );
}

export default App;
