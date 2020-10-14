import React, { FunctionComponent, SVGAttributes } from "react";

const PausePlay: FunctionComponent<SVGAttributes<SVGSVGElement>> = ({
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
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAjCAMAAACw/5reAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAATlBMVEX/UBj/////UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBgAAAAXqF+qAAAAGHRSTlMAAAqL5NdsekPFjuWt5q7nr8+XeUKD1mQ00FyNAAAAAWJLR0QZ7G61iAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+IMEBQVKBue7/UAAABzSURBVCjP7ZM5DsAgDASNIeEIuQ/4/0tzLhSR6CPF1WpGRhReYqniMVVN9wgh6uokSjLp+IyBNCCaLKKDdCCWGkQP6UEaahE7yA6kLW/+8pdflMWL71+bQ94cEVPLJhBLM2Lq5wKiidfrS1vIzQ7b9ejKO+a/Og2Qoec2AAAAAElFTkSuQmCC"
    />
  </svg>
);
export default PausePlay;
