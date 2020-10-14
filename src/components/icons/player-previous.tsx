import React, { FunctionComponent, SVGAttributes } from "react";

const PlayerPrevious: FunctionComponent<
  { isDisabled?: boolean } & SVGAttributes<SVGSVGElement>
> = ({ isDisabled, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="23"
    viewBox="0 0 35 23"
    data-testid="player-previous-icon"
    {...props}
  >
    <image
      style={{ opacity: "0.5" }}
      width="35"
      height="23"
      xlinkHref={
        isDisabled
          ? "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAQAAAArOz5pAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiDBAUEyREcgRYAAABLklEQVQ4y6WV3U6DQBBGz66UQsSfamxhIcb3fyGNGGvU1CvTRGusVcCLCi2UnW3iXAH59pvDDDOoCiEUMT5PlIImJObdEwSalDEw582qCbgkIrLbjDAEAPhWjSFGAYN+Gw/DRXPX/94hKSd/12WfzTkpA+SISdt52zEk49RhEZJx3MXfjgkJB04Og9qtgpBjH45tG0VMspujE2Mym8YDDsmIhOOVm9XDkDgoSkZcoSWJ5zSp8JnIJqB5cdgoVjyLUwVoZtywcGjmXAtzBWjgg1tm2EddAUtyadJVc9reiwdeHZpiU7pPcmcN1poebtV5NsRwZqWxMRXdRn4xZcr3HkwizTra+6ZLUzNt9k3R/1n98Mg9yzqVhemu6a9Wwkqvd3Hu2MVHrNS//wwBCYtfzQVKHPGEv0sAAAAASUVORK5CYII="
          : "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAQAAAArOz5pAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiDBAUEjKpvYBIAAABeUlEQVQ4y6WVu0oDQRSGv9ldFZSoRE1SKBFUEAVBsAgx5m4C2vhIvoegYFLH1qRI4RuIaCEqaAolghBECDEXi1x3szNTeKozw8+3/zkzc1Z0UIRJhFmKNBQaP/u8WgrBJElCwAPPUs0SRwQJyjFbpFgAYF6qiRPFADzumBkS7A1WTUkxaTZ6ecMNs0sSD+qIkEIMl06MlwybGoSPLGv2LTsmTIwprY8EpnNziAmQZl2DkGq6GIMIsfFv9KLfgxCHMo0FLJNlReGhBfjJOPthxyQ5GO35WHRoss0JE6pqLaKafrSZI6yGgMENHY2ipnlVgEGZcyoKhcDinjNe1BiocEGZllRjAp9cci15FoAYVCS/N1fc9jIfGVdN3RikH+QpaXpQJU/Jzbdw9NdLnB2pm74n55sacdONLwoU+NZ4ylG0n69wPW37vHG66cbovKmbp26YXx6pEmAagCfeXTQ/3NEmiAAMobh7/VmcU87iY1apiX//GRaJ8vYH1jVRbdIS27YAAAAASUVORK5CYII="
      }
    />
  </svg>
);

export default PlayerPrevious;
