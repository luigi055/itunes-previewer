import { DesignH1 } from "components/typography";
import styled from "styled-components";

export const EmptyPlaylistHeading = styled(DesignH1)`
  color: ${({ theme }) => theme.onBackgroundVariantColor};
  font-weight: 200;
  margin-top: 10px;
`;

export const EmptyTextWrapper = styled.div`
  text-align: center;
`;
