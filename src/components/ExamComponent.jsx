import React, { Component } from 'react'
import allPreguntas from '../preguntas'
import PreguntasComponent from './PreguntasComponent'

export default class ExamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      respuestas: allPreguntas.reduce((acc, pregunta, index) => {
        const opcionesSeleccionadas = pregunta.opciones.filter(option => option.seleccionada)
        const respuestasCorrectas = pregunta.opciones.filter(option => option.esCorrecta).map(option => option.texto)
        acc[index] = {
          opcionesSeleccionadas: opcionesSeleccionadas.map(option => option.texto),
          respuestasCorrectas: respuestasCorrectas,
          correctas: JSON.stringify(opcionesSeleccionadas.map(option => option.texto).sort()) === JSON.stringify(respuestasCorrectas.sort())
        };
        return acc
      }, {})
    }
  }

  // manejando el cambio de cualquier opcion de respuesta 
  handleOptionChange = (preguntaId, respuesta) => {
    this.setState( prevState => ({
      respuestas: { 
        ...prevState.respuestas, 
        [preguntaId]: {
          ...prevState.respuestas[preguntaId], 
          opcionesSeleccionadas: prevState.respuestas[preguntaId].opcionesSeleccionadas.includes(respuesta)
          ? prevState.respuestas[preguntaId].opcionesSeleccionadas.filter(option => option !== respuesta)
          : [...prevState.respuestas[preguntaId].opcionesSeleccionadas, respuesta]
        } 
      } 
    }))
  }

  // Manejando cuando se envia o se aplasta el boton para VERIFICAR las respuestas 
  handleSubmit = () => {  
    const { respuestas } = this.state 
    let nroCorrectas = 0;
    const respuestasActualizadas = {...respuestas}

    allPreguntas.forEach((pregunta, index) => {
      const respuestasUsuario = new Set(respuestas[index]?.opcionesSeleccionadas || [] )
      const opcionCorrectaTexto = pregunta.opciones.filter(option => option.esCorrecta).map(option => option.texto)
      const opcionesCorrecta  = new Set(opcionCorrectaTexto)

      // Verificar si las repuestas del usuario Coinciden con las respuestas correctas 
      const esCorrecta = respuestasUsuario.size === opcionesCorrecta.size && [...respuestasUsuario].every(respuesta => opcionesCorrecta.has(respuesta)); 
      
      // Actualiza el objeto de respuestas para reflejar la corrección de la respuesta
      respuestasActualizadas[index] = {
        ...respuestas[index],
        correctas: esCorrecta,
      };

      if (esCorrecta) {
        nroCorrectas++;
      }
    }) 

    this.setState({ respuestas: respuestasActualizadas}, () => {
      console.log('estado de las preguntas', this.state.respuestas)
      console.log(`repuestas correctas: ${nroCorrectas}`)
    })
  }

  render() {
    return (
      <div> 
        <h1> OPTIMUS </h1>  
        {
          allPreguntas.map((item, index) => (
            <PreguntasComponent
              key={index}
              idPregunta={index} //permite identificar cada pregunta
              itemPregunta={item}
              onOptionChange = {this.handleOptionChange }
            />
          ))
        }
        <button onClick={this.handleSubmit} style={{margin: '1rem'}}> Verificar </button>
      </div>
    )
  }
}
