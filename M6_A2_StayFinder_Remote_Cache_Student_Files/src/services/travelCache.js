import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_PREFIX = 'stayfinder-conditions-';

export async function saveTravelCache(cityId, weather) {
  // TODO 6: Create cache payload and persist to AsyncStorage
  const cacheData = {
    savedAt: Date.now(),
    weather: weather,
  };

  const key = `${CACHE_PREFIX}${cityId}`;
  await AsyncStorage.setItem(key, JSON.stringify(cacheData));
}

export async function loadTravelCache(cityId) {
  // TODO 7: Read key, parse JSON if present, otherwise return null
  const key = `${CACHE_PREFIX}${cityId}`;
  const jsonValue = await AsyncStorage.getItem(key);

  if (!jsonValue) {
    return null;
  }

  return JSON.parse(jsonValue);
}