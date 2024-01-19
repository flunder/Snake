import AsyncStorage from "@react-native-async-storage/async-storage";
import { ASYNC_STORAGE_KEYS } from "@snake/constants";

const getHighscore = async (): Promise<number> => {
  const json = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.HIGH_SCORE);
  return json ? JSON.parse(json) : 0;
};

export { getHighscore };
