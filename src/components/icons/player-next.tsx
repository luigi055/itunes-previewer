import React, { FunctionComponent, SVGAttributes } from "react";

const PlayerNext: FunctionComponent<
  { isDisabled?: boolean } & SVGAttributes<SVGSVGElement>
> = ({ isDisabled, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="23"
    viewBox="0 0 35 23"
    data-testid="player-next-icon"
    {...props}
  >
    <image
      style={{ opacity: "0.5" }}
      width="35"
      height="23"
      xlinkHref={
        isDisabled
          ? "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAQAAAArOz5pAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiDBAUFC+c4UsXAAABPUlEQVQ4y6WV0U6DQBBFz1KKNSLGpq2hqSZVa6RP/v/XGF0K1qTGqpGUhvWBEpGyu028j5PLmTswuwg1wCclQy+HSzakKL3FJcTD48kA8hkALjGFvlMXOGVOqMV4AIyIONdjyg6CMbcct3qqYXpcc4XbjvnVGXMuMGvInL4ZAzBhpslUqcuUKUdmDARE1kz9psdpMYkDMnX+ehyNLeCekSVTQESIMGHKpZvRA8PaCcbccQJCPdAxdCx4RHFjyZU4FoPDBM90DAAIXYuhQKLK+U1pzJg1z2Rt61bTJ5IvPaYgZrl7kTopkvLk6zBrJN+WUWqeNowi5sWC2JLWPfuYQ3KskOT1QhMjrTlyJKtmsY55J7bmeGXBdr/s7o6DIiHRPFp9qYwFb+0WlxyPD+NdvAFgabqLhRrik/z3z/ADmOxWwEV7sQwAAAAASUVORK5CYII="
          : "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAQAAAArOz5pAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiDBAUFBFdgFa8AAABfklEQVQ4y6XVP08UQRyH8c/eXU6NwTMa/xRKJGpjIg0UanEFBWdhRUEjFFbgO/BtWajhOBQ5BAorChv/xIRGRRPjhebC7Vp4d56wM1v4a2Z38uzz+87OZjbJpoxr+y5cVQ2/bOqFkYq6mjOe2w8yV03hlJe6IaRkDBMeqwc1Z8EdS26FNd3+OOOhS7nMYX88b94Dp/M1f+umZXfFa9qyybiGRMOii1HRmDlzzsU0cN2SewWZJo8ypRyobNZCQaYTZi24PLitBLAbrmnZ6S81xEx4bVOan2bQ4L5FF4h8dmUzHrlCkj1xMhK+66nUfDARZNol8apqqEmjTKJeKdB0rUjFm2Xacc0nL+y7HV3Snqa9sOZwuFPlINMb7FRI80HTt2HoENPy5c9lnqZnzVbBOzvwZpQ5rvloZZgjVLtWdUYn/tVkmrYLFB2rdo9Ojmrea/laIHnrlYPj0xVVkFq3EXh00OqHNe9CSEfNZ88iZ/FPsBM7i5Ns2riN//0z/Abyz2APfXkYDAAAAABJRU5ErkJggg=="
      }
    />
  </svg>
);

export default PlayerNext;
