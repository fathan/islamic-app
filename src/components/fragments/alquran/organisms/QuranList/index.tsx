import SurahType from "@/components/fragments/alquran/molecules/SurahType";

interface Iprops {
  number: number;
  name: string;
  numberOfAyah: number;
  translation: string;
}

const QuranList = (props: Iprops) => {
  const { number, name, numberOfAyah, translation } = props;

  return (
    <>
      <div className="flex flex-row gap-3 border rounded-lg px-4 py-3 shadow-sm bg-white">
        <div>
          <div className="rounded-full bg-blue-100 text-blue-950 w-12 h-12 flex items-center justify-center">
            {number}
          </div>
        </div>

        <div>
          <div className="font-semibold text-base">
            {name}
          </div>

          <div className="text-xs text-gray-600">
            {translation} - {numberOfAyah} Ayat
          </div>
        </div>

        <div className="ml-auto self-center">
          <SurahType surahNumber={number} />
        </div>
      </div>
    </>
  )
};

export default QuranList;