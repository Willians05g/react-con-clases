import React, { Component } from "react";
import Opcion from "./Opcion";

export default class Question extends Component {
  constructor() {
    super();
  }

  render() {
    const { pregunta, opciones } = this.props;

    return (
      <div> 
        <h2 className="pregunta"> {pregunta} </h2>
        <ul>
          {opciones.map((item, index) => (
            <Opcion 
              key={index}
              texto={item.texto} 
            />
          ))}
        </ul>
      </div>
    );
  }
}
