export const Palabra = (props) => {
  const { palabra, moveToFrase } = props;
  return (
    <li
      data-lenguaje={palabra.lenguajeProgramacion ? "si" : "no"}
      onClick={() => moveToFrase(palabra)}
    >
      {palabra.palabra}
    </li>
  );
};
