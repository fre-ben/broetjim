import { useState } from "react";
import Ingredients from "./components/Ingredients/Ingredients";
import Recipe from "./components/Recipe/Recipe";
import Separator from "./components/Separator/Separator";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
  const [bunAmount, setBunAmount] = useState<number>(8);

  return (
    <main className="grid gap-4 m-4 justify-items-center">
      <ThemeToggle />
      <Ingredients bunAmount={bunAmount} setBunAmount={setBunAmount} />
      <Separator />
      <Recipe bunAmount={bunAmount} />
    </main>
  );
}

export default App;
