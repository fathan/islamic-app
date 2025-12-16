import { FaBookmark, FaCopy, FaForward, FaInfo, FaPlay } from "react-icons/fa";

interface IProps {
  number: number | string;
  text: string;
  translation: string;
}

const AyahItem = async (props: IProps) => {
  const { number, text, translation } = await props;

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center mb-7">
          <div className="font-semibold text-base rounded-full w-12 h-12 flex items-center justify-center bg-gray-200">
            {number}
          </div>
          <div className="font-light text-sm">
            -
          </div>
        </div>

        <div className="flex flex-col gap-4 font-arabic text-4xl mb-7">
          <div className="text-right">
            {text}
          </div>
        </div>

        <div className="flex justify-end">
          <div className="font-light text-base italic">
            <span className="font-semibold">Artinya:</span> {translation}
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
