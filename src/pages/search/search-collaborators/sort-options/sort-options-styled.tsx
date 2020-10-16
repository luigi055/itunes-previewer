import { basePaddingX } from "components";
import styled, { css } from "styled-components";
import {declareCssForLargeView} from "styles/responsive";

export const SortOptionLabel = styled.label`
  ${basePaddingX}
  position: relative;

  ${declareCssForLargeView(css`
    display: none;
  `)}

  :after {
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    bottom: 0;
    color: ${({ theme }) => theme.disabledVariant};
    content: "<>";
    font: 14px "Consolas", monospace;
    padding: 20px auto;
    pointer-events: none;
    position: absolute;
    right: 50px;
    text-align: center;
    top: 0;
    transform: rotate(90deg);
  }

  :before {
    content: "";
    display: block;
    height: 20px;
    pointer-events: none;
    position: absolute;
    right: 6px;
    top: 0px;
    width: 20px;
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: ${({ theme }) => theme.backgroundVariantColor};
    border: 1px solid ${({ theme }) => theme.backgroundHoverColor};
    border: none;
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    height: 40px;
    padding: 4px;
    text-align-last: center;
    text-align: center;
    width: 100%;
  }
`;
