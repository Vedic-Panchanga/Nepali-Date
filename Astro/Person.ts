type Person = {
  id: number;
  name: string;
  lagna: number;
  moon: number;
  sun: number;
  mercury: number;
  venus: number;
  mars: number;
  rahu: number;
  ketu: number;
  jupiter: number;
  saturn: number;
  adDate?: string;
  bsDate?: string;
  birthTime?: string;
  location: string;
};

const people: Person[] = [
  {
    id: 1,
    name: 'Bishal Ghimire',
    lagna: 3,
    moon: 1,
    sun: 5,
    mercury: 5,
    venus: 8,
    mars: 2,
    rahu: 8,
    ketu: 9,
    jupiter: 7,
    saturn: 5,
    adDate: '1984-08-18',
    bsDate: '2041-02-03',
    birthTime: '1:40 AM',
    location: 'Kathmandu',
  },
  {
    id: 2,
    name: 'Anita Pandit',
    lagna: 2,
    moon: 2,
    sun: 1,
    mercury: 12,
    venus: 2,
    mars: 3,
    rahu: 9,
    ketu: 3,
    jupiter: 4,
    saturn: 10,
    adDate: '1991-Apr-18',
    bsDate: null,
    birthTime: '8:05 AM',
    location: 'Damauli',
  },
  {
    id: 3,
    name: 'Aashvi Ghimire',
    lagna: 2,
    moon: 8,
    sun: 12,
    mercury: 12,
    venus: 1,
    mars: 9,
    rahu: 4,
    ketu: 10,
    jupiter: 8,
    saturn: 9,
    adDate: null,
    bsDate: null,
    birthTime: null,
    location: 'Kathmandu',
  },
  {
    id: 4,
    name: 'Binod Ghimire',
    lagna: 3,
    moon: 12,
    sun: 11,
    mercury: 11,
    venus: 12,
    mars: 12,
    rahu: 11,
    ketu: 5,
    jupiter: 6,
    saturn: null,
    adDate: '1951-Mar-10',
    bsDate: '2007-11-27',
    birthTime: '1:00 PM',
    location: 'Kathmandu',
  },
  {
    id: 5,
    name: 'Barsha Ghimire',
    lagna: 11,
    moon: 12,
    sun: 3,
    mercury: 3,
    venus: 2,
    mars: 3,
    rahu: 9,
    ketu: 7,
    jupiter: 6,
    saturn: null,
    adDate: null,
    bsDate: null,
    birthTime: null,
    location: 'Kathmandu',
  },
  {
    id: 6,
    name: 'Sofiya Pandit',
    lagna: 10,
    moon: 5,
    sun: 10,
    mercury: 11,
    venus: 12,
    mars: 3,
    rahu: 8,
    ketu: 2,
    jupiter: 6,
    saturn: 10,
    adDate: null,
    bsDate: null,
    birthTime: null,
    location: 'Kathmandu',
  },
];
