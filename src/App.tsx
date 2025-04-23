import Ingredients from "./components/Ingredients/Ingredients";
import Recipe from "./components/Recipe/Recipe";
import Separator from "./components/Separator/Separator";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
  return (
    <main className="grid gap-4 m-4 justify-items-center">
      <ThemeToggle />
      <Ingredients />
      <Separator />
      <Recipe />
    </main>
  );
}

export default App;
