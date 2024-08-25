import axios from 'axios';
import type { ICurrentWeather } from '~/types/ICurrentWeather';

export default defineEventHandler(async (event) => {
  const { weatherApiKey, latitude, longitude } = useRuntimeConfig();

  const { data } = await axios.get<ICurrentWeather>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`
  );

  return data;
});
