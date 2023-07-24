import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedTextSlide = ({ text }) => {
  const animationProps = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 500 },
    config: { duration: 1500 }, 
  });

  return (
    <animated.div style={animationProps}>
      <h1>{text}</h1>
    </animated.div>
  );
};

export default AnimatedTextSlide;
