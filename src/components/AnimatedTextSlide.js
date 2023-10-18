import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedTextSlide = ({ text }) => {
  const animationProps = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 20 },
    config: { duration: 1500 }, 
  });

  return (
    <animated.div className="animated" style={animationProps}>
      <h1><span>{text}</span></h1>
    </animated.div>
  );
};

export default AnimatedTextSlide;
