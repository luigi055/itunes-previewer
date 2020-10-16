import { basePaddingX } from "components";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const PlayListWrapper = styled.ul`
  list-style: none;
  ${basePaddingX}
`;

const playListCSS = css`
  /* display: grid;
  grid-template-columns: 10% 25% 15% 15% 10% 10% 10%; */
  display: flex;
  padding: 20px 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TextRight = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100px;
`;

export const TextLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PlayListRow = styled.li`
  ${playListCSS}
  color: ${({ theme }) => theme.onBackgroundColor};
`;

export const PlayListThumbNail = styled.img`
  align-self: center;
  margin-right: 10px;
`;

export const PlayListLink = styled(Link)`
  text-decoration: none;

  :hover,
  :focus {
    ${PlayListRow} {
      background: ${({ theme }) => theme.backgroundHoverColor};
    }
  }
`;

export const PlayListHead = styled.li`
  ${playListCSS}
  color: #747B81;
`;

const listElement = css<{ highlight?: boolean }>`
  align-items: center;
  color: ${({ theme, highlight }) =>
    highlight ? theme.primaryColor : "inherit"};
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1rem;
`;

export const PlayListElement = styled.span<{ highlight?: boolean }>`
  ${listElement}
`;

export const PlayListHeadElement = styled.span<{ highlight?: boolean }>`
  ${listElement}
  background: none;
  font-weight: bold;
`;
