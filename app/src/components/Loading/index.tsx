import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export const Loading = () => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, [animation]);

  const getTranslateY = (index: number) => {
    const phaseShift = index * 0.2; // phase offset per dot
    return animation.interpolate({
      inputRange: [0, phaseShift, phaseShift + 0.2, phaseShift + 0.4, 1],
      outputRange: [0, 0, -10, 0, 0],
      extrapolate: 'clamp',
    });
  };

  return (
    <View style={styles.container}>
      {[0, 1, 2].map(i => (
        <Animated.View
          key={i}
          style={[
            styles.dot,
            { transform: [{ translateY: getTranslateY(i) }] },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginHorizontal: 5,
  },
});
