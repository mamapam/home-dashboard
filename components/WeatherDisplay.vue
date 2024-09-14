<script setup lang="ts">
import type { ICurrentWeather } from '../types/ICurrentWeather';

const { data } = await useFetch<ICurrentWeather>('/api/weather');
const temperature = computed(() => data.value?.main.temp !== null ? Math.floor(data.value!.main.temp) : null);
const feelsLike = computed(() => data.value?.main.feels_like !== null ? Math.floor(data.value!.main.feels_like) : null);
</script>

<template>
  <TheCard>
    <div class="w-full h-full">
      <div class="flex justify-around pb-3">
        <div class="flex flex-col">
          <p class="text-primary-500 font-bold text-xl">{{ data?.name }},  {{ data?.sys.country }}</p>
          <p class="text-lg">{{ data?.weather[0].description }}</p>
        </div>
        <div class="-m-6">
          <img
            :src="`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`"
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
                <td>{{ data?.wind.speed }} m/s</td>
              </tr>
              <tr>
                <th>Humidity</th>
                <td>{{ data?.main.humidity }}%</td>
              </tr>
              <tr>
                <th>Pressure</th>
                <td>{{ data?.main.pressure }} hPa</td>
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
  font-style: normal;
}
td {
  font-style: bold;
}
</style>
