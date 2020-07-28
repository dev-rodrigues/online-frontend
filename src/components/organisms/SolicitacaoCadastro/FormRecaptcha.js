import React, { Component } from 'react';

import Button from '../../atoms/Button/Index';
import Recaptcha from '../../atoms/Recaptcha/Index';


class FormRecaptcha extends Component {

  state = {
    verificado: false
  }

  continue = e => {
    e.preventDefault();

    if (this.state.verificado) {
      this.props.nextStep();
    } else {

    }
  }

  verificar = response => {
    if (response) {
      this.setState({
        verificado: true
      })
    }
  }

  render() {

    return (
      <div>
        <div>
          <Recaptcha verificar={this.verificar}/>
        </div>

        <div className="botoes">
          <Button
            className="continue"
            onClick={this.continue}>
            Continuar
          </Button>
        </div>

      </div>
    )
  }
}

export default FormRecaptcha;
