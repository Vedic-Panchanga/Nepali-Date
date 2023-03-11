interface Planet {
  id: number;
  name: string;
  nepaliName: string;
  englishName: string;
  symbol: string;
  color: string;
  gemstone: string;
  deity: string;
  property: string;
  characteristics: string;
}

const planets: Planet[] = [
  {
    id: 1,
    name: 'Sun',
    nepaliName: 'सूर्य',
    englishName: 'Surya',
    symbol: '☉',
    color: 'Red',
    gemstone: 'Ruby (Manikya)',
    deity: 'Lord Surya',
    property: 'Natural benefic',
    characteristics:
      'Represents power, authority, creativity, leadership, and vision.',
  },
  {
    id: 2,
    name: 'Moon',
    nepaliName: 'चन्द्र',
    englishName: 'Chandra',
    symbol: '☾︎',
    color: 'White',
    gemstone: 'Pearl (Moti)',
    deity: 'Lord Shiva',
    property: 'Natural benefic',
    characteristics:
      'Represents emotions, mind, feelings, motherly love, and intuition.',
  },
  {
    id: 3,
    name: 'Mars',
    nepaliName: 'मंगल',
    englishName: 'Mangal',
    symbol: '♂',
    color: 'Red',
    gemstone: 'Red Coral (Moonga)',
    deity: 'Lord Kartikeya',
    property: 'Malefic (Kroor graha)',
    characteristics:
      'Represents energy, drive, action, and aggression. Can cause conflicts, accidents, and injury.',
  },
  {
    id: 4,
    name: 'Mercury',
    nepaliName: 'बुध',
    englishName: 'Budh',
    symbol: '☿️',
    color: 'Green',
    gemstone: 'Emerald (Panna)',
    deity: 'Lord Vishnu',
    property: 'Natural benefic',
    characteristics:
      'Represents intelligence, communication, business, and analytical ability.',
  },
  {
    id: 5,
    name: 'Jupiter',
    nepaliName: 'बृहस्पति',
    englishName: 'Brihaspati',
    symbol: '♃',
    color: 'Yellow',
    gemstone: 'Yellow Sapphire (Pukhraj)',
    deity: 'Lord Brihaspati',
    property: 'Natural benefic',
    characteristics:
      'Represents knowledge, wisdom, spirituality, and good fortune.',
  },
  {
    id: 6,
    name: 'Venus',
    nepaliName: 'शुक्र',
    englishName: 'Shukra',
    symbol: '♀',
    color: 'White',
    gemstone: 'Diamond (Heera)',
    deity: 'Goddess Lakshmi',
    property: 'Natural benefic',
    characteristics: 'Represents love, beauty, luxury, art, and pleasure.',
  },
  {
    id: 7,
    name: 'Saturn',
    nepaliName: 'शनि',
    englishName: 'Sani',
    symbol: '♄',
    color: 'Blue',
    gemstone: 'Blue Sapphire (Neelam)',
    deity: 'Lord Shani',
    property: 'Malefic (Kroor graha)',
    characteristics:
      'Represents discipline, hard work, and responsibility. Can cause delays, obstacles, and hardship.',
  },
  {
    id: 8,
    name: 'Rahu',
    nepaliName: 'राहु',
    englishName: 'Rahi',
    symbol: '☊',
    color: 'Smoky',
    gemstone: 'Hessonite (Gomed)',
    deity: 'Demon Rahu',
    property: 'Malefic (Kroor graha)',
    characteristics:
      'Represents materialism, ambition, and desire. Can cause confusion, illusion, and unexpected changes.',
  },
  {
    id: 9,
    name: 'Ketu',
    nepaliName: 'केतु',
    englishName: 'Ketu',
    symbol: '☋',
    color: 'Brown',
    gemstone: "Cat's Eye (Lehsunia)",
    deity: 'Demon Ketu',
    property: 'Malefic (Kroor graha)',
    characteristics:
      'Represents spirituality, detachment, and liberation. Can cause detachment, confusion, and sudden changes.',
  },
];
