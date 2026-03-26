import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
  const { children, element } = props;
  const modalRoot = document.getElementById('modal-root');

  return createPortal(children, element || modalRoot || document.body);
};
