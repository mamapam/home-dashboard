<script setup lang="ts">
import type { IPrayerTime } from '../types/IPrayerTime';
import TheCard from './TheCard.vue';
import { useCurrentTime } from '~/composables/useCurrentTime';
import { convertMonthNumberToString } from '~/utils/calendar-utils';

const currentTime = useCurrentTime();
const queryParams = ref(
  `day=${currentTime.value.getDate()}&month=${convertMonthNumberToString(currentTime.value.getMonth())}`
);
const prayerTime = ref<IPrayerTime>();

const { data } = await useFetch<IPrayerTime>(`/api/prayertimes?${queryParams.value}`);
prayerTime.value = data.value!;

watch(currentTime, async () => {
  if (currentTime.value.getHours() === 0 && currentTime.value.getMinutes() === 0 && currentTime.value.getSeconds() === 30) {
    prayerTime.value = await $fetch(`/api/prayertimes?${queryParams.value}`);
  }
});
</script>

<template>
  <TheCard>
    <div class="flex flex-col">
      <h3
        class="text-2xl text-primary-500 font-bold origin-top-left text-center pb-4 text-nowrap"
      >
        Prayer Times
      </h3>
      <table>
        <tbody>
          <tr>
            <td></td>
            <th scope="col">Athan</th>
            <th scope="col">Iqama</th>
          </tr>
          <tr>
            <th scope="row">Fajr</th>
            <td>{{ prayerTime?.fajrBegins }}</td>
            <td>{{ prayerTime?.fajrIqama }}</td>
          </tr>
          <tr>
            <th scope="row">Dhuhr</th>
            <td>{{ prayerTime?.dhuhrBegins }}</td>
            <td>{{ prayerTime?.dhuhrIqama }}</td>
          </tr>
          <tr>
            <th scope="row">Asr</th>
            <td>{{ prayerTime?.asrBegins }}</td>
            <td>{{ prayerTime?.asrIqama }}</td>
          </tr>
          <tr>
            <th scope="row">Maghrib</th>
            <td>{{ prayerTime?.sunset }}</td>
            <td>{{ prayerTime?.maghribIqama }}</td>
          </tr>
          <tr>
            <th scope="row">Isha</th>
            <td>{{ prayerTime?.ishaBegins }}</td>
            <td>{{ prayerTime?.ishaIqama }}</td>
          </tr>
          <tr>
            <th scope="row">Jummah 1</th>
            <td>{{ prayerTime?.dhuhrBegins }}</td>
            <td>{{ prayerTime?.jummah1Iqama }}</td>
          </tr>
          <tr>
            <th scope="row">Jummah 2</th>
            <td>{{ prayerTime?.dhuhrBegins }}</td>
            <td>{{ prayerTime?.jummah2Iqama }}</td>
          </tr>
          <tr>
            <th scope="row">Jummah 3</th>
            <td>{{ prayerTime?.dhuhrBegins }}</td>
            <td>{{ prayerTime?.jummah3Iqama }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </TheCard>
</template>

<style scoped>
th[scope='row'] {
  @apply pr-10;
  @apply text-right;
}

th[scope='col'] {
  @apply text-mixed-600;
}

td {
  @apply text-primary-500;
  @apply w-40;
  @apply text-center;
}
</style>
