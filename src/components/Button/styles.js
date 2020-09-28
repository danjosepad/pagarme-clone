import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const StyledButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  max-width: 320px;

  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 700px;
  border-radius: 8px;
  line-height: 18px;
  color: white;

  background-color: ${colors.primary};
  border: none;
  height: 2.7rem;
  min-width: 5rem;
`
