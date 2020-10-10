import styled from "styled-components";

export const ScreenReaderOnly = styled.span`
  -webkit-clip-path: inset(50%) !important;
  border: 0 !important;
  clip-path: inset(50%) !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`;
