import styled from 'styled-components';
import { colors } from './theme';
import points from '../images/points.svg';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1366px;
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

export const FlexContent = styled.div`
  display: flex;
  margin-top: 80px;
  background: ${ ({ bgColor }) => bgColor ? bgColor : '#FFFFFF'};
`;

export const FlexImageContent = styled.div`
  display: flex;
  background: url(${({ url }) => url}) no-repeat center/100%;
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - (395px + 10%));

  & > * + * {
    margin-top: 40px;
  }

  img {
    width: calc(100% - (100% - (395px + 10%)));
    height: 100%;
  }
`;

export const ImageContent = styled.div`
  position: relative;
  width: calc(100% - (100% - (395px + 10%)));


`;

export const PointsImage = styled.img`
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: 0;
`;

export const WavesImage = styled.img`
  position: absolute;
  left: 277px;
  bottom: 7px;
  z-index: 2;
`;

export const LargeWaves = styled.img`
  position: absolute;
  top: 150px;
  width: 100%;
  z-index: 0;
`;

export const MacbookImage = styled.img`
  position: relative;
  z-index: 1;
`;

export const WomanImage = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const ParntersLogoContent = styled.div`
  padding: 48px 0px;
  display: flex;
  width: 90%;
  margin: 40px auto 0px;
  justify-content: space-between;
`;

export const Line = styled.hr`
  width: 64px;
  height: 3px;
  background-color: ${colors.purple};
  margin-bottom: 24px;
`;