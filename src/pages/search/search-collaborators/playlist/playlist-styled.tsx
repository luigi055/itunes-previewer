import { basePaddingX } from "components";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  declareCssForMediumView,
  declareCssForLargeView,
} from "styles/responsive";

const playListCSS = css`
  display: flex;
  padding: 20px 0;
  ${basePaddingX}
`;

const listElement = css<{ highlight?: boolean }>`
  align-items: center;

  display: flex;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const PlayListWrapper = styled.ul`
  list-style: none;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
`;

export const TextRight = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100px;

  ${declareCssForMediumView(css`
    align-items: center;
    flex-basis: 35%;
    flex-direction: row;
    justify-content: flex-end;
    padding-left: 25px;

    > span, button {
      flex-basis: 100%;
    }
  `)}
`;

export const TextLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${declareCssForMediumView(css`
    flex-basis: 65%;
    flex-direction: row;
    justify-content: flex-start;

    > * {
      padding-left: 20px;
    }

    > :first-child {
      flex-basis: 35%;
    }
    > :nth-child(2) {
      flex-basis: 30%;
    }
    > :last-child {
      flex-basis: 35%;
    }
  `)}

  ${declareCssForLargeView(css`
    > :first-child {
      flex-basis: 30%;
    }
    > :nth-child(2) {
      flex-basis: 30%;
    }
    > :last-child {
      flex-basis: 40%;
    }
  `)}
`;

export const PlayListThumbNail = styled.img`
  align-self: center;
  margin-right: 10px;

  ${declareCssForMediumView(css`
    margin-right: 0px;
  `)}
`;
export const PlayListRow = styled.li`
  ${playListCSS}

  color: ${({ theme }) => theme.onBackgroundColor};
`;

export const PlayListHead = styled.li`
  color: #747b81;
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

export const PlayListElement = styled.span<{ highlight?: boolean }>`
  ${listElement}
  color: ${({ theme, highlight }) =>
    highlight ? theme.primaryColor : "inherit"};
`;

export const PlayListHeadElement = styled.span<{ highlight?: boolean }>`
  ${listElement}
  background: none;
  color: ${({ theme, highlight }) =>
    highlight ? theme.primaryColor : theme.disabledVariant};
  font-size: var(--base-size);
`;
