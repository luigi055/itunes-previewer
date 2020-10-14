import React, { FunctionComponent, SVGAttributes } from "react";

const Facebook: FunctionComponent<SVGAttributes<SVGSVGElement>> = ({
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="30"
    viewBox="0 0 14 30"
    data-testid="facebook-icon"
    {...props}
  >
    <image
      style={{ opacity: "0.35" }}
      width="14"
      height="30"
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAiCAQAAAD4vUFxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiDBAUDyXVAmmTAAAArUlEQVQ4y+2RvQrCMBRGT0qgREREUCiC6OQqjs6+uw+guyI+gbUWQYmTTW6aQociDn7Td2/O/UmiqMlmzBljSIAXTx4qAAwbJmGZFkjKln69dyKiVQwRkO2xICp/XIbc8EqODaGRQHbqFNsp9XzuEAn5w8rm2zWoO0jZdeWn3lOWnCt/1yyjxcbLX9qMK9pAt86gQnOoghkDd8DRddJq//F26EMu//Vv+UM/Cb0B5e8g7ekorZYAAAAASUVORK5CYII="
    />
  </svg>
);

export default Facebook;
