const Recipe = () => {
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
      </ul>
    </section>
  );
};

export default Recipe;
