const MADANIYAH_SURAH_NUMBERS = [
  2, 3, 4, 5, 8, 9, 13, 22, 24, 33,
  47, 48, 49, 55, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 76,
  98, 99, 110
];

const getSurahType = (surahNumber: number): 'Madaniyah' | 'Makkiyah' => {
  return MADANIYAH_SURAH_NUMBERS.includes(surahNumber)
    ? 'Madaniyah'
    : 'Makkiyah';
};

export default function SurahType({ surahNumber }: { surahNumber: number }) {
  const surahType = getSurahType(surahNumber);

  const badgeClass =
    surahType === 'Madaniyah'
      ? 'bg-blue-100 text-blue-700'
      : 'bg-emerald-100 text-emerald-700';

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${badgeClass}`}
    >
      {surahType}
    </span>
  );
}
