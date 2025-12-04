import AyahItem from "@/components/fragments/alquran/organisms/AyahItem";

async function getSurah(surah: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/quran/${surah}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

const SurahDetail = async ({ params }: { params: { surah: string } }) => {
  const { surah: numberSurah } = await params;
  const response = await getSurah(numberSurah);

  if (!response) {
    return <div className="p-6">Surah tidak ditemukan</div>;
  }

  const data = await response[numberSurah];

  return (
    // <section className="p-4 flex flex-col gap-4">
    //   {data.nama}

    //   <div className="bg-white rounded-lg p-4 border border-gray-200 text-center font-arabic text-2xl">
    //     بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
    //   </div>

    //   {[1, 2, 3, 4, 5].map((item, index) => (
    //     <AyahItem key={index} />
    //   ))}
    // </section>

    <div className="p-6 space-y-6">
      {/* Judul Surat */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">{data.name_latin}</h1>
        <p className="text-4xl mt-2">{data.name}</p>
        <p className="text-sm text-gray-500 mt-1">
          Jumlah Ayat: {data.number_of_ayah}
        </p>
      </div>

      {/* Ayat + Terjemahan */}
      <div className="space-y-6 mt-6">
        {Object.keys(data.text).map((key) => (
          <div key={key} className="border-b pb-3">
            <p className="text-right text-2xl mb-2">{data.text[key]}</p>
            <p className="text-gray-700">
              {data.translations.id.text[key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurahDetail;
