export const ListadoPalabras = (props) => {
  const {clase, arrayPalabras, funcionOnClick}
  return (
    <ul className={clase}>
      {arrayPalabras.map((palabra) => {
        if (palabra.usos !== 0) {
          return (
            <li
              key={palabra.id}
              data-lenguaje={palabra.lenguajeProgramacion ? "si" : "no"}
              onClick={() => funcionOnClick(palabra)}
            >
              {palabra.palabra}
            </li>
          );
        }
        return <></>;
      })}
    </ul>
  );
};
