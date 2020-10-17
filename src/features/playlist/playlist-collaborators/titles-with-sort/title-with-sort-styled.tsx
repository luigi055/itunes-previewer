import styled, { css } from "styled-components";
import { PlayListRow } from "../../playlist-styled";
import { declareCssForMediumView } from "styles/responsive";

export const TitleWithSortWrapper = styled(PlayListRow)`
  display: none;

  ${declareCssForMediumView(css`
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
  `)}
`;
