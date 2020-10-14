import React, { FunctionComponent, SVGAttributes } from "react";

const PlayerPlay: FunctionComponent<SVGAttributes<SVGSVGElement>> = ({
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26"
    height="31"
    viewBox="0 0 26 31"
    data-testid="player-previous-icon"
    {...props}
  >
    <image
      width="26"
      height="31"
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAfCAMAAADOWS1PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAtFBMVEX/UBj/////UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBgAAACqoeD7AAAAOnRSTlMAAFnVw0cCy/GBEunPTgHlpzHtgAbMT/aiJOttEMZClCbhv0HykhxbA6Bck8BulUPs96NQ7tCCWtbE9Df/EgAAAAFiS0dEOzkO9GwAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiDBAUFhAYsQSoAAAAo0lEQVQoz5XTxxKCQBREUcxiDqAoAgbMOWv//4dJsdDN3IW9PVXzpt70WNlcvlC0fsl8Y5Wksl0xUlVJavWGgZpK02ojqdN1iCS3h6S+NyCShv6ISApCJCkaI2niI0nTGZLi+YIoOXW5IpLWTGLycNYGZsVbuuEupG3saRsH2mFwhM2f6L3OF3pl9wrduNnOHz1M23s3ttdNOv8wd/75esNP+QBA8mM1QLKhBAAAAABJRU5ErkJggg=="
    />
  </svg>
);
export default PlayerPlay;
