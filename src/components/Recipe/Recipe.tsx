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
          Den Teig mit einem Teigschaber in {bunAmount} Teile teilen. Ein
          Backpapier vorbereiten. Die jeweils diagonal gegenüberliegenden Ecken
          eines Teigstücks etwas langziehen und gekreuzt übereinander auf dem
          Backpapier ablegen. Mit ein wenig Wasser bestreichen und nach Belieben
          mit Körnern dekorieren.
        </li>
      </ul>
    </section>
  );
};

export default Recipe;
