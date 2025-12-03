import QuranList from "@/components/fragments/alquran/organisms/QuranList";

interface ISurah {
  number: number;
  name: string;
  translation: string;
  verses: number;
  type: "Makkiyah" | "Madaniyah";
}

const SURAH_LIST: ISurah[] = [
  { number: 1, name: "Al-Fatihah", translation: "Pembukaan", verses: 7, type: "Makkiyah" },
  { number: 2, name: "Al-Baqarah", translation: "Sapi Betina", verses: 286, type: "Madaniyah" },
  { number: 3, name: "Ali 'Imran", translation: "Keluarga Imran", verses: 200, type: "Madaniyah" },
  { number: 4, name: "An-Nisa'", translation: "Wanita-Wanita", verses: 176, type: "Madaniyah" },
  { number: 5, name: "Al-Ma'idah", translation: "Hidangan", verses: 120, type: "Madaniyah" },
  { number: 6, name: "Al-An'am", translation: "Binatang Ternak", verses: 165, type: "Makkiyah" },
  { number: 7, name: "Al-A'raf", translation: "Tempat Tertinggi", verses: 206, type: "Makkiyah" },
  { number: 8, name: "Al-Anfal", translation: "Harta Rampasan Perang", verses: 75, type: "Madaniyah" },
  { number: 9, name: "At-Taubah", translation: "Pengampunan", verses: 129, type: "Madaniyah" },
  { number: 10, name: "Yunus", translation: "Nabi Yunus", verses: 109, type: "Makkiyah" },
  { number: 11, name: "Hud", translation: "Nabi Hud", verses: 123, type: "Makkiyah" },
  { number: 12, name: "Yusuf", translation: "Nabi Yusuf", verses: 111, type: "Makkiyah" },
  { number: 13, name: "Ar-Ra'd", translation: "Guruh/Petir", verses: 43, type: "Madaniyah" },
  { number: 14, name: "Ibrahim", translation: "Nabi Ibrahim", verses: 52, type: "Makkiyah" },
  { number: 15, name: "Al-Hijr", translation: "Hijr", verses: 99, type: "Makkiyah" },
  { number: 16, name: "An-Nahl", translation: "Lebah", verses: 128, type: "Makkiyah" },
  { number: 17, name: "Al-Isra'", translation: "Perjalanan Malam", verses: 111, type: "Makkiyah" },
  { number: 18, name: "Al-Kahfi", translation: "Penghuni Gua", verses: 110, type: "Makkiyah" },
  { number: 19, name: "Maryam", translation: "Maryam", verses: 98, type: "Makkiyah" },
  { number: 20, name: "Taha", translation: "Taha", verses: 135, type: "Makkiyah" },
  { number: 21, name: "Al-Anbiya'", translation: "Para Nabi", verses: 112, type: "Makkiyah" },
  { number: 22, name: "Al-Hajj", translation: "Haji", verses: 78, type: "Madaniyah" },
  { number: 23, name: "Al-Mu'minun", translation: "Orang-Orang Mukmin", verses: 118, type: "Makkiyah" },
  { number: 24, name: "An-Nur", translation: "Cahaya", verses: 64, type: "Madaniyah" },
  { number: 25, name: "Al-Furqan", translation: "Pembeda", verses: 77, type: "Makkiyah" },
  { number: 26, name: "Asy-Syu'ara", translation: "Para Penyair", verses: 227, type: "Makkiyah" },
  { number: 27, name: "An-Naml", translation: "Semut", verses: 93, type: "Makkiyah" },
  { number: 28, name: "Al-Qasas", translation: "Kisah-Kisah", verses: 88, type: "Makkiyah" },
  { number: 29, name: "Al-Ankabut", translation: "Laba-Laba", verses: 69, type: "Makkiyah" },
  { number: 30, name: "Ar-Rum", translation: "Romawi", verses: 60, type: "Makkiyah" },
  { number: 31, name: "Luqman", translation: "Luqman", verses: 34, type: "Makkiyah" },
  { number: 32, name: "As-Sajdah", translation: "Sajdah/Sujud", verses: 30, type: "Makkiyah" },
  { number: 33, name: "Al-Ahzab", translation: "Golongan-Golongan", verses: 73, type: "Madaniyah" },
  { number: 34, name: "Saba'", translation: "Kaum Saba", verses: 54, type: "Makkiyah" },
  { number: 35, name: "Fatir", translation: "Pencipta", verses: 45, type: "Makkiyah" },
  { number: 36, name: "Yasin", translation: "Yasin", verses: 83, type: "Makkiyah" },
  { number: 37, name: "As-Saffat", translation: "Barisan", verses: 182, type: "Makkiyah" },
  { number: 38, name: "Sad", translation: "Sad", verses: 88, type: "Makkiyah" },
  { number: 39, name: "Az-Zumar", translation: "Rombongan", verses: 75, type: "Makkiyah" },
  { number: 40, name: "Gafir", translation: "Maha Pengampun", verses: 85, type: "Makkiyah" },
  { number: 41, name: "Fussilat", translation: "Yang Dijelaskan", verses: 54, type: "Makkiyah" },
  { number: 42, name: "Asy-Syura", translation: "Musyawarah", verses: 53, type: "Makkiyah" },
  { number: 43, name: "Az-Zukhruf", translation: "Perhiasan", verses: 89, type: "Makkiyah" },
  { number: 44, name: "Ad-Dukhan", translation: "Asap", verses: 59, type: "Makkiyah" },
  { number: 45, name: "Al-Jasiyah", translation: "Berlutut", verses: 37, type: "Makkiyah" },
  { number: 46, name: "Al-Ahqaf", translation: "Bukit Pasir", verses: 35, type: "Makkiyah" },
  { number: 47, name: "Muhammad", translation: "Nabi Muhammad", verses: 38, type: "Madaniyah" },
  { number: 48, name: "Al-Fath", translation: "Kemenangan", verses: 29, type: "Madaniyah" },
  { number: 49, name: "Al-Hujurat", translation: "Kamar-Kamar", verses: 18, type: "Madaniyah" },
  { number: 50, name: "Qaf", translation: "Qaf", verses: 45, type: "Makkiyah" },
  { number: 51, name: "Az-Zariyat", translation: "Angin yang Menerbangkan", verses: 60, type: "Makkiyah" },
  { number: 52, name: "At-Tur", translation: "Bukit", verses: 49, type: "Makkiyah" },
  { number: 53, name: "An-Najm", translation: "Bintang", verses: 62, type: "Makkiyah" },
  { number: 54, name: "Al-Qamar", translation: "Bulan", verses: 55, type: "Makkiyah" },
  { number: 55, name: "Ar-Rahman", translation: "Maha Pengasih", verses: 78, type: "Makkiyah" },
  { number: 56, name: "Al-Waqi'ah", translation: "Hari Kiamat", verses: 96, type: "Makkiyah" },
  { number: 57, name: "Al-Hadid", translation: "Besi", verses: 29, type: "Madaniyah" },
  { number: 58, name: "Al-Mujadilah", translation: "Wanita yang Mengajukan Gugatan", verses: 22, type: "Madaniyah" },
  { number: 59, name: "Al-Hasyr", translation: "Pengusiran", verses: 24, type: "Madaniyah" },
  { number: 60, name: "Al-Mumtahanah", translation: "Wanita yang Diuji", verses: 13, type: "Madaniyah" },
  { number: 61, name: "As-Saff", translation: "Barisan", verses: 14, type: "Madaniyah" },
  { number: 62, name: "Al-Jumu'ah", translation: "Jumat", verses: 11, type: "Madaniyah" },
  { number: 63, name: "Al-Munafiqun", translation: "Orang-Orang Munafik", verses: 11, type: "Madaniyah" },
  { number: 64, name: "At-Tagabun", translation: "Hari Ditampakkan Kesalahan", verses: 18, type: "Madaniyah" },
  { number: 65, name: "At-Talaq", translation: "Talak", verses: 12, type: "Madaniyah" },
  { number: 66, name: "At-Tahrim", translation: "Mengharamkan", verses: 12, type: "Madaniyah" },
  { number: 67, name: "Al-Mulk", translation: "Kerajaan", verses: 30, type: "Makkiyah" },
  { number: 68, name: "Al-Qalam", translation: "Pena", verses: 52, type: "Makkiyah" },
  { number: 69, name: "Al-Haqqah", translation: "Hari Kiamat", verses: 52, type: "Makkiyah" },
  { number: 70, name: "Al-Ma'arij", translation: "Tempat Naik", verses: 44, type: "Makkiyah" },
  { number: 71, name: "Nuh", translation: "Nabi Nuh", verses: 28, type: "Makkiyah" },
  { number: 72, name: "Al-Jinn", translation: "Jin", verses: 28, type: "Makkiyah" },
  { number: 73, name: "Al-Muzzammil", translation: "Orang yang Berselimut", verses: 20, type: "Makkiyah" },
  { number: 74, name: "Al-Muddassir", translation: "Orang yang Berkemul", verses: 56, type: "Makkiyah" },
  { number: 75, name: "Al-Qiyamah", translation: "Kebangkitan", verses: 40, type: "Makkiyah" },
  { number: 76, name: "Al-Insan", translation: "Manusia", verses: 31, type: "Madaniyah" },
  { number: 77, name: "Al-Mursalat", translation: "Malaikat yang Diutus", verses: 50, type: "Makkiyah" },
  { number: 78, name: "An-Naba'", translation: "Berita Besar", verses: 40, type: "Makkiyah" },
  { number: 79, name: "An-Nazi'at", translation: "Malaikat yang Mencabut", verses: 46, type: "Makkiyah" },
  { number: 80, name: "Abasa", translation: "Ia Bermuka Masam", verses: 42, type: "Makkiyah" },
  { number: 81, name: "At-Takwir", translation: "Menggulung", verses: 29, type: "Makkiyah" },
  { number: 82, name: "Al-Infitar", translation: "Terbelah", verses: 19, type: "Makkiyah" },
  { number: 83, name: "Al-Mutaffifin", translation: "Orang-Orang yang Curang", verses: 36, type: "Makkiyah" },
  { number: 84, name: "Al-Insyiqaq", translation: "Terbelah", verses: 25, type: "Makkiyah" },
  { number: 85, name: "Al-Buruj", translation: "Gugusan Bintang", verses: 22, type: "Makkiyah" },
  { number: 86, name: "At-Tariq", translation: "Yang Datang di Malam Hari", verses: 17, type: "Makkiyah" },
  { number: 87, name: "Al-A'la", translation: "Yang Maha Tinggi", verses: 19, type: "Makkiyah" },
  { number: 88, name: "Al-Gasyiyah", translation: "Hari yang Menggelapkan", verses: 26, type: "Makkiyah" },
  { number: 89, name: "Al-Fajr", translation: "Fajar", verses: 30, type: "Makkiyah" },
  { number: 90, name: "Al-Balad", translation: "Negeri", verses: 20, type: "Makkiyah" },
  { number: 91, name: "Asy-Syams", translation: "Matahari", verses: 15, type: "Makkiyah" },
  { number: 92, name: "Al-Lail", translation: "Malam", verses: 21, type: "Makkiyah" },
  { number: 93, name: "Ad-Duha", translation: "Waktu Dhuha", verses: 11, type: "Makkiyah" },
  { number: 94, name: "Asy-Syarh", translation: "Kelapangan", verses: 8, type: "Makkiyah" },
  { number: 95, name: "At-Tin", translation: "Buah Tin", verses: 8, type: "Makkiyah" },
  { number: 96, name: "Al-Alaq", translation: "Segumpal Darah", verses: 19, type: "Makkiyah" },
  { number: 97, name: "Al-Qadr", translation: "Kemuliaan", verses: 5, type: "Makkiyah" },
  { number: 98, name: "Al-Bayyinah", translation: "Pembuktian", verses: 8, type: "Madaniyah" },
  { number: 99, name: "Az-Zalzalah", translation: "Guncangan", verses: 8, type: "Madaniyah" },
  { number: 100, name: "Al-Adiyat", translation: "Kuda Peperangan", verses: 11, type: "Makkiyah" },
  { number: 101, name: "Al-Qari'ah", translation: "Hari Kiamat", verses: 11, type: "Makkiyah" },
  { number: 102, name: "At-Takasur", translation: "Bermegah-Megahan", verses: 8, type: "Makkiyah" },
  { number: 103, name: "Al-Asr", translation: "Masa", verses: 3, type: "Makkiyah" },
  { number: 104, name: "Al-Humazah", translation: "Pengumpat", verses: 9, type: "Makkiyah" },
  { number: 105, name: "Al-Fil", translation: "Gajah", verses: 5, type: "Makkiyah" },
  { number: 106, name: "Quraisy", translation: "Suku Quraisy", verses: 4, type: "Makkiyah" },
  { number: 107, name: "Al-Ma'un", translation: "Barang yang Berguna", verses: 7, type: "Makkiyah" },
  { number: 108, name: "Al-Kausar", translation: "Nikmat yang Banyak", verses: 3, type: "Makkiyah" },
  { number: 109, name: "Al-Kafirun", translation: "Orang-Orang Kafir", verses: 6, type: "Makkiyah" },
  { number: 110, name: "An-Nasr", translation: "Pertolongan", verses: 3, type: "Madaniyah" },
  { number: 111, name: "Al-Lahab", translation: "Gejolak Api", verses: 5, type: "Makkiyah" },
  { number: 112, name: "Al-Ikhlas", translation: "Ikhlas/Tauhid", verses: 4, type: "Makkiyah" },
  { number: 113, name: "Al-Falaq", translation: "Waktu Subuh", verses: 5, type: "Makkiyah" },
  { number: 114, name: "An-Nas", translation: "Manusia", verses: 6, type: "Makkiyah" }
];

const Alquran: React.FC = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <>
        <div className="animated-background bg-gradient-to-r from-cyan-500 to-[#1b76ff] p-4 rounded-xl shadow-lg">
          <div className="font-semibold text-white text-lg">
            Terakhir Dibaca
          </div>
          <div className="font-light text-white text-base">
            Al-Fatihah
          </div>
          <div className="font-light text-white text-sm">
            Ayat ke 3
          </div>
        </div>

        {
          SURAH_LIST.map((item, index) => (
            <QuranList
              key={ index }
              number={ item.number }
              name={ item.name }
              numberOfAyah={ item.verses }
              translation={ item.translation }
            />
          ))
        }
      </>
    </div>
  )
};

export default Alquran;
