import React, { HtmlHTMLAttributes } from 'react';

import { Container } from './styles';

type DivProps = HtmlHTMLAttributes<HTMLButtonElement>;

const Index: React.FC<DivProps> = ({ children, ...rest}) => (
  <Container className="background">
    {children}
  </Container>
);

export default Index;
