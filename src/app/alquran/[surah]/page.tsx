import AyahItem from "@/components/fragments/alquran/organisms/AyahItem";

async function getSurah(surah: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/quran/${surah}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function SurahDetail(
  { params }: { params: Promise<{ surah: string }> }
) {
  const { surah } = await params;

  const response = await getSurah(surah);

  if (!response) {
    return <div className="p-6">Surah tidak ditemukan</div>;
  }

  const data = response[String(surah)];

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{data.name_latin}</h1>
        <p className="text-4xl mt-2">{data.name}</p>
        <p className="text-sm text-gray-500 mt-1">
          Jumlah Ayat: {data.number_of_ayah}
        </p>
      </div>

      <div className="space-y-6 mt-6">
        {Object.keys(data.text).map((key) => (
          <AyahItem
            key={key}
            number={key}
            text={data.text[key]}
            translation={data.translations.id.text[key]}
          />
        ))}
      </div>
    </div>
  );
}
