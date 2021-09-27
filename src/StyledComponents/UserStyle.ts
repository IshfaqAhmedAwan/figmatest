import { TextField } from '@material-ui/core';
import styled, { css } from 'styled-components';

export interface FieldProps {
  width: string;
  height: string;
}

export interface BackgroundProps {
  disappear: boolean;
}

export const StyledTextField = styled(TextField)<FieldProps>`
  width: ${(FieldProps) => FieldProps.width};
  height: ${(FieldProps) => FieldProps.height};
`;

export const LoadingBackground = styled.div<BackgroundProps>`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  ${(BackgroundProps) =>
    BackgroundProps.disappear &&
    css`
      display: block; /* show */
    `}
  & .css-4ndf5c-LoadingOverlayWrapperBase {
    margin-top: 470px;
    margin-right: 650px;
  }
`;

const SubmitButton = styled.button`
  background: #02e0b1;
  color: white;
  text-transform: uppercase;
  border: none;

  margin-top: 9px;
  padding: 20px;
  font-size: 16px;
  letter-spacing: 10px;
  width: 366px;
`;

export const FormField = styled.input`
  width: 366px;
  height: 58px;
`;

export default SubmitButton;
