import styled from 'styled-components';
import { theme } from '@thiago_brolly/styles';

export interface ButtonProps {
  themeColor?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  background-color: ${({ themeColor }) => themeColor || theme.color.white};
  cursor: pointer;
`;
