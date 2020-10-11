import React, { FunctionComponent } from "react";
import { CenteredElementXY } from "components";
import { MagnifyingGlass } from "components/icons";
import { useTheme } from "styled-components";
import { EmptyPlaylistHeading, EmptyTextWrapper } from "./search-styled";

export const EmptyList: FunctionComponent = () => {
  const theme = useTheme() as Theme;

  return (
    <CenteredElementXY>
      <EmptyTextWrapper>
        <MagnifyingGlass
          width="50px"
          height="50px"
          color={theme.disabled}
        />
        <EmptyPlaylistHeading as="h2" isFontWeightNormal data-testid="empty-playlist-heading">
          Use the search bar to find songs
        </EmptyPlaylistHeading>
      </EmptyTextWrapper>
    </CenteredElementXY>
  );
};

export default EmptyList;
