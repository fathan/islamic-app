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

  console.log(data);

  return (
    <div className="p-6 space-y-6">
      <div className="animated-background bg-gradient-to-r from-cyan-500 to-[#1b76ff] py-4 rounded-lg text-white">
        <div className="flex justify-between items-center mb-4 p-3">
          <div className="flex flex-col text-left"> 
            <h1 className="text-xl">{data.name_latin}</h1>
            <p className="text-sm">{data.translations.id.name} - {data.number_of_ayah} Ayat</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-xl">{data.name}</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        {Object.keys(data.text).map((key) => (
          <AyahItem
            key={key}
            number={key}
            text={data.text[key]}
            translation={data.translations.id.text[key]}
            tafsir={data.tafsir.id.kemenag.text[key]}
          />
        ))}
      </div>
    </div>
  );
}
