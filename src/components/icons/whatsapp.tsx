import React, { FunctionComponent, SVGAttributes } from "react";

const WhatsApp: FunctionComponent<SVGAttributes<SVGSVGElement>> = ({
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="28"
    viewBox="0 0 27 28"
    data-testid="whatsapp-icon"
    {...props}
  >
    <image
      style={{ opacity: "0.35" }}
      width="27"
      height="28"
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAiCAQAAAB7eXhKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiDBAUDwp+01TKAAADCklEQVRIx43W309UVxDA8c9cdxdYUVFRQAR/tEajaY3G/lBs2pom+tY/ti9NNKVpKk2aJrXSxppqVRQUBSpFWJYVTh+4uy6wLJ2nkzNzvnd+nJlzQ0tJuw06rEfZLlQtmjVtKla32kaL44ed09+SXPO3e1Fpi0hllww2bVRUZTqVGjtvjbsfaRtE6jeSGy97bNJs3fHUpc+wI7n9C2NRbYFIx30qUDPuQauo0x4fGgbzvo+lTYg06DOBV25vjnYDZsgniph3M2qQNfhXBCZ81w5APHXLMva5vJ6QDFK4ooDnxmLNDhKvjaph0HvvvDjpABaNrWc69acL6f22kJ/B+VQiI4Vz4JdYgTTgC2d8lA62gUyYRIdT614M2o2XMZUHdSlP8om28fwGTqXIyMt0P1ft152vjqWsjR/znqPL4SyFAdRM5bpyw6q0zTWvyxPQn+lWwqtGJRq3zpo3bRHToDezF/zTUMyq5auf4t92hFhSxZ5MB1hqKNY8yn14aSdZQmemmB94J3+oIXNhR0QNkVkBu5ocXHYHHE8ndkAUoY7o3KB64AX4OB2tb6ViOrAF0YnlzALYvyFRjFlE5mo6m4KU+dz1dK0Zkzp0YSGzoIZDacPwiapRVYTzbqRhlx1Cn+tpJBVzoz4wl0UyjZKBTSVbcNMi6DGS32AYtjtfDYHpTP2WndocaCz41sSW+FfXQ09lR7HieYZJyziytTNjJW67lac2T4Bf85H4gQwPYy0gnXYRM3Gzde1St5MGFM35M+Yg9bmGVd9EpYD69d62I+KNu+42IcuugN+jUp9a64l55n9JKvtSJ2bcgwIpDOFto93bAw66qoyKH9fHZAG9ujAVq6lo0FH7jMdEy+MlZ50RqBitT/ogXXQajxUN1B8F8x6aioXG4dDrmON5U877IRqZi8TXTZNqoyxbtCJ02NtoxOQvd5rfuoLeJkDFpAllZ/NB1Lmp/ZJJ4/F643cKeTWWPDNhJn9HHuk15JCexrer5rzwpNVLF+krs56aafGjIYWSAqrxdvsa/QciKP9REJlBPAAAAABJRU5ErkJggg=="
    />
  </svg>
);

export default WhatsApp;
