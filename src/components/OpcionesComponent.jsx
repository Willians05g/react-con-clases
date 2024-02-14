import React, { Component } from 'react'

export default class OpcionesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleChange = (e) => {
    const { idPregunta, onOptionChange } = this.props
    onOptionChange(idPregunta, e.target.value) 
  }

  render() {
    const { texto, idPregunta, tipoRespuesta } = this.props

    return (
      <div>
        <label>
          <input 
            type={tipoRespuesta === 'multiple' ? 'checkbox' : 'radio'} 
            name={`respuesta-${idPregunta}`}
            value={texto}
            onChange={this.handleChange}
          />
          {texto}
        </label>

      </div>
    )
  }
}
