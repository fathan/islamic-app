import QuranList from "@/components/fragments/alquran/organisms/QuranList";
import { SURAH_LIST } from "@/configuration/constant";
import Link from "next/link";

interface ISurah {
  number: number;
  name: string;
  translation: string;
  verses: number;
  type: string;
}

const optionsSurahList: ISurah[] = SURAH_LIST;

const Alquran: React.FC = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <>
        {/* <div className="animated-background bg-gradient-to-r from-cyan-500 to-[#1b76ff] p-4 rounded-xl shadow-lg">
          <div className="font-semibold text-white text-lg">
            Terakhir Dibaca
          </div>
          <div className="font-light text-white text-base">
            Al-Fatihah
          </div>
          <div className="font-light text-white text-sm">
            Ayat ke 3
          </div>
        </div> */}

        {
          optionsSurahList.map((item, index) => (
            <Link href={`/alquran/${item.number}`} key={index}>
              <QuranList
                key={ index }
                number={ item.number }
                name={ item.name }
                numberOfAyah={ item.verses }
                translation={ item.translation }
              />
            </Link>
          ))
        }
      </>
    </div>
  )
};

export default Alquran;
