import {
  css,
  FlattenSimpleInterpolation,
  ThemeProps,
  Interpolation,
} from "styled-components";

type ThemeInterpolation =
  | FlattenSimpleInterpolation
  | Interpolation<ThemeProps<Theme>>;

export const declareCssForLargeView = (
  cssForLargeView: ThemeInterpolation
) => css`
  @media screen and (min-width: ${({ theme }) =>
      `${theme.largeBreakPoint}${theme.breakPointUnit}`}) {
    ${cssForLargeView}
  }
`;

export const declareCssForSmallView = (
  cssForLargeView: ThemeInterpolation
) => css`
  @media screen and (min-width: ${({ theme }) =>
      `${theme.smallBreakPoint}${theme.breakPointUnit}`}) {
    ${cssForLargeView}
  }
`;
