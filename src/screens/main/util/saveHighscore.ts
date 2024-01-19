import AsyncStorage from "@react-native-async-storage/async-storage";
import { ASYNC_STORAGE_KEYS } from "@snake/constants";

const saveHighscore = async (score: number) => {
  try {
    await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.HIGH_SCORE, `${score}`);
  } catch (e) {}
};

export { saveHighscore };
