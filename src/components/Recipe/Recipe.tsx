import { Text } from "@adobe/react-spectrum";
import classes from "./Recipe.module.scss";

const Recipe = () => {
  return (
    <div className={classes.wrapper}>
      <Text UNSAFE_style={{ fontSize: "medium" }}>
        Am Vorabend alles in eine Schüssel zusammtun und durchmixen. <br />
        Am besten zuerst Wasser, Zucker, Salz und dann rühren. Dann Mehl (z.B.
        Dinkelmehl 630 oder Mehl 450) dazu. <br />
        Mit großem Löffel rühren. Teig in geölte Schüssel (ja, auch der Deckel
        (Innenseite)) umfüllen. <br />
        Deckel drauf und über Nacht in den Kühlschrank.
      </Text>
    </div>
  );
};

export default Recipe;
