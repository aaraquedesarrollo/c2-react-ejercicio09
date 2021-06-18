export const FrasePalabra = (props) => {
  const { palabra, moveToPalabras, indice } = props;
  return (
    <li
      data-lenguaje={palabra.lenguajeProgramacion ? "si" : "no"}
      onClick={() => moveToPalabras(palabra)}
    >
      {indice === 0
        ? palabra.palabra.charAt(0).toUpperCase() + palabra.palabra.slice(1)
        : palabra.palabra}
    </li>
  );
};
