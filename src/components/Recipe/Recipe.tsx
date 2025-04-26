interface RecipeProps {
  bunAmount: number;
}

const Recipe: React.FC<RecipeProps> = ({ bunAmount }) => {
  return (
    <section className="max-w-2xl">
      <ul
        role="list"
        className="list bg-base-100 rounded-box shadow-md border border-base-content/5"
        aria-description="Schritt für Schritt Anleitung zum Backen der Brötchen"
      >
        <li className="list-row">
          Am Vorabend des Backens Wasser, Zucker, Hefe und Salz in eine
          ausreichend große Schüssel geben und umrühren.
        </li>
        <li className="list-row bg-base-200">
          Dann Mehl (z.B. Dinkelmehl 630 oder Mehl 450) in die Schüssel
          dazugeben und den Teig mit einem großen Löffel zusammenrühren.
        </li>
        <li className="list-row">
          Den fertig gerührten Teig in eine geölte Schüssel umfüllen (auch die
          Deckelinnenseite der Schüssel sollte geölt sein) und über Nacht in den
          Kühlschrank stellen.
        </li>

        <li className="list-row bg-base-200">
          Am nächsten Morgen den Teig aus der Schüssel auf eine bemehlte
          Arbeitsfläche geben (nicht kneten!) und etwas Mehl über den Teig
          stäuben.
        </li>
        <li className="list-row">
          Den Teig mit einem Teigschaber in {bunAmount} Teile teilen. Die
          Teigteile gleichmäßig auf ein Backpapier ablegen.
        </li>
        <li className="list-row bg-base-200">
          Jeweils diagonal gegenüberliegenden Ecken eines Teigstücks etwas
          langziehen und übereinander kreuzen.
        </li>
        <li className="list-row">
          Anschließend die Teigstücke mit ein wenig Wasser bestreichen und nach
          Belieben mit Körnern dekorieren.
        </li>
        <li className="list-row bg-base-200">
          Im auf 260°C vorgeheizten Backofen (Ober- und Unterhitze, mittlere
          Schiene) die Brötchen gold knusprig backen lassen. <br />
          <br />
          Am besten gelingen die Brötchen mit einem Pizzastein. Guten Appetit!
        </li>
      </ul>
    </section>
  );
};

export default Recipe;
