import {
  Cell,
  Column,
  NumberField,
  Row,
  TableBody,
  TableHeader,
  TableView,
} from "@adobe/react-spectrum";
import classes from "./Ingredients.module.scss";
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
  const [bunAmount, setBunAmount] = useState(8);
  const [ingredients, setIngredients] = useState<Ingredients>(BASE_INGREDIENTS);

  useEffect(() => {
    const calculateIngredientAmount = (amount: number): Ingredients => {
      return Object.fromEntries(
        Object.entries(ingredients).map(([key, value]) => [
          key,
          {
            ...value,
            amount: Math.round(
              (BASE_INGREDIENTS[key as keyof Ingredients].amount / 8) * amount
            ),
          },
        ])
      ) as Ingredients;
    };

    const newIngredients = calculateIngredientAmount(bunAmount);

    setIngredients(newIngredients);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bunAmount]);

  return (
    <section className={classes.wrapper}>
      <NumberField
        defaultValue={8}
        minValue={1}
        maxValue={100}
        label="Anzahl Brötchen"
        value={bunAmount}
        onChange={setBunAmount}
      />

      <TableView aria-label="Tabelle der Zutaten">
        <TableHeader>
          <Column>Zutat</Column>
          <Column>Menge</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>{ingredients.flour.name}</Cell>
            <Cell>{ingredients.flour.amount}</Cell>
          </Row>
          <Row>
            <Cell>{ingredients.yeast.name}</Cell>
            <Cell>{ingredients.yeast.amount}</Cell>
          </Row>
          <Row>
            <Cell>{ingredients.sugar.name}</Cell>
            <Cell>{ingredients.sugar.amount}</Cell>
          </Row>
          <Row>
            <Cell>{ingredients.salt.name}</Cell>
            <Cell>{ingredients.salt.amount}</Cell>
          </Row>
          <Row>
            <Cell>{ingredients.water.name}</Cell>
            <Cell>{ingredients.water.amount}</Cell>
          </Row>
        </TableBody>
      </TableView>
    </section>
  );
};

export default Ingredients;
