import AsyncStorage from '@react-native-async-storage/async-storage';

export const SAVED_HOTELS_KEY = 'stayfinder-saved-hotels';
export const SELECTED_CITY_KEY = 'stayfinder-selected-city';

export async function saveHotels(hotels) {
  // TODO 1:
  // Save hotels using SAVED_HOTELS_KEY and JSON.stringify().
  await AsyncStorage.setItem(SAVED_HOTELS_KEY, JSON.stringify(hotels));
}

export async function loadHotels() {
  // TODO 2:
  // Load SAVED_HOTELS_KEY.
  // Return [] if nothing has been saved.
  // Otherwise return JSON.parse(storedValue).
  const storedValue = await AsyncStorage.getItem(SAVED_HOTELS_KEY);
  if (storedValue === null) {
    return [];
  }
  return JSON.parse(storedValue);
}

export async function clearSavedHotels() {
  // TODO 3:
  // Remove only SAVED_HOTELS_KEY.
  await AsyncStorage.removeItem(SAVED_HOTELS_KEY);
}

export async function saveSelectedCity(cityId) {
  // TODO 4:
  // Save cityId using SELECTED_CITY_KEY.
  await AsyncStorage.setItem(SELECTED_CITY_KEY, cityId);
}

export async function loadSelectedCity() {
  // TODO 5:
  // Load SELECTED_CITY_KEY.
  // Return 'houston' if nothing has been saved.
  const storedValue = await AsyncStorage.getItem(SELECTED_CITY_KEY);
  if (storedValue === null) {
    return 'houston';
  }
  return storedValue;
}