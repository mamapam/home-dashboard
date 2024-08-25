export const convertMonthNumberToString = (monthNum: number) => {
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

  return months[monthNum];
};

export const convertDayNumberToString = (dayNum: number) => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  return days[dayNum];
};

export const convertUnixToTime = (unixTime: number) => {
  const date = new Date(unixTime * 1000);
  return date.toLocaleTimeString('en-US');
};
