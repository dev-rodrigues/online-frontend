import React, { Component } from 'react'
import { Tab, TabContent, GRecaptcha } from './styles';

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

        <button
          onClick={this.continue}
        >Continuar</button>

      </Tab>
    )
  }
}
