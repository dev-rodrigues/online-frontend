import React, { HtmlHTMLAttributes } from 'react';

import { Container, AnimationContainer } from './styles';

type DivProps = HtmlHTMLAttributes<HTMLButtonElement>;

const Index: React.FC<DivProps> = ({ children, ...rest}) => (
  <Container className="background">
    <AnimationContainer>
      {children}
    </AnimationContainer>
  </Container>
);

export default Index;
