import * as React from "react";
import Svg, { Circle, SvgProps } from "react-native-svg";

const SnakeEyesAlive = (props: SvgProps) => (
  <Svg width={12} height={20} fill="none" {...props}>
    <Circle cx={6} cy={6} r={5.5} fill="#fff" stroke="#000" />
    <Circle cx={8} cy={6} r={2} fill="#000" />
    <Circle cx={6} cy={14} r={5.5} fill="#fff" stroke="#000" />
    <Circle cx={8} cy={14} r={2} fill="#000" />
  </Svg>
);

export { SnakeEyesAlive };
