<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core';
import type { ICurrentWeather } from '../types/ICurrentWeather';

const { data } = await useFetch<ICurrentWeather>('/api/weather');
const weatherData = ref(data);
const temperature = computed(() => weatherData.value?.main.temp !== null ? Math.floor(weatherData.value!.main.temp) : null);
const feelsLike = computed(() => weatherData.value?.main.feels_like !== null ? Math.floor(weatherData.value!.main.feels_like) : null);

useIntervalFn(async () => {
  weatherData.value = await $fetch<ICurrentWeather>('/api/weather');
}, 3600000);
</script>

<template>
  <TheCard>
    <div class="w-full h-full">
      <div class="flex justify-around pb-3">
        <div class="flex flex-col">
          <p class="text-primary-500 font-bold text-xl">{{ weatherData?.name }},  {{ weatherData?.sys.country }}</p>
          <p class="text-lg">{{ weatherData?.weather[0].description }}</p>
        </div>
        <div class="-m-6">
          <img
            :src="`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`"
            alt="Weather"
          />
        </div>
      </div>
      <div class="flex items-center justify-around">
        <p class="font-bold text-5xl text-primary-500">{{ temperature }}&deg;C</p>
        <div>
          <p class="text-mixed-600 border-b-primary-500 border-b-2 mb-2">Details</p>
          <table class="table-auto">
            <tbody>
              <tr>
                <th>Feels like</th>
                <td>{{ feelsLike }}</td>
              </tr>
              <tr>
                <th>Wind</th>
                <td>{{ weatherData?.wind.speed }} m/s</td>
              </tr>
              <tr>
                <th>Humidity</th>
                <td>{{ weatherData?.main.humidity }}%</td>
              </tr>
              <tr>
                <th>Pressure</th>
                <td>{{ weatherData?.main.pressure }} hPa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </TheCard>
</template>

<style scoped>
th {
  text-align: left;
  padding-right: 2rem;
}
</style>
