import styled from "styled-components";

export const PlayerButton = styled("a")<{ $isDisabled?: boolean }>`
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? "none" : "auto")};
  background: none;
  padding: 10px 12px;
`;

export const ControlButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
