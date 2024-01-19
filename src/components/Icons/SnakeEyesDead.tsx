import * as React from "react";
import Svg, { Rect, Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

const SnakeEyesDead = (props: SvgProps) => (
  <Svg width={15} height={20} fill="none" {...props}>
    <Rect x={3} y={8} width={12} height={5} rx={2.5} fill="#FF6161" />
    <Circle cx={6} cy={6} r={5.5} fill="#fff" stroke="#000" />
    <Circle cx={6} cy={14} r={5.5} fill="#fff" stroke="#000" />
    <Path
      d="M10 2.646l-4 4M6 2.646l4 4M10 13l-4 4M6 13l4 4"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

export { SnakeEyesDead };
