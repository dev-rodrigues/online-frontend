import React, { HtmlHTMLAttributes } from 'react'

import { SimpleForm } from './styles';

type DivProps = HtmlHTMLAttributes<HTMLDivElement>;

const TabContent: React.FC<DivProps> =({children, ...rest}) => (
    <SimpleForm>
      { children }
    </SimpleForm>
)

export default TabContent;
