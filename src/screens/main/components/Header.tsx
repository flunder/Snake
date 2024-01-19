import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "@snake/theme";
import { TouchableOpacity, View } from "react-native";
import { Keyboard } from "@snake/components/Icons";

// const enabledColor = (prop: boolean) => (prop ? Colors.red : Colors.black);

const enabledStyle = (prop: boolean) => {
  return {
    backgroundColor: prop ? Colors.red : Colors.black
  };
};

const Header = memo(
  ({
    score,
    handleRestart,
    handlePause,
    isPaused,
    isKeyboardEnabled,
    handleToggleKeyboard
  }: {
    score: number;
    handleRestart: () => void;
    handlePause: () => void;
    isPaused: boolean;
    isKeyboardEnabled: boolean;
    handleToggleKeyboard: () => void;
  }): JSX.Element => {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleRestart}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.text}>↻</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handlePause}
          style={[styles.button, enabledStyle(isPaused)]}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.text}>❚❚</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleToggleKeyboard}
          style={[styles.button, enabledStyle(isKeyboardEnabled)]}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Keyboard />
        </TouchableOpacity>
        <View>
          <Text style={styles.score}>🍒 {score}</Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    borderWidth: 10,
    borderBottomWidth: 0,
    borderColor: Colors.black,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: Colors.black,
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "700"
  },
  score: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: "700"
  }
});

export { Header };
