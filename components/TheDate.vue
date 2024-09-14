<script setup lang="ts">
import TheCard from './TheCard.vue';
import { useCurrentTime } from '~/composables/useCurrentTime';
import {
  convertDayNumberToString,
  convertMonthNumberToString
} from '~/utils/calendar-utils';

const currentTime = useCurrentTime();

const formattedDate = computed(() => {
  const day = currentTime.value.getDay();
  const month = currentTime.value.getUTCMonth();
  const date = currentTime.value.getDate();
  const year = currentTime.value.getFullYear();

  return `${convertDayNumberToString(day)}, ${convertMonthNumberToString(month)} ${date}, ${year}`;
});
</script>

<template>
  <TheCard>
    <div class="flex flex-col justify-center items-center">
      <p class="font-bold text-xl text-center">{{ formattedDate }}</p>
      <p class="font-bold text-3.5xl text-center text-primary-500">
        {{ currentTime.toLocaleTimeString('en-US') }}
      </p>
    </div>
  </TheCard>
</template>
