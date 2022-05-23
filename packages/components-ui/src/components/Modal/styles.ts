import styled from 'styled-components';
import { theme } from '@brolly-ui/styles';
import FocusLock from 'react-focus-lock';

type OverlayProps = {
  shouldCloseOnOverlayClick?: boolean;
};

type ContentProps = {
  isOpen: boolean;
};

type ModalProps = {
  shouldCloseOnEscClick: boolean;
  isOpen: boolean;
};

export const Modal = styled.div<ModalProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${theme.layers.modal};
  transition: ${theme.transition.default};
`;

export const Overlay = styled.div<OverlayProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${theme.layers.overlay};
`;

export const Content = styled.div<ContentProps>`
  z-index: 99999;
  transition: ${theme.transition.default};
`;

export const FocusContainer = styled(FocusLock)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  color: #1e1d24;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;

export const Close = styled.button`
  align-self: flex-end;
  margin-right: -14px;
  margin-top: -14px;
  margin-bottom: 5px;
  color: ${theme.color.primary};
  background: transparent;
  border: 0;
  transition: 0.3s;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.gray_500};
  }
`;

export const TransitionModal = styled.div`
  .modal-enter {
    opacity: 0.01;

    ${Content} {
      transform: translateY(-150px);
    }
  }
  .modal-enter-active {
    opacity: 1;

    ${Content} {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  .modal-exit {
    opacity: 1;

    ${Content} {
      transform: scale(1) translateY(0%);
    }
  }
  .modal-exit-active {
    opacity: 0.01;

    ${Content} {
      opacity: 0;
      transform: translateY(-150px);
    }
  }
`;
