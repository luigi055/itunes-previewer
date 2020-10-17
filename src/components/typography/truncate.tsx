import React, { FunctionComponent, HTMLAttributes } from "react";
import styled, { css } from "styled-components";

export const truncateStyles = css`
  display: table;
  table-layout: fixed;
  width: 100%;
  white-space: nowrap;
  > * {
    display: table-cell;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const TruncateWrapper = styled.span`
  ${truncateStyles}
`;

export const Truncate: FunctionComponent<HTMLAttributes<
  HTMLSpanElement | HTMLDivElement | HTMLElement
>> = ({ children, ...props }) => (
  <TruncateWrapper {...props}>
    <span>{children}</span>
  </TruncateWrapper>
);

export const StyledTruncate = styled(Truncate);
