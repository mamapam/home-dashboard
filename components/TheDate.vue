<script setup lang="ts">
import TheCard from './TheCard.vue';
import { useCurrentTime } from '~/composables/useCurrentTime';

const currentTime = useCurrentTime();

const formattedDate = computed(() => {
  const day = currentTime.value.getDay();
  const month = currentTime.value.getUTCMonth();
  const date = currentTime.value.getDate();
  const year = currentTime.value.getFullYear();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  return `${days[day]}, ${months[month]} ${date}, ${year}`;
});
</script>

<template>
  <TheCard class="h-[85px]">
    <div class="flex flex-col justify-center items-center">
      <p class="font-bold text-xl text-center">{{ formattedDate }}</p>
      <p class="font-bold text-3.5xl text-center text-primary-500">
        {{ currentTime.toLocaleTimeString('en-US') }}
      </p>
    </div>
  </TheCard>
</template>
