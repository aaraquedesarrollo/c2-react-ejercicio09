import { useEffect, useState } from "react";
import { Info } from "./components/Info";
import { palabras } from "./datos/palabras";

function App() {
  const [misPalabras, setMisPalabras] = useState(palabras);
  const [frasePalabras, setFrasePalabras] = useState([]);
  const [numeroPalabras, setNumeroPalabras] = useState(0);
  const [numeroCaracteres, setNumeroCaracteres] = useState(0);
  const [longitudMedia, setLongitudMedia] = useState("");
  const [numeroLenguajes, setNumeroLenguajes] = useState(0);
  const [listadoLenguajes, setListadoLenguajes] = useState([]);

  //Gasta un uso de la palabra y la coloca en el listado de la derecha
  const anyadirPalabra = (palabraClicada) => {
    setMisPalabras(
      misPalabras.map((palabra) => {
        if (palabra.id === palabraClicada.id) {
          return { ...palabra, usos: palabra.usos - 1 };
        }
        return palabra;
      })
    );
    setFrasePalabras([
      ...frasePalabras,
      misPalabras.find((palabra) => palabra.id === palabraClicada.id),
    ]);
  };

  //Actualiza el componente Info segun las palabras que haya en el listado de la frase
  useEffect(() => {
    setNumeroPalabras(frasePalabras.length);
    setNumeroCaracteres(
      frasePalabras.map((palabra) => palabra.palabra).join("").length
    );
    setLongitudMedia(
      numeroPalabras !== 0 ? (numeroCaracteres / numeroPalabras).toFixed(2) : ""
    );
    setNumeroLenguajes(contarNumeroLenguajes(frasePalabras));
    setListadoLenguajes(
      frasePalabras
        .filter((palabra) => palabra.lenguajeProgramacion)
        .map((palabra) => palabra.palabra)
        .sort()
    );
  }, [frasePalabras, numeroPalabras, numeroCaracteres]);

  //Suma un uso a la palabra y la borra del listado
  const borrarPalabra = (palabraClicada) => {
    //TODO Que no borre todas las mismas palabras si esta repetida
    setMisPalabras(
      misPalabras.map((palabra) => {
        if (palabra.id === palabraClicada.id) {
          return { ...palabra, usos: palabra.usos + 1 };
        }
        return palabra;
      })
    );
    setFrasePalabras(
      frasePalabras.filter((palabra) => palabra.id !== palabraClicada.id)
    );
  };

  const palabrasIguales = (palabra1, palabra2) =>
    palabra1.ToUpperCase() === palabra2.ToUpperCase();

  const contarNumeroLenguajes = (array) => {
    let cont = 0;
    for (const palabra of array) {
      if (palabra.lenguajeProgramacion) {
        cont++;
      }
    }
    return cont;
  };

  return (
    <>
      <section className="palabras">
        <ul className="lista-palabras">
          {misPalabras.map((palabra) => {
            if (palabra.usos !== 0) {
              return (
                <li
                  key={palabra.id}
                  data-lenguaje={palabra.lenguajeProgramacion ? "si" : "no"}
                  onClick={() => anyadirPalabra(palabra)}
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
              onClick={() => borrarPalabra(palabra)}
            >
              {indice === 0
                ? palabra.palabra.charAt(0).toUpperCase() +
                  palabra.palabra.slice(1)
                : palabra.palabra}
            </li>
          ))}
        </ul>
      </section>
      <section className="crear-palabras">
        <form className="form-palabras">
          <div className="form-grupo">
            <input type="text" placeholder="Nueva palabra" required />
          </div>
          <div className="form-grupo">
            <select required>
              <option value="">Máximo de veces</option>
              <option value="0">Sin límite</option>
              <option value="1">1 vez</option>
              <option value="2">2 veces</option>
              <option value="3">3 veces</option>
            </select>
          </div>
          <div className="form-grupo">
            <label>
              <input type="checkbox" /> Es un lenguaje de programación
            </label>
          </div>
          <div className="form-grupo">
            <button type="submit" disabled>
              Crear
            </button>
          </div>
        </form>
      </section>
      <Info
        numeroPalabras={numeroPalabras}
        numeroCaracteres={numeroCaracteres}
        longitudMedia={longitudMedia}
        numeroLenguajes={numeroLenguajes}
        listadoLenguajes={listadoLenguajes}
      />
    </>
  );
}

export default App;
