import styled, { css } from "styled-components";

export const PlayListWrapper = styled.ul`
  list-style: none;
`;

export const PlayListLink = styled("a")`
  text-decoration: none;
`;

const playListCSS = css`
  display: grid;
  grid-template-columns: 10% 25% 15% 15% 10% 10% 10%;
  padding: 20px 0;
`;

export const PlayListRow = styled.li`
  ${playListCSS}
  color: ${({ theme }) => theme.onBackgroundColor};

  :hover,
  :focus {
    background: ${({ theme }) => theme.backgroundHoverColor};
  }
`;

export const PlayListHead = styled.li`
  ${playListCSS}
  color: #747B81;
`;

export const PlayListElement = styled.span<{ highlight?: boolean }>`
  align-items: center;
  color: ${({ theme, highlight }) =>
    highlight ? theme.primaryColor : "inherit"};
  display: flex;
`;
