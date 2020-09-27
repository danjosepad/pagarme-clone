import styled from 'styled-components';
import { colors } from './theme';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0px auto;
`;

export const TopHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  color: ${colors.blueDark};
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.26px;

  & > span:first-child {
    padding: 0px 14px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex: 1;
  position: sticky;
  top: 0px;
  background: white;
`;

export const Nav = styled.nav`
  display: flex;

  & > h6 {
    margin-left: 40px;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  & > * + * {
    margin-left: 30px;
  }
`;

export const AboutPagarMe = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  & > * + * {
    margin-top: 40px;
  }
`;

export const ImageContent = styled.div`
  position: relative;
`;

