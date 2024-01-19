import React, { memo, useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

import { Colors } from "@snake/theme";
import { pickOne } from "@snake/utils/pickOne";
import { GAME_OVER_PHRASES } from "@snake/constants";
import { SnakeEyesDead } from "@snake/components/Icons";

const GameOver = memo(() => {
  const bloodLevel = useRef(new Animated.Value(0));
  const containerOpacity = useRef(new Animated.Value(0));
  const containerOffset = useRef(new Animated.Value(0));

  useEffect(() => {
    animateIn();
    animateBlood();
  }, []);

  const animateIn = () => {
    Animated.parallel([
      Animated.spring(containerOpacity.current, {
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.spring(containerOffset.current, {
        toValue: 50,
        useNativeDriver: true
      })
    ]).start();
  };

  const animateBlood = () => {
    Animated.timing(bloodLevel.current, {
      toValue: -250,
      duration: 1500,
      useNativeDriver: true
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: containerOpacity.current,
          transform: [{ translateY: containerOffset.current }]
        }
      ]}
    >
      <Animated.View
        style={[
          styles.blood,
          { transform: [{ translateY: bloodLevel.current }] }
        ]}
      />
      <View style={{ padding: 25, alignItems: "center" }}>
        <SnakeEyesDead scale={4} style={styles.eyes} />
        <Text style={styles.h1}>{pickOne(GAME_OVER_PHRASES)}</Text>
        <Text>
          Press <Text style={styles.emp}>space</Text> to try again.
        </Text>
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.yellow,
    position: "absolute",
    top: 200,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 3,
    overflow: "hidden",
    width: "60%",
    textAlign: "center"
  },
  blood: {
    backgroundColor: Colors.red,
    position: "absolute",
    height: "200%",
    width: "100%",
    top: "100%"
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    backgroundColor: Colors.yellow,
    padding: 5,
    textAlign: "center"
  },
  eyes: {
    transform: [{ rotate: "90deg" }]
  },
  emp: {
    fontWeight: "600"
  }
});

export { GameOver };
