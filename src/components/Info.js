import PropTypes from "prop-types";

export const Info = (props) => {
  const {
    numeroPalabras,
    numeroCaracteres,
    longitudMedia,
    numeroLenguajes,
    listadoLenguajes,
  } = props;
  return (
    <section className="info">
      <ul>
        <li>
          Nº de palabras <span>{numeroPalabras}</span>
        </li>
        <li>
          Nº de caracteres <span>{numeroCaracteres}</span>
        </li>
        <li>
          Longitud media <span>{longitudMedia}</span>
        </li>
        <li>
          Contiene <span>{numeroLenguajes}</span> lenguaje/s de programación
          <ul>
            {listadoLenguajes.map((lenguaje) => (
              <li key={lenguaje}>{lenguaje}</li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};

Info.propTypes = {
  numeroPalabras: PropTypes.number.isRequired,
  numeroCaracteres: PropTypes.number.isRequired,
  longitudMedia: PropTypes.string.isRequired,
  numeroLenguajes: PropTypes.number.isRequired,
  listadoLenguajes: PropTypes.array.isRequired,
};
