import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / -10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 12.5}px,${y / 5.5}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 12.5}px,${y / 5.5}px,0)`;
const trans6 = (x, y) => `translate3d(${x / 31.5}px,${y / 7.5}px,0)`;
const trans7 = (x, y) => `translate3d(${x / 10.5}px,${y / -9.5}px,0)`;
const trans8 = (x, y) => `translate3d(${x / 5.5}px,${y / -5.5}px,0)`;
const trans9 = (x, y) => `translate3d(${x / 9.5}px,${y / -6.5}px,0)`;
const trans10 = (x, y) => `translate3d(${x / 9.5}px,${y / -6.5}px,0)`;

function Card() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className="container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="card1"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        className="card2"
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        className="card3"
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      <animated.div
        className="card4"
        style={{ transform: props.xy.interpolate(trans4) }}
      />
      <animated.div
        className="card5"
        style={{ transform: props.xy.interpolate(trans5) }}
      />
      <animated.div
        className="card6"
        style={{ transform: props.xy.interpolate(trans6) }}
      />
      <animated.div
        className="card7"
        style={{ transform: props.xy.interpolate(trans7) }}
      />
      <animated.div
        className="card8"
        style={{ transform: props.xy.interpolate(trans8) }}
      />
      <animated.div
        className="card9"
        style={{ transform: props.xy.interpolate(trans9) }}
      />
      <animated.div
        className="card10"
        style={{ transform: props.xy.interpolate(trans10) }}
      />
    </div>
  );
}

export default Card;
