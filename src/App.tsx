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

      <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
        <p className="inline-flex text-xs">
          Website erstellt von
          <a className="link" href="https://github.com/fre-ben" target="_blank">
            fre-ben
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
