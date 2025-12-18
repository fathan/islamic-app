"use client";

import { useState } from "react";
import {
  FaBookmark,
  FaCopy,
  FaForward,
  FaInfo,
  FaPlay,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

interface IProps {
  number: number | string;
  text: string;
  translation: string;
  tafsir?: string;
}

const AyahItem = (props: IProps) => {
  const { number, text, translation, tafsir } = props;
  const [showTafsir, setShowTafsir] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-slate-950 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-7">
          <div className="rounded-full bg-blue-100 text-blue-950 w-9 h-9 flex items-center justify-center">
            {number}
          </div>
          <div className="font-light text-sm">-</div>
        </div>

        {/* Ayah */}
        <div className="flex flex-col gap-4 font-arabic text-4xl mb-7">
          <div className="text-right leading-relaxed text-gray-600 dark:text-slate-200">{text}</div>
        </div>

        {/* Translation */}
        <div className="font-light text-xs italic">
          {translation}
        </div>

        {/* Tafsir Accordion */}
        <div className="border rounded-md">
          <button
            onClick={() => setShowTafsir(!showTafsir)}
            className="w-full flex justify-between items-center px-3 py-2 text-sm font-semibold bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 transition"
          >
            <span>Tafsir</span>
            {showTafsir ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          <div
            className={`overflow-hidden overflow-y-auto transition-all duration-300 ${
              showTafsir ? "max-h-96 p-3" : "max-h-0 p-0"
            }`}
          >
            <p className="text-sm font-light text-gray-700 dark:text-gray-200">
              {tafsir || "Tidak ada tafsir tersedia."}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="border-t border-gray-200 pt-4">
        <div className="grid grid-cols-5 gap-4 text-center">
          <ActionIcon icon={<FaCopy />} />
          <ActionIcon icon={<FaBookmark />} />
          <ActionIcon icon={<FaPlay />} />
          <ActionIcon icon={<FaForward />} />
          <ActionIcon icon={<FaInfo />} />
        </div>
      </div>
    </div>
  );
};

const ActionIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="bg-gray-200 w-full h-8 rounded-sm flex items-center justify-center hover:bg-gray-300 transition cursor-pointer">
    <span className="text-gray-500">{icon}</span>
  </div>
);

export default AyahItem;
