import * as React from 'react';
import './style.css';

import {
  daysInNepaliYear,
  convertYearAD_BS,
  convertMonthAD_BS,
  convertDayAD_BS,
  daysTillTodayAD,
  daysTillPreviousApr,
  daysTillTodayBS,
} from './NepaliDays/DaysInNepaliYear';

export default function App() {
  return (
    <div>
      <h1>Nepali Date Converter</h1>
      <p>Jai Desh ! Jai Naresh</p>

      <p>{daysInNepaliYear(2079)}</p>

      <p>BS - Year = {convertYearAD_BS()}</p>
      <p>BS - Month = {convertMonthAD_BS()}</p>
      <p>BS - Day = {convertDayAD_BS()}</p>
      <p>daysTillTodayAD = {daysTillTodayAD()}</p>
      <p>daysTillPreviousApr(2021) = {daysTillPreviousApr(2021)}</p>
      <p>daysTillTodayBS = {daysTillTodayBS()}</p>
    </div>
  );
}
