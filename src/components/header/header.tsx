import styled, { css } from "styled-components";
import { fluidContainer } from "components/layout";
import { declareCssForLargeView } from "styles/responsive";

export const Header = styled.header`
  ${fluidContainer}
  align-items: center;
  background: ${({ theme }) => theme.primaryColor};
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: space-between;
  max-height: 115px;
  min-height: 115px;
  object-fit: contain;


  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;

  flex-direction: column;

  ${declareCssForLargeView(css`
  max-height: 70px;
  min-height: 70px;
flex-direction: row;
  `)}
`;

export default Header;
