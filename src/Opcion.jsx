import React, { Component } from 'react'

export default class Opcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seleccionado: false
    }
  }

  handleClick = () => {
    this.setState({ seleccionado: !this.state.seleccionado})
  }

  render() {
    const { seleccionado } = this.state  // Saco de las State
    const { texto } = this.props //Saco de las props 
    const stilos = {
      backgroundColor: seleccionado ? 'peru' :  '#e2e2e2'
    }

    return (
      <div className='opcion-container ' onClick={this.handleClick} style={stilos} >
        {texto}
      </div>
    )
  }
}
