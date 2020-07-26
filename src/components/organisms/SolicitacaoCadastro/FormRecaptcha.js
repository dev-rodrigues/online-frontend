import React, { Component } from 'react';

import Button from '../../atoms/Button/Index';
import Recaptcha from '../../atoms/Recaptcha/Index';
import TabContent from '../../molecules/TabContent/Index';

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
    console.log('cuco!')
    if (response) {
      this.setState({
        verificado: true
      })
    }
  }

  render() {

    return (
      <TabContent>
        <TabContent>
          <Recaptcha verificar={this.verificar}/>
        </TabContent>

        <div className="botoes">
          <Button
            className="continue"
            onClick={this.continue}>
            Continuar
          </Button>
        </div>

      </TabContent>
    )
  }
}

export default FormRecaptcha;
