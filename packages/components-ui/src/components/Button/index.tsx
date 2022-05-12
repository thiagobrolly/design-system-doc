import React from 'react';
import * as S from './styles';

export type ButtonProps = {
  label: string;
}

export const Button = ({ label }: ButtonProps) => (
  <S.Button>
    {label} "fix: fix button font size"
  </S.Button>
);
