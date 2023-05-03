import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {Button} from 'react-native';

function App() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });

  return (
    <>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'red',
          },
          animatedStyles,
        ]}
      />
      <Button
        onPress={() => (offset.value = withSpring(Math.random()))}
        title="Move"
      />
    </>
  );
}

export default App;
