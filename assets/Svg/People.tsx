import * as React from "react";
import Svg, {SvgProps, Path} from "react-native-svg";

const SvgPeople = (props: SvgProps) => (
  <Svg
    width={682.667}
    height={682.667}
    viewBox="0 0 512 512"
    {...props}
  >
    <Path d="M132.5 9c-14.5 2.3-26.2 7.5-40.6 18.1C86.8 30.9 82 34 81.4 34c-.6 0-4.2 1.6-8.1 3.5C57 45.7 46 63.3 46 81.4c0 10.1 2 16.6 9.9 32.5l7 13.9-3.9.7c-5.4.9-12.4 5.6-15.7 10.6-2.5 3.8-2.8 5.1-2.8 13 0 8.1.2 9 3 13 3.9 5.6 10.7 9.8 17.1 10.5l5 .6 1.9 6.7c4.9 17.4 16.7 33.4 32.3 43.6l4.2 2.8v21.4l-36.7 15.2c-20.3 8.4-39.2 16.9-42.1 18.8-6.3 4.3-10.3 9.1-14 17l-2.7 5.8-.3 59.8-.3 59.7 2.5 2.5 2.5 2.5H72v67.1l2.5 2.4 2.4 2.5h358.2l2.4-2.5 2.5-2.4V432h59.1l2.4-2.5 2.5-2.4v-57.3c0-59.9-.2-62.4-4.5-70.8-3-5.8-7.2-10.5-12.7-14.3-2.9-1.9-21.8-10.4-42-18.8L408 250.6V229.3l4.3-2.8c15.5-10.2 27.3-26.2 32.2-43.6l1.9-6.7 5-.6c11.4-1.3 19.8-10.5 20.4-22.5.3-5.7 0-7.3-2.5-12.1-3.3-6.3-9.9-11.4-16.3-12.5-2.2-.4-4-.8-4-1 0-.2 2.1-5.2 4.6-11.2 5.7-13.1 7.2-18.5 8-28.3 1.3-17.3-6.2-36.8-19.1-49.5-7.8-7.7-14-11.3-35.5-20.8-17.2-7.5-24.7-9.2-39.5-9.1-19.8.3-33.3 5.1-51.6 18.5-5.1 3.8-9.9 6.9-10.5 6.9-3.6 0-15.6 7.5-21.1 13.3-10.5 10.9-15 22.9-14 37.7.3 4.7.9 9.5 1.3 10.8.6 2.1.4 2.2-2.2 1.5-4.1-1-24.1-.7-29.2.5l-4.3 1 .8-3.7c1.3-5.9.7-20.1-1.2-27.1-4-15.4-15.6-31.1-28.6-38.8-8.8-5.2-35.7-16.8-43.2-18.6-8.5-2.1-23.2-2.8-31.2-1.6zM161 26.5c9.3 2.4 36.7 15.3 42.5 20C217 57.6 223.8 74.7 221.1 91c-2 12.2-3.2 14.1-13.7 21.7-10.3 7.4-10.5 7.5-21.5 12.7-21 9.9-32.3 34.2-26.4 56.9.8 3.1 4.6 12 8.5 19.7l7 14h-5.1c-8.2 0-12.9 1.9-18.4 7.5-10.2 10.1-10.2 22.9 0 33 5.8 5.9 10.2 7.5 19.9 7.5 5.1 0 6.6.3 6.6 1.4 0 3.4 6.5 19 10.4 25.2 5.1 7.8 14.8 17.9 22.3 23.1l5.3 3.6v20.6l-5.2 1.5c-2.9.8-28.2 7.8-56.3 15.6-28 7.7-53 14.8-55.5 15.6-16 5.6-27 21.5-27 39v6.4H23.9l.3-52.7c.3-52.4.3-52.8 2.5-57 1.2-2.2 3.9-5.4 5.8-7.1 2.2-1.8 19.1-9.4 44.1-19.7 26.2-10.9 41-17.6 42-18.9 1.1-1.6 1.4-6 1.4-20.1 0-20.8.1-20.6-8.8-25.6-3.1-1.8-8.9-6.5-12.8-10.4-8.7-8.8-14.7-20-17-32-2.1-10.8-4-12.5-13.5-12.5-6.1 0-7.3-.3-9.4-2.5-3.3-3.2-3.3-7.8 0-11 2.1-2.2 3.3-2.5 9.5-2.5s7.4-.3 9.5-2.5c2.1-2 2.5-3.4 2.5-8.7 0-5.9-.5-7.4-8.7-24.2l-8.8-18v-9c0-8.5.2-9.6 3.4-15.4C70 58.7 74.5 54.6 82 51.3c10-4.4 11.4-5.2 21-12.3 9.9-7.3 20.6-12.2 30.2-14 7-1.2 20-.5 27.8 1.5zm224 0c9.3 2.4 36.7 15.3 42.5 20 9.9 8.1 15.5 18 17.7 31.2 1.6 9.5-.2 18.3-7.2 34.6-5.3 12.2-6 14.7-6 20.3 0 5.6.4 6.8 2.5 8.9 2.1 2.2 3.3 2.5 9.5 2.5s7.4.3 9.5 2.5c3.3 3.2 3.3 7.8 0 11-2.1 2.2-3.3 2.5-9.4 2.5-9.5 0-11.4 1.7-13.5 12.5-2.3 12-8.3 23.2-17 32-3.9 4-9.7 8.7-12.9 10.5-8.8 4.9-8.7 4.7-8.7 25.6 0 15.9.2 18.4 1.8 20.2 1 1.2 18.7 9.2 41.9 18.8 24.8 10.3 41.5 17.8 43.8 19.6 1.9 1.7 4.6 4.9 5.8 7.1 2.2 4.2 2.2 4.6 2.5 56.9l.3 52.8H440v-6.4c0-15.6-8.9-30.3-22.7-37.5-1.2-.6-28.2-8.3-60-17.1-31.8-8.9-58.6-16.3-59.5-16.6-1.6-.5-1.8-1.9-1.8-10.8v-10.3l5.5-3.7c7.5-5.2 18.4-16.9 23.3-25.1 2.2-3.8 5.3-10.8 6.9-15.6l2.8-8.9h6.4c9.5 0 13.9-1.7 19.6-7.5 10.2-10.1 10.2-22.9 0-33-5.5-5.6-10.2-7.5-18.4-7.5-2.8 0-5.1-.2-5.1-.4s2.1-5.3 4.6-11.3c5.7-13.1 7.2-18.5 8-28.3 1.3-17.3-6-36.4-19.1-49.5-6.7-6.7-8.9-8.1-22.4-14.7l-15-7.3-3.3-7c-3-6.3-3.3-7.9-3.3-16 0-8.3.2-9.5 3.4-15.3 4.1-7.5 8.6-11.6 16.1-14.9 10-4.4 11.4-5.2 21-12.3 9.9-7.3 20.6-12.2 30.2-14 7-1.2 20-.5 27.8 1.5zm-111.8 88c8.8 2.3 36.7 15.5 42.3 20 17.1 14 23 37.8 14.1 57.1l-2.3 4.9-4.6-9.2c-7-13.8-9.2-14.3-22.2-4.7-16.7 12.3-25.1 15.9-39.9 17-16.8 1.3-30.6-3.3-47.4-15.7-15-11.1-16.9-10.8-24.2 4-2.4 5-4.7 9.1-5 9.1-.4 0-2.7-4.2-5.1-9.3-4.2-8.8-4.4-9.6-4.4-18.2 0-8.3.2-9.5 3.4-15.3 4-7.4 8.4-11.5 16.1-15.1 4.6-2.2 6.9-2.6 14-2.6 7.4 0 9.4.4 15 3.1 6.6 3.1 11.5 7.1 16.1 13.3l2.5 3.4 6.2-4.2c3.4-2.3 6.2-4.6 6.2-5 0-1.5-7.5-10.6-11.9-14.3-4.7-4-15-9.8-17.5-9.8-4.2 0-.6-2.8 7.7-6.1 12-4.9 28-5.8 40.9-2.4zm-61.2 88c14.4 9.5 26.1 12.9 44 12.9s29.6-3.4 44-12.9c4.6-3 8.6-5.5 9-5.5.3 0 3 4.9 5.9 10.8l5.3 10.8-.4 20.9c-.4 19.6-.6 21.5-3 28.3-3.7 10.4-8.3 17.6-15.8 25.2-7.6 7.5-14.8 12.1-25.2 15.8-6.3 2.2-8.9 2.6-19.3 2.7-9.7 0-13.3-.4-19-2.2-16.3-5.2-30.9-17.5-38.3-32.3-5.9-11.8-7.2-18.9-7.2-40.7V218l5.2-10.5c2.9-5.8 5.5-10.5 5.8-10.5.4 0 4.4 2.5 9 5.5zM176 240v8h-5.5c-6.7 0-10.5-2.9-10.5-8s3.8-8 10.5-8h5.5v8zm173.5-5.5c1.6 1.5 2.5 3.6 2.5 5.5 0 5.1-3.8 8-10.5 8H336v-16h5.5c4.6 0 6 .4 8 2.5zM256 327.3c9 0 15.3-.5 18.8-1.5l5.2-1.5v16.2l-12 12-12 12-12-12-12-12v-16.2l5.3 1.5c3.4 1 9.7 1.5 18.7 1.5zm-19 41.2c14 13.8 16 15.5 19 15.5s5-1.7 19-15.5l15.6-15.5 59.4 16.5c63.1 17.5 64.8 18.2 69.7 25.4 1.3 1.9 2.7 5 3.3 7 .6 2.1 1 20.3 1 44.8V488h-48v-64h-16v64H152v-64h-16v64H88v-41.3c0-24.5.4-42.7 1-44.8.6-2 2-5.1 3.3-7 4.8-7.2 6.7-7.9 69.2-25.3 32.5-9.1 59.2-16.5 59.5-16.5.2-.1 7.4 6.9 16 15.4z" />
  </Svg>
);

export default SvgPeople;
