import React, {HTMLAttributes} from 'react';

import {Container} from './styles';

type LabelProps = HTMLAttributes<HTMLLabelElement>;

const Label:React.FC<LabelProps> = ({children, ...rest}) => (
  <Container {...rest}>
    {children}
  </Container>
);

export default Label;
