import React, { Component } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

import { RecaptchaContainer } from './styles';

export default class Index extends Component {

  render() {
    return (
      <RecaptchaContainer>
        <ReCAPTCHA
          sitekey="6Le0LrYZAAAAAKTdoCygG2UylCmLpBbBq96CbmxJ"
          onChange={this.props.verificar}>
        </ReCAPTCHA>
      </RecaptchaContainer>
    )
  }
}
