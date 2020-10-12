import React, { FunctionComponent, SVGAttributes } from "react";
import { withTheme } from "styled-components";

const MagnifyingGlass: FunctionComponent<
  IconProps & SVGAttributes<SVGSVGElement>
> = ({ theme, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 23.97 23.969"
    data-testid="magnifying-glass-icon"
    {...props}
  >
    <path
      id="Search"
      fill={color || theme.onBackgroundColor}
      fillRule="evenodd"
      d="M1222.3,261.3a2.249,2.249,0,0,1-3.18,0l-3.97-3.971a10.553,10.553,0,1,1,3.18-3.182l3.97,3.971A2.248,2.248,0,0,1,1222.3,261.3ZM1209.5,241a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,1209.5,241Z"
      transform="translate(-1199 -238)"
    />
  </svg>
);

export default withTheme(MagnifyingGlass);
