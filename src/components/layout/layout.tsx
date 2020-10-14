import styled, { css } from "styled-components";

export const basePaddingX = css`
  padding-left: 25px;
  padding-right: 25px;
`;

export const basePaddingY = css`
  padding-bottom: 50px;
  padding-top: 25px;
`;

export const fluidContainer = css`
  ${basePaddingX}
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const MainLayout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: start;
`;


export const CenteredMainElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 100;
`;
