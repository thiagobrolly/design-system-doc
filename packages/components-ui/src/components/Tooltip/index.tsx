import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import * as S from './styles';

export type TooltipProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  position?: 'right' | 'left';
  className?: string;
};

export const Tooltip = ({
  trigger,
  children,
  position = 'left',
  className = '',
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.TooltipRoot
      data-state={isOpen ? 'opened' : 'closed'}
      isOpen={isOpen}
      className={className}
    >
      <S.Trigger
        onMouseOut={() => setIsOpen(false)}
        onMouseOver={() => setIsOpen(true)}
      >
        {trigger}
      </S.Trigger>

      <CSSTransition
        in={isOpen}
        timeout={400}
        unmountOnExit
        classNames="tooltip-ui"
      >
        <S.Content aria-hidden={!isOpen} position={position}>
          {children}
        </S.Content>
      </CSSTransition>
    </S.TooltipRoot>
  );
};
