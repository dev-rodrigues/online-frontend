import React, { HtmlHTMLAttributes } from 'react';

import { Container } from './styles';

type DivProps = HtmlHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<DivProps> = ({ children, ...rest}) => (
  <Container {...rest}>
    {children}
  </Container>
);

export default Button;
