import styled, { css } from "styled-components";
import { fluidContainer } from "components/layout";
import { declareCssForLargeView } from "styles/responsive";

export const Header = styled.header`
  ${fluidContainer}
  align-items: center;
  background: ${({ theme }) => theme.primaryColor};
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-height: 115px;
  min-height: 115px;
  object-fit: contain;
  padding-bottom: 10px;
  padding-top: 10px;

  ${declareCssForLargeView(css`
    flex-direction: row;
    max-height: 70px;
    min-height: 70px;
  `)}
`;

export default Header;
