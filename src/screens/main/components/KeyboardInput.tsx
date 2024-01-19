import React, { memo, useEffect, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData
} from "react-native";
import { Colors } from "@snake/theme";

interface Props {
  isKeyboardEnabled: boolean;
  handleKeyPressed: (key: TextInputKeyPressEventData) => void;
}

const KeyboardInput = memo(({ isKeyboardEnabled, handleKeyPressed }: Props) => {
  const keyboardRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isKeyboardEnabled) keyboardRef.current?.focus();
  }, [isKeyboardEnabled]);

  return (
    <TextInput
      ref={keyboardRef}
      style={styles.textInput}
      editable={isKeyboardEnabled}
      showSoftInputOnFocus={false}
      onKeyPress={(e) => handleKeyPressed({ key: e.nativeEvent.key })}
      value=""
    />
  );
});

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.white,
    width: 0,
    height: 0,
    zIndex: -1
  }
});

export { KeyboardInput };
