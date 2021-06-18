export const Palabras = (props) => {
  const { misPalabras, frasePalabras, moveToFrase, moveToPalabras } = props;
  return (
    <section className="palabras">
      <ul className="lista-palabras">
        {misPalabras.map((palabra) => {
          if (palabra.usos !== 0) {
            return (
              <li
                key={palabra.id}
                data-lenguaje={palabra.lenguajeProgramacion ? "si" : "no"}
                onClick={() => moveToFrase(palabra)}
              >
                {palabra.palabra}
              </li>
            );
          }
          return <></>;
        })}
      </ul>
      <ul className="resultado">
        {frasePalabras.map((palabra, indice) => (
          <li
            key={palabra.id}
            data-lenguaje={palabra.lenguajeProgramacion ? "si" : "no"}
            onClick={() => moveToPalabras(palabra)}
          >
            {indice === 0
              ? palabra.palabra.charAt(0).toUpperCase() +
                palabra.palabra.slice(1)
              : palabra.palabra}
          </li>
        ))}
      </ul>
    </section>
  );
};
