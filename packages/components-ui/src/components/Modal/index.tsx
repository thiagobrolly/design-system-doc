import React, { useEffect } from 'react';
import { PlOutlineClose } from '@paylivre/icons';
import { CSSTransition } from 'react-transition-group';
import { Heading } from '../Heading';

import * as S from './styles';

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onRequestClose: (newValue: boolean) => void;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEscClick?: boolean;
  scrollBarDisabled?: boolean;
  viewCloseButton?: boolean;
  title?: string;
}

export const Modal = ({
  isOpen,
  onRequestClose,
  shouldCloseOnOverlayClick = false,
  shouldCloseOnEscClick = true,
  scrollBarDisabled = true,
  viewCloseButton,
  children,
  title = '',
  ...props
}: ModalProps) => {
  useEffect(() => {
    isOpen && scrollBarDisabled
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');

    function keyListener({ key }: KeyboardEvent) {
      if (key === 'Escape' && shouldCloseOnEscClick && isOpen) {
        onRequestClose(false);
      }
    }

    document.addEventListener('keydown', keyListener);

    return () => document.removeEventListener('keydown', keyListener);
  }, [onRequestClose, shouldCloseOnEscClick, isOpen, scrollBarDisabled]);

  return (
    <S.ModalRoot className="dialog" aria-hidden={!isOpen} aria-label="modal">
      <CSSTransition in={isOpen} timeout={400} unmountOnExit classNames="modal">
        <S.Modal shouldCloseOnEscClick={shouldCloseOnEscClick} isOpen={isOpen}>
          <S.Overlay
            shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
            onClick={() =>
              shouldCloseOnOverlayClick ? onRequestClose(false) : null
            }
            role="region"
            aria-label="overlay"
          />
          <S.Content
            aria-modal
            aria-labelledby={title}
            tabIndex={-1}
            role="dialog"
            isOpen={isOpen}
            {...props}
          >
            <S.FocusContainer>
              <S.Header>
                {viewCloseButton && (
                  <S.Close
                    onClick={() => onRequestClose(false)}
                    data-dismiss="modal"
                    aria-label="close modal"
                    role="button"
                  >
                    <PlOutlineClose size={12} color="currentColor" />
                  </S.Close>
                )}
                {title && (
                  <Heading bold size="large" color="black">
                    {title}
                  </Heading>
                )}
              </S.Header>
              {children}
            </S.FocusContainer>
          </S.Content>
        </S.Modal>
      </CSSTransition>
    </S.ModalRoot>
  );
};
