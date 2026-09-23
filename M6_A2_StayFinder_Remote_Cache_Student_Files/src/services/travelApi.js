const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export async function getTravelConditions(latitude, longitude) {
// TODO 1: Build the API URL with query parameters
const url = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph`;

// TODO 2: Call fetch with the generated URL and await the response
const response = await fetch(url);

// TODO 3: Check response status and throw an Error if asdasdnot OK
if (!response.ok) {
  throw new Error(`Failed to fetch travel conditions: ${response.statusText}`);
}

// TODO 4: Parse response body as JSON
const data = await response.json();

// TODO 5: Extract and return the simplified weather object
const current = data.current;

return {
  temperature: current.temperature_2m,
  apparentTemperature: current.apparent_temperature,
  weatherCode: current.weather_code,
  windSpeed: current.wind_speed_10m,
  };
}
