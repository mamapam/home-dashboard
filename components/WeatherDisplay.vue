<script setup lang="ts">
import type { ICurrentWeather } from '../types/ICurrentWeather';
import { convertUnixToTime } from '../utils/calendar-utils.js';

const { data } = await useFetch<ICurrentWeather>('/api/weather');
</script>

<template>
  <TheCard class="h-[375px]">
    <div class="flex">
      <div class="flex flex-col">
        <p>{{ data?.name }}</p>
        <p>{{ data?.main.temp }}</p>
        <p>Feels like: {{ data?.main.feels_like }}</p>
      </div>
      <div class="flex flex-col">
        <img
          :src="`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`"
          alt="Weather"
          height="200px"
          width="200px"
        />
        <p>{{ data?.weather[0].description }}</p>
      </div>
      <div class="flex flex-col">
        <p>Sunrise: {{ convertUnixToTime(data!.sys.sunrise) }}</p>
        <p>Sunset: {{ convertUnixToTime(data!.sys.sunset) }}</p>
      </div>
    </div>
  </TheCard>
</template>
