import React, { HtmlHTMLAttributes } from 'react'

import BackGround from '../../atoms/BackGroundBody/index';
import Container from '../../atoms/Container/Index';
import Content from '../../atoms/Content/Index';
import Rodape from '../../organisms/Footer/Index';

import {} from './styles';

type DivProps = HtmlHTMLAttributes<HTMLDivElement>;

const IntermediateForm: React.FC<DivProps> =({children, ...rest}) => (
  <BackGround>
    <Container className="container">
      <Content>
        {children}
      </Content>
    </Container>
    <Rodape className="rodape" />
  </BackGround>
)

export default IntermediateForm;
