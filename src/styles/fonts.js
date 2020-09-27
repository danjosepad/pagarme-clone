import { colors } from './theme';
import styled from 'styled-components';


export const Span = styled.span`
  color: ${colors.primary};
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.26px;
`;

export const H1 = styled.h1`
  color: ${colors.blueDarker};
  font-size: 44px;
  line-height: 62px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-bottom: 12px;
  margin-top: 54px;
`;

export const H6 = styled.h6`
  color: ${colors.blueDark};
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.26px;
`;

export const P1 = styled.p`
  color: ${colors.blueDark};
  margin-top: 12px;
  margin-bottom: 40px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 26px;
`;