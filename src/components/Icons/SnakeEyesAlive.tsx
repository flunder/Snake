import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

const SnakeEyesAlive = ({ style }: { style?: ViewStyle }) => (
  <Svg width={12} height={20} fill="none" {...style}>
    <Circle cx={6} cy={6} r={5.5} fill="#fff" stroke="#000" />
    <Circle cx={8} cy={6} r={2} fill="#000" />
    <Circle cx={6} cy={14} r={5.5} fill="#fff" stroke="#000" />
    <Circle cx={8} cy={14} r={2} fill="#000" />
  </Svg>
);

export { SnakeEyesAlive };
