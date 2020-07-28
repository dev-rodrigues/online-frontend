import React, { HtmlHTMLAttributes } from 'react';

import { Container } from './styles';

type DivProps = HtmlHTMLAttributes<HTMLSelectElement>;

const Button: React.FC<DivProps> = ({ children, ...rest}) => (
  <Container {...rest}>
    {children}
  </Container>
);

export default Button;
