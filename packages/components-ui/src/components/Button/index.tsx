import React from 'react';
import { PlOutlinePlusCircle } from '@thiago_brolly/icons';
import * as S from './styles';

export type ButtonProps = {
  label: string;
  themeColor?: string;
};

export const Button = ({ label, themeColor }: ButtonProps) => (
  <S.Button themeColor={themeColor}>
    <PlOutlinePlusCircle size={25} color="green" />
    {label}
  </S.Button>
);
