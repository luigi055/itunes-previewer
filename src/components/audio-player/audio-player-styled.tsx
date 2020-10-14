import styled from "styled-components";

export const NavigationButton = styled("a")<{isDisabled?: boolean}>`
  pointer-events:${({isDisabled}) => isDisabled ? "none" : "auto"}
`;
