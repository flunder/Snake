import AsyncStorage from "@react-native-async-storage/async-storage";
import { ASYNC_STORAGE_KEYS } from "@snake/constants";
import { useEffect, useState } from "react";

type Returns = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const useKeyboardState = (): Returns => {
  const [isKeyboardEnabled, setIsKeyboardEnabled] = useState(false);

  useEffect(() => {
    loadStatusFromStorage();
  }, []);

  const loadStatusFromStorage = async () => {
    try {
      const json = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.ENABLE_KEYS);
      if (json) {
        const value = JSON.parse(json);
        setIsKeyboardEnabled(value);
      }
    } catch (e) {}
  };

  return [isKeyboardEnabled, setIsKeyboardEnabled];
};

export { useKeyboardState };
