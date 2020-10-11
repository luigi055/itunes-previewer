import styled from "styled-components";
import { fluidContainer } from "components/layout";

export const Header = styled.header`
  ${fluidContainer}
  align-items: center;
  background: ${({ theme }) => theme.primaryColor};
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: space-between;
  max-height: 70px;
  min-height: 70px;
  object-fit: contain;
`;

export default Header;
