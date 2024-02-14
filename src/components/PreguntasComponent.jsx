import React, { Component } from "react";
import OpcionesComponent from "./OpcionesComponent";

export default class PreguntasComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { idPregunta, itemPregunta, onOptionChange } = this.props;
    return (
      <div>
        <h3> {itemPregunta.pregunta} </h3>
        {itemPregunta.opciones.map((item, index) => (
          <OpcionesComponent
            key={index}
            texto={item.texto}
            valor={item.esCorrecta}
            tipoRespuesta={itemPregunta.tipo_de_respuesta}
            idPregunta={idPregunta}
            onOptionChange={onOptionChange}
          />
        ))}
      </div>
    );
  }
}
