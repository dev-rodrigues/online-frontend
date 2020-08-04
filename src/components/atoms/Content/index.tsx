import React, { HtmlHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, AnimationContainer } from './styles';

type DivProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  navegar?: boolean,
  destino?: string,
  destinoInfo?: string
};

const Index: React.FC<DivProps> = ({ navegar, destino, destinoInfo, children, ...rest}) => (
  <Container className="background">
    <AnimationContainer>
      {children}
    </AnimationContainer>

    {navegar && (
      <div className="retornar">
      <Link to={`${destino}`}>
        <FiArrowLeft size='20'/>
        {destinoInfo}
      </Link>
      </div>
    )}
  </Container>
);

export default Index;
