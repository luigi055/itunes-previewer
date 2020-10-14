import { basePaddingX } from "components";
import styled from "styled-components";

export const Player = styled.section`
  background: ${({theme}) => theme.backgroundVariantColor};
  display: flex;
  flex-direction: column;
  padding-bottom: 28px;
  position: relative;
  ${basePaddingX}

  > .audio-player {
    order: 2;
  }

  > .social-share {
    justify-content: space-between;
    margin: 0 auto;
    min-width: 180px;
    order: 1;
    padding-bottom: 8px;
    padding-top: 10px;

  }

  @media screen and (min-width: ${({theme}) => theme.largeBreakPoint}) {
  padding: 28px 0;
  ${basePaddingX}

    .social-share {
      align-self: flex-end;
      min-width: 150px;
      padding-bottom: 0;
      padding-top: 0;
      position: absolute;
    }
  }
`;
