import styled from 'styled-components';
import Message from 'assets/images/MessageLogo.png';

export const MessageIcon = styled.img`
  margin-top: 44px;
  margin-bottom: 0px;
  margin-left: 10px;
  width: 71px;
  height: 53.99px;
`;
MessageIcon.defaultProps = { src: Message };

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
  opacity: 54%;
  font-size: 15px;
  line-height: 21px;
  color: #000000;
`;
