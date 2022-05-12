import React from 'react';
import * as S from './styles';

export type ButtonProps = {
  label: string;
}

export const Button = ({ label }: ButtonProps) => (
  <S.Button>
    {label} "BREAKING CHANGE: test"
  </S.Button>
);
