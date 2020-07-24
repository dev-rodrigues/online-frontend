import React, { Component } from 'react'

import { Tab, TabContent } from './styles';
import Button from '../Button/Index';

export default class FormRecaptcha extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {

    return (
      <Tab>
        <TabContent>
          <h1>testar recaptcha</h1>
        </TabContent>

        <div className="botoes">
          <Button
            className="continue"
            onClick={this.continue}>
            Continuar
          </Button>
        </div>

      </Tab>
    )
  }
}
