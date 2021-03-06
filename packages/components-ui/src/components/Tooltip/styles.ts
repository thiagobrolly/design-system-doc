import styled, { css } from 'styled-components';
import { theme } from '@paylivre/styles';
import { TooltipProps } from '.';

type ContentProps = Pick<TooltipProps, 'position'>;

export interface WrapperProps {
  isOpen?: boolean;
}

const positionContent = {
  left: () => css`
    left: 0;

    &::before {
      content: '';
      position: absolute;
      border: 1rem solid transparent;
      border-bottom-color: ${theme.color.white};
      top: -1.9rem;
      left: 2.4rem;
      filter: drop-shadow(0px -4px 5px rgba(0, 0, 0, 0.2));
    }

    &::after {
      content: '';
      position: absolute;
      border: 1rem solid transparent;
      border-bottom-color: ${theme.color.white};
      top: -1.7rem;
      left: 2.4rem;
    }
  `,

  right: () => css`
    right: 0;

    &::before {
      content: '';
      position: absolute;
      border: 1rem solid transparent;
      border-bottom-color: ${theme.color.white};
      top: -1.9rem;
      right: 2.4rem;
      filter: drop-shadow(0px -4px 5px rgba(0, 0, 0, 0.2));
    }

    &::after {
      content: '';
      position: absolute;
      border: 1rem solid transparent;
      border-bottom-color: ${theme.color.white};
      top: -1.7rem;
      right: 2.4rem;
    }
  `,
};

export const Trigger = styled.div`
  cursor: pointer;
  position: relative;
`;

export const Content = styled.div<ContentProps>`
  ${({ position }) => css`
    position: absolute;
    top: 35px;
    background: ${theme.color.white};
    color: ${theme.color.black};
    padding: ${theme.spacings.xxsmall};
    z-index: ${theme.layers.modal};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: ${theme.transition.default};

    ${positionContent[position!]()}
  `}
`;

export const TooltipRoot = styled.div<WrapperProps>`
  ${() => css`
    position: relative;
    width: max-content;

    .tooltip-ui-enter {
      opacity: 0;
      transform: translateY(-1.6rem);
    }

    .tooltip-ui-enter-active {
      opacity: 1;
      transform: translateY(0);
    }

    .tooltip-ui-exit {
      opacity: 0;
      transform: translateY(0);
    }

    .tooltip-ui-exit-active {
      opacity: 0;
      transform: translateY(-1.6rem);
    }
  `}
`;
