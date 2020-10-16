import styled, { css } from "styled-components";
import { PlayListWrapper } from "../playlist/playlist-styled";
import { declareCssForMediumView } from "styles/responsive";

export const TitleWithSortWrapper = styled(PlayListWrapper)`
  display: none;

  ${declareCssForMediumView(css`
    display: block;
  `)}
`;
