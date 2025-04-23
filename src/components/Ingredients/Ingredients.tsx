import type { Ingredients } from "./Ingredients.types";
import { useEffect, useState } from "react";

const BASE_INGREDIENTS: Ingredients = {
  flour: { name: "Mehl", amount: 500 },
  yeast: { name: "Hefe", amount: 8 },
  sugar: { name: "Zucker", amount: 8 },
  salt: { name: "Salz", amount: 14 },
  water: { name: "Wasser", amount: 375 },
};

const Ingredients = () => {
  const [bunAmount, setBunAmount] = useState<number>(8);
  const [ingredients, setIngredients] = useState<Ingredients>(BASE_INGREDIENTS);

  useEffect(() => {
    const calculateIngredientAmount = (amount: number): Ingredients => {
      return Object.fromEntries(
        Object.entries(ingredients).map(([key, value]) => [
          key,
          {
            ...value,
            amount:
              Math.round(
                (BASE_INGREDIENTS[key as keyof Ingredients].amount / 8) * amount
              ) || 0,
          },
        ])
      ) as Ingredients;
    };

    const newIngredients = calculateIngredientAmount(bunAmount);

    setIngredients(newIngredients);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bunAmount]);

  return (
    <section className="grid gap-4 max-w-sm justify-self-center w-full">
      <h1 className="font-bold text-3xl underline decoration-amber-700">
        Broetjim
      </h1>

      <label className="input w-full shadow-md">
        <span className="label">Anzahl Brötchen</span>
        <input
          type="number"
          defaultValue={bunAmount}
          min={1}
          max={100}
          value={bunAmount}
          title="Anzahl Brötchen"
          onChange={(event) => setBunAmount(event.target.valueAsNumber)}
        />
      </label>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-md">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Zutat</th>
              <th>Menge</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{ingredients.flour.name}</td>
              <td>{ingredients.flour.amount}</td>
            </tr>
            <tr>
              <td>{ingredients.yeast.name}</td>
              <td>{ingredients.yeast.amount}</td>
            </tr>
            <tr>
              <td>{ingredients.sugar.name}</td>
              <td>{ingredients.sugar.amount}</td>
            </tr>
            <tr>
              <td>{ingredients.salt.name}</td>
              <td>{ingredients.salt.amount}</td>
            </tr>
            <tr>
              <td>{ingredients.water.name}</td>
              <td>{ingredients.water.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Ingredients;
