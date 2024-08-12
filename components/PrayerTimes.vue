<script setup lang="ts">
import type { IPrayerTime } from '../types/IPrayerTime';
import TheCard from './TheCard.vue';

const { data } = await useFetch<IPrayerTime>(
  '/api/prayertimes?day=12&month=August'
);
</script>

<template>
  <TheCard>
    <div>
      <h3>Prayer Times</h3>
      <table>
        <tbody>
          <tr>
            <td></td>
            <th scope="col">Athan</th>
            <th scope="col">Iqama</th>
          </tr>
          <tr>
            <th scope="row">Fajr</th>
            <td>{{ data?.fajrBegins }}</td>
            <td>{{ data?.fajrIqama }}</td>
          </tr>
          <tr>
            <th scope="row">Dhuhr</th>
            <td>{{ data?.dhuhrBegins }}</td>
            <td>{{ data?.dhuhrIqama }}</td>
          </tr>
          <tr>
            <th scope="row">Asr</th>
            <td>{{ data?.asrBegins }}</td>
            <td>{{ data?.asrIqama }}</td>
          </tr>
          <tr>
            <th scope="row">Maghrib</th>
            <td>{{ data?.sunset }}</td>
            <td>{{ data?.maghribIqama }}</td>
          </tr>
          <tr>
            <th scope="row">Isha</th>
            <td>{{ data?.ishaBegins }}</td>
            <td>{{ data?.ishaIqama }}</td>
          </tr>
          <tr>
            <th scope="row">Jummah 1</th>
            <td>{{ data?.dhuhrBegins }}</td>
            <td>{{ data.jummah1Iqama }}</td>
          </tr>
          <tr>
            <th scope="row">Jummah 2</th>
            <td>{{ data?.dhuhrBegins }}</td>
            <td>{{ data?.jummah2Iqama }}</td>
          </tr>
          <tr>
            <th scope="row">Jummah 3</th>
            <td>{{ data?.dhuhrBegins }}</td>
            <td>{{ data?.jummah3Iqama }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </TheCard>
</template>
