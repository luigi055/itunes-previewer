import styled, { css } from "styled-components";

const textStyles = css`
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

interface HeadingProps {
  isFontWeightNormal?: boolean;
}

export const Heading = styled("h1")<HeadingProps>`
  font-weight: ${({ isFontWeightNormal }) =>
    isFontWeightNormal ? "normal" : "bold"};
  ${textStyles}
  line-height: 1.13;
  color: ${({ theme }) => theme.onPrimaryColor};
`;

export const DesignH1 = styled(Heading)`
  font-size: var(--h1);
  line-height: 1.1;
`;

export const DesignH2 = styled(Heading)`
  font-size: var(--h2);
`;

export const DesignH3 = styled(Heading)`
  font-size: var(--h3);
`;
