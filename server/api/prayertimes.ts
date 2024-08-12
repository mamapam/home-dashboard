import axios from 'axios';
import { parseCsvDataStringWithoutMapping } from '../../utils/parse-csv-data';
import type { IPrayerTime } from '~/types/IPrayerTime';

export default defineEventHandler(async (event) => {
  let yearlyPrayerTimeData = await useStorage().getItem<IPrayerTime[]>('yearly-prayer-times');

  if (!yearlyPrayerTimeData) {
    const { data } = await axios.get('https://markhammasjid.ca/wp-content/scripts/ism-2019-prayer-times.csv');

    const csvData = parseCsvDataStringWithoutMapping(data);

    const csvMappedData: IPrayerTime[] = csvData.map((item) => {
      return {
        month: item.Month,
        day: item.Day,
        fajrBegins: item['Fajr Begins'],
        fajrIqama: item['Fajr Iqama'],
        sunrise: item['Sunrise'],
        dhuhrBegins: item['Zuhr Begins'],
        dhuhrIqama: item['Zuhr Iqama'],
        asrBegins: item['Asr Begins'],
        asrIqama: item['Asr Iqama'],
        sunset: item['Sunset'],
        maghribIqama: item['Maghrib Iqama'],
        ishaBegins: item['Isha Begins'],
        ishaIqama: item['Isha Iqama'],
        jummah1Iqama: item['Jumah 1 Iqama'],
        jummah2Iqama: item['Jumah 2 Iqama'],
        date: item['Date'],
        jummah3Iqama: item['Jumah 3 Iqama']
      };
    });

    useStorage().setItem('yearly-prayer-times', csvMappedData);

    yearlyPrayerTimeData = csvMappedData;
  }

  const { day, month } = getQuery(event);

  const prayerInfo = yearlyPrayerTimeData.find(s => s.day === day && s.month === month);

  return prayerInfo;
});
