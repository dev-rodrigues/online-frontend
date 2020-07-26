import React, { HtmlHTMLAttributes } from 'react'

import { Root } from './styles';

type DivProps = HtmlHTMLAttributes<HTMLDivElement>;

const Content: React.FC<DivProps> =({children, ...rest}) => (
    <Root>
      { children }
    </Root>
)

export default Content;
