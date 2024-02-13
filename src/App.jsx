import { Component } from "react";
import "./style.css";
import Question from "./Question";
import preguntas from "./preguntas";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {preguntas.map((item, index) => (
          <Question
            key={index}
            pregunta={item.pregunta}
            opciones={item.opciones}
          />
        ))}
        <button className="btn-verificar"> verificar con optimus </button>
      </div>
    );
  }
}
