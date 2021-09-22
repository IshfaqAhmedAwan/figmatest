import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import Message from 'assets/images/MessageLogo.png';

export interface FieldProps {
  width: string;
  height: string;
}

export const Body = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: fixed;
  background-color: #e5e5e5;
`;
export const Wall = styled.section`
  background: #ffffff;
  position: absolute;
  margin: 20px;
  margin-left: 400px;

  padding-left: 30px;
  align-items: center;
  width: 414px;
  height: 896px;
  & .MuiGrid-spacing-xs-6 {
    margin-bottom: 0px;
  }
`;

export const StyledTextField = styled(TextField)<FieldProps>`
  width: ${(FieldProps) => FieldProps.width};
  height: ${(FieldProps) => FieldProps.height};
`;

const SubmitButton = styled.button`
  background: #02e0b1;
  color: white;
  text-transform: uppercase;
  border: none;

  padding: 20px;
  font-size: 16px;
  letter-spacing: 10px;
  width: 366px;
`;
export const Logo = styled.img`
  src: 'Logo.png';
  margin-top: 34px;
  margin-bottom: 30px;
  margin-left: 10px;
  width: 96px;
  height: 30px;
`;
export const MessageIcon = styled.img`
  margin-top: 44px;
  margin-bottom: 0px;
  margin-left: 10px;
  width: 71px;
  height: 53.99px;
`;
MessageIcon.defaultProps = {
  src: Message,
};

export const Heading = styled.h1`
  position: absolute;
  width: 277px;
  height: 87px;
  margin-top: 20px;
  padding-left: 55px;
  font-family: Rawline;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 29px;
  color: #000000;
`;
export const Paragraph = styled.p`
  position: absolute;
  width: 366px;
  height: 181px;
  margin-top: 30px;
  padding-left: 10px;
  font-family: Rawline;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 21px;
  color: #000000;
`;
export const FormField = styled.input`
  width: 366px;
  height: 58px;
`;

export default SubmitButton;
