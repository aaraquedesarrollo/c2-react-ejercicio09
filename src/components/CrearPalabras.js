import { useState } from "react";

export const CrearPalabras = (props) => {
  const { anyadirPalabra, misPalabras } = props;
  const [nuevaPalabra, setNuevaPalabra] = useState("");
  const [usosNuevaPalabra, setUsosNuevaPalabra] = useState("");
  const [lenguajeNuevaPalabra, setLenguajeNuevaPalabra] = useState(false);
  return (
    <section className="crear-palabras">
      <form
        className="form-palabras"
        onSubmit={(e) =>
          anyadirPalabra(
            e,
            nuevaPalabra,
            usosNuevaPalabra,
            lenguajeNuevaPalabra
          )
        }
      >
        <div className="form-grupo">
          <input
            type="text"
            placeholder="Nueva palabra"
            value={nuevaPalabra}
            onChange={(e) => setNuevaPalabra(e.target.value)}
            required
          />
        </div>
        <div className="form-grupo">
          <select
            required
            value={usosNuevaPalabra}
            onChange={(e) => setUsosNuevaPalabra(e.target.value)}
          >
            <option value="">Máximo de veces</option>
            <option value="-1">Sin límite</option>
            <option value="1">1 vez</option>
            <option value="2">2 veces</option>
            <option value="3">3 veces</option>
          </select>
        </div>
        <div className="form-grupo">
          <label>
            <input
              type="checkbox"
              value={lenguajeNuevaPalabra}
              onChange={(e) => setLenguajeNuevaPalabra(e.target.checked)}
            />{" "}
            Es un lenguaje de programación
          </label>
        </div>
        <div className="form-grupo">
          <button
            type="submit"
            disabled={
              nuevaPalabra.length === 0 ||
              misPalabras.find((palabra) => palabra.palabra === nuevaPalabra) ||
              nuevaPalabra.includes(" ") ||
              usosNuevaPalabra === ""
            }
          >
            Crear
          </button>
        </div>
      </form>
    </section>
  );
};
