<script setup lang="ts">
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
      <p1 class="font-bold text-xl text-center">{{ formattedDate }}</p1>
      <p1 class="font-bold text-3.5xl text-center text-primary-500">
        {{ currentTime.toLocaleTimeString() }}
      </p1>
    </div>
  </TheCard>
</template>
