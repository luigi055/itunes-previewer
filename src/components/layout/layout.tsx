import styled, { css } from "styled-components";

const basePaddingX = css`
  padding-left: 25px;
  padding-right: 25px;
`;

const basePaddingY = css`
  padding-bottom: 50px;
  padding-top: 25px;
`;

export const fluidContainer = css`
  ${basePaddingX}
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const PageContainer = styled.main`
  ${fluidContainer}
  ${basePaddingY}
  flex-grow: 100;
`;

export const CenteredElementXY = styled(PageContainer)`
  display: flex;
  height: calc(100% - 70px);
  justify-content: center;
  align-items: center;
`;
