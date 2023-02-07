import { daysInYear } from './NepaliDaysData.ts';

const yearStartDay = 14;

export function daysInNepaliYear(year: number) {
  let daysInYearLocal = daysInYear;
  return daysInYearLocal[year];
}

export function convertYearAD_BS(date: Date) {
  var dateNow = new Date();
  var year = dateNow.getFullYear();
  var month = dateNow.getMonth() + 1;
  var day = dateNow.getDate();

  var isNextYear = true;

  if (month == 4) {
    if (day >= yearStartDay) {
      isNextYear = true;
    } else {
      isNextYear = false;
    }
  } else if (month < 4) {
    isNextYear = false;
  } else {
    isNextYear = true;
  }

  if (isNextYear) {
    return year + 57;
  } else {
    return year + 56;
  }
}

export function convertMonthAD_BS(date: Date) {
  var dateNow = new Date();
  var year = dateNow.getFullYear();
  var month = dateNow.getMonth() + 1;
  var day = dateNow.getDate();

  var bs_month = month + 9;
  if (bs_month > 12) {
    bs_month -= 12;
  }
  return bs_month;
}

export function convertDayAD_BS(date: Date) {
  var dateNow = new Date();
  var year = dateNow.getFullYear();
  var month = dateNow.getMonth() + 1;
  var day = dateNow.getDate();

  var daysTillToday = 0;

  var bs_day = 0;
  if (day > yearStartDay) {
    bs_day = day - yearStartDay;
  } else {
    bs_day = day + yearStartDay;
  }

  return bs_day;
}

const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

export function daysTillTodayAD(date: Date) {
  var dateNow = new Date();
  var year = dateNow.getFullYear();
  var month = dateNow.getMonth() + 1;
  var day = dateNow.getDate();

  var totalDaysThisYear = 0;
  var isNextYear = true;

  if (month == 4) {
    if (day > yearStartDay - 1) {
      isNextYear = true;
    } else {
      isNextYear = false;
    }
  } else {
    isNextYear = true;
  }

  if (isNextYear) {
    for (let i = 1; i < month; i++) {
      totalDaysThisYear += getDays(year, i);
    }
    return totalDaysThisYear + day;
  } else {
    for (let i = 1; i < month; i++) {
      totalDaysThisYear += getDays(year - 1, i);
    }
    return totalDaysThisYear + day;
  }
}

export function daysTillTodayBS(date: Date) {
  var totalDays = 0;
  const days = daysInYear[2079];
  console.log(days);
  for (let daysCount in days) {
    console.log(daysCount);
    totalDays += parseInt(daysCount);
  }
  return totalDays;
}

export function daysTillPreviousApr(year: number) {
  var totalDays = 0;
  for (let i = 1; i < 4; i++) {
    totalDays += getDays(year, i);
  }
  return totalDays + yearStartDay;
}

// export function getDaysInNepaliYear(): [number[]] {
//   const daysInYear: number[] = [];
//   const startDate = { year: 1944, month: 1, day: 1 };
//   const endDate = { year: 2000, month: 9, day: 17 };
//   return daysInYear;
// }
