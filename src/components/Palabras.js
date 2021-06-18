import { FrasePalabra } from "./FrasePalabra";
import { Palabra } from "./Palabra";

export const Palabras = (props) => {
  const { misPalabras, frasePalabras, moveToFrase, moveToPalabras } = props;
  return (
    <section className="palabras">
      <ul className="lista-palabras">
        {misPalabras.map((palabra) => {
          if (palabra.usos !== 0) {
            return (
              <Palabra
                key={palabra.id}
                palabra={palabra}
                moveToFrase={moveToFrase}
              ></Palabra>
            );
          }
          return <></>;
        })}
      </ul>
      <ul className="resultado">
        {frasePalabras.map((palabra, indice) => (
          <FrasePalabra
            key={palabra.id}
            palabra={palabra}
            indice={indice}
            moveToPalabras={moveToPalabras}
          />
        ))}
      </ul>
    </section>
  );
};
