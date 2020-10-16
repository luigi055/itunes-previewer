import React, { FunctionComponent } from "react";
import styled, { useTheme } from "styled-components";
import { CenteredMainElement } from "components";
import { MagnifyingGlass } from "components/icons";
import { DesignH1 } from "components/typography";

const EmptyPlaylistHeading = styled(DesignH1)`
  color: ${({ theme }) => theme.onBackgroundVariantColor};
  font-weight: 200;
  margin-top: 10px;
`;

const EmptyTextWrapper = styled.div`
  text-align: center;
`;

const EmptyList: FunctionComponent = () => {
  const theme = useTheme() as Theme;

  return (
    <CenteredMainElement>
      <EmptyTextWrapper>
        <MagnifyingGlass
          width="50px"
          height="50px"
          color={theme.disabled}
          data-testid="empty-page-icon"
        />
        <EmptyPlaylistHeading
          as="h2"
          isFontWeightNormal
          data-testid="empty-playlist-heading"
        >
          Use the search bar to find songs
        </EmptyPlaylistHeading>
      </EmptyTextWrapper>
    </CenteredMainElement>
  );
};

export default EmptyList;
