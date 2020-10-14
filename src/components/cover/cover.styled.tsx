import styled from "styled-components";
import { DesignH3 } from "components/typography";

export const CoverElement = styled.div`
  text-align: center;

  img {
    border: 1px solid ${({ theme }) => theme.onBackgroundColor};
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.5);
    display: inline-block;
    margin-bottom: 15px;
  }

  ${DesignH3} {
    margin-bottom: 5px;
  }
`;
