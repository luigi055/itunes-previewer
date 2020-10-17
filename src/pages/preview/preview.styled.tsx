import { basePaddingX } from "components";
import styled, { css } from "styled-components";
import { declareCssForMediumView } from "styles/responsive";

export const Player = styled.section`
  background: ${({ theme }) => theme.backgroundVariantColor};
  display: flex;
  flex-direction: column;
  padding-bottom: 28px;
  position: relative;
  ${basePaddingX}

  > .audio-player {
    order: 2;
  }

  > .social-share {
    align-self: center;
    justify-content: space-around;
    max-width: 180px;
    order: 1;
    padding-bottom: 8px;
    padding-top: 10px;
    width: 100%;
  }

  ${declareCssForMediumView(css`
    padding: 28px 0;
    ${basePaddingX}

    .social-share {
      align-self: flex-end;
      min-width: 150px;
      padding-bottom: 0;
      padding-top: 0;
      position: absolute;
    }
  `)}
`;
