import React from 'react';
import { useTransition } from 'react-spring';

import Toast from '../../atoms/Toast';

import { Container } from './styles';
import { ToastMessage } from '../../../hooks/ToastContext';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ( { messages } ) => {

  const messagesWithTransitions = useTransition(
    messages,
    messages => messages.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    }
  );

  return (
    <Container>
    { messagesWithTransitions.map(({item, key, props}) => (
      <Toast
        key={key}
        message={item}
        style={props} />
    ))}
    </Container>
  )
}

export default ToastContainer;
