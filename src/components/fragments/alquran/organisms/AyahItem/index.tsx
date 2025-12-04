import { FaBookmark, FaCopy, FaForward, FaInfo, FaPlay } from "react-icons/fa";

const AyahItem = () => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-base">
            1
          </div>
          <div className="font-light text-sm">
            -
          </div>
        </div>

        <div className="flex flex-col gap-4 font-arabic text-xl">
          <div className="text-right">
            الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
          </div>
        </div>

        <div className="flex justify-end">
          <div className="font-light text-sm italic">
            Segala puji bagi Allah, Tuhan semesta alam.
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="grid grid-cols-5 gap-4 text-center">
          <div className="bg-gray-200 w-full h-8 rounded-sm">
            <FaCopy className="text-gray-500 m-auto mt-2" />
          </div>

          <div className="bg-gray-200 w-full h-8 rounded-sm">
            <FaBookmark className="text-gray-500 m-auto mt-2" />
          </div>

          <div className="bg-gray-200 w-full h-8 rounded-sm">
            <FaPlay className="text-gray-500 m-auto mt-2" />
          </div>

          <div className="bg-gray-200 w-full h-8 rounded-sm">
            <FaForward className="text-gray-500 m-auto mt-2" />
          </div>

          <div className="bg-gray-200 w-full h-8 rounded-sm">
            <FaInfo className="text-gray-500 m-auto mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyahItem;
