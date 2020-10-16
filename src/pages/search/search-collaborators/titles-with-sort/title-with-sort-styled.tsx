import styled, { css } from "styled-components";
import { PlayListWrapper } from "../playlist/playlist-styled";
import {declareCssForSmallView, declareCssForLargeView} from "styles/responsive";

export const TitleWithSortWrapper = styled(PlayListWrapper)`
  ${declareCssForSmallView(css`
    display: none;
  `)}

  ${declareCssForLargeView(css`
    display: block;
  `)}
`;
