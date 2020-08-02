import React, { useEffect } from 'react';
import { FiAlertCircle, FiX, FiCheckCircle, FiInfo} from 'react-icons/fi'

import {  ToastElement } from './styles';
import { ToastMessage, useToast } from '../../../hooks/ToastContext';

interface ToastContainerProps {
  message: ToastMessage;
  style: object,
}

const icons = {
  info: <FiInfo size={24}/>,
  error: <FiAlertCircle size={24}/>,
  success: <FiCheckCircle size={24}/>
}

const Toast: React.FC<ToastContainerProps> = ( {message, style} ) => {

  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 3000);

    // se o usuario fechar antes de estourar o tempo, mata o timer
    return () => {
      clearTimeout(timer);
    }

  }, [removeToast, message.id]);

  return (
    <ToastElement
      type={message.type}
      hasDescription={Number(!!message.description)}
      style={style}>

      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        { message.description && <p>{ message.description }</p> }
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiX size={18} />
      </button>

    </ToastElement>
  );
};

export default Toast;
