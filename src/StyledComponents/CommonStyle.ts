import styled from 'styled-components';
import MainLogo from 'assets/images/Logo.png';

export const Background = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: fixed;
  background-color: #e5e5e5;
`;

export const FormBackground = styled.section`
  background: #ffffff;
  position: absolute;
  margin: 1%;
  margin-left: 35%;

  padding-left: 38px;
  align-items: center;
  width: 414px;
  height: 896px;
  & .MuiGrid-spacing-xs-6 {
    margin-bottom: 22px;
  }
  & .MuiGrid-spacing-xs-2 > .MuiGrid-item {
    padding-bottom: 22px;
  }
`;

export const Logo = styled.img`
  margin-top: 34px;
  margin-bottom: 30px;
  margin-left: 10px;
  width: 96px;
  height: 30px;
`;
Logo.defaultProps = { src: MainLogo };
