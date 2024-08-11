import fs from 'fs';
import axios from 'axios';
import Papa from 'papaparse';

export default defineEventHandler(async (event) => {
  // const results = [];
  // const { data } = await axios.get('https://markhammasjid.ca/wp-content/scripts/ism-2019-prayer-times.csv');

  Papa.parse('https://markhammasjid.ca/wp-content/scripts/ism-2019-prayer-times.csv', {
    download: true,
    step: function (row) {
      console.log('Row:', row.data);
    },
    complete: function () {
      console.log('All done!');
    }
  });

  return { hello: 'hello' };
});
