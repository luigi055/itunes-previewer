import { DesignH1 } from "components/typography";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const EmptyPlaylistHeading = styled(DesignH1)`
  color: ${({ theme }) => theme.onBackgroundVariantColor};
  font-weight: 200;
  margin-top: 10px;
`;

export const EmptyTextWrapper = styled.div`
  text-align: center;
`;

export const PlayList = styled.ul`
  list-style: none;
`;

export const PlayListLink = styled(Link)`
  text-decoration: none;
`;

export const PlayListRow = styled.li`
  display: grid;
  grid-template-columns: 10% 25% 15% 15% 10% 10% 10%;
  padding: 20px 0;

  :hover {
    background: ${({ theme }) => theme.backgroundVariantColor};
  }
`;

export const PlayListElement = styled.span<{ highlight?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme, highlight }) =>
    highlight ? theme.primaryColor : theme.onBackgroundColor};
`;
