import React, { HtmlHTMLAttributes } from 'react'

import { Container } from './styles';

type DivProps = HtmlHTMLAttributes<HTMLDivElement>;

const TabContent: React.FC<DivProps> =({children, ...rest}) => (
    <Container>
      { children }
    </Container>
)

export default TabContent;
