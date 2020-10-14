import React, { FunctionComponent, SVGAttributes } from "react";

const Twitter: FunctionComponent<SVGAttributes<SVGSVGElement>> = ({
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="24"
    viewBox="0 0 30 24"
    data-testid="whatsapp-icon"
    {...props}
  >
    <image
      style={{ opacity: "0.35" }}
      width="30"
      height="24"
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAQAAADu6HTYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiDBAUDzpYCmRmAAAB/klEQVRIx52V30/TUBTHP6frBMPvEtwWMCaTLWTqfDExvvviI/+sb/pgIsQEJCIjZszMxEUisKWDAbrZHR8GXcvW223npbfnnn56vt/beyuMHLpAnjQzKC1qlOXan3FoCICuURMzBIoUCBZ5fJaKWqTJ05YtAb3HJmXZM4JekBuSPmWRJB5vpWUDaSw2tMuXqK704VAMrADKFleatoA5AAq81ESErOeGZn/xiE3u24B1k8ri6Ec5HyhdunnV8FgFvknVAv74yUXeaHGgr2XMccge2MBpIGnxhHUtU5E+ftqIKck+gA3iagMnMDXFM57qCT85wxWlYwS1ehcbgF1eE14yIUUK6OoVagS1b6WgDk12IsosZo1Ww79+R2tscMJFzAMjSGuSIDMRBDwufWkc402IgbqoD5I2RxODft8Oel/1Pu6EoFoIJB7vOZsA44obAoH85R27XIwJClhi+6NXJOmgyMiYa6r9G8sf1cngjIGBA/GGgco0xpJV53vw1gdJlw9jrJ3HJwntwZAUTVBkPeBbdGzLj3BiwBNN8oBczJb5Kgd3U9ZAkZCJwZQGMXelzZElR9IAUXakMmxCdBUbiynmWWE+xplztiVibUWTFMiPYHCbEkcSeU70ftnTPCbLbCSkSYWqGM/ugEe6RIplFpjBBrp0uKRJnWNpxfbLf25rlTNNiD+SAAAAAElFTkSuQmCC"
    />
  </svg>
);

export default Twitter;
