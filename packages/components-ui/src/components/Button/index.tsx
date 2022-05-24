import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Spinner } from '../Spinner';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  disabled?: boolean;
  isLoading?: boolean;
  appearance?: 'primary' | 'secondary' | 'outline' | 'approve' | 'cancel';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  linkStyle?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
  as?: React.ElementType;
} & ButtonTypes;

export const Button = ({
  children,
  appearance = 'primary',
  fullWidth = false,
  size = 'medium',
  margin = '',
  marginTop = '',
  marginBottom = '',
  marginLeft = '',
  marginRight = '',
  linkStyle = false,
  isLoading = false,
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) => (
  <S.Button
    type={type}
    fullWidth={fullWidth}
    size={size}
    appearance={appearance}
    linkStyle={linkStyle}
    isLoading={isLoading}
    disabled={disabled}
    margin={margin}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    {...props}
  >
    <span>{children}</span>
    {isLoading && <Spinner size={16} marginLeft=".8rem" />}
  </S.Button>
);
