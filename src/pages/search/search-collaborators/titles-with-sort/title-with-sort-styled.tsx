import styled, { css } from "styled-components";
import { PlayListWrapper } from "../playlist/playlist-styled";
import { declareCssForLargeView } from "styles/responsive";

export const TitleWithSortWrapper = styled(PlayListWrapper)`
  display: none;

  ${declareCssForLargeView(css`
    display: block;
  `)}
`;
