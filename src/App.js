import { useEffect, useState } from "react";
import { CrearPalabras } from "./components/CrearPalabras";
import { Info } from "./components/Info";
import { Palabras } from "./components/Palabras";
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
  const moveToFrase = (palabraClicada) => {
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

  //Suma un uso a la palabra y la borra del listado
  const moveToPalabras = (palabraClicada) => {
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

  const anyadirPalabra = (
    e,
    nuevaPalabra,
    usosNuevaPalabra,
    lenguajeNuevaPalabra
  ) => {
    e.preventDefault();
    setMisPalabras([
      ...misPalabras,
      {
        id: getMaxId(misPalabras) + 1,
        palabra: nuevaPalabra,
        lenguajeProgramacion: lenguajeNuevaPalabra,
        usos: usosNuevaPalabra,
      },
    ]);
  };

  //Devuelve el numero de lenguajes de el array
  const contarNumeroLenguajes = (arrayPalabras) => {
    let cont = 0;
    for (const palabra of arrayPalabras) {
      if (palabra.lenguajeProgramacion) {
        cont++;
      }
    }
    return cont;
  };

  //Devuelve el id mas grande de el array
  const getMaxId = (arrayPalabras) => {
    if (arrayPalabras.length === 0) {
      return 0;
    }
    return Math.max(...arrayPalabras.map((palabra) => palabra.id));
  };

  return (
    <>
      <Palabras
        misPalabras={misPalabras}
        frasePalabras={frasePalabras}
        moveToFrase={moveToFrase}
        moveToPalabras={moveToPalabras}
      />
      <CrearPalabras
        misPalabras={misPalabras}
        anyadirPalabra={anyadirPalabra}
      />
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
