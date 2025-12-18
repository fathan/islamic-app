'use client'

import { useState } from "react";

const Tasbih: React.FC = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [showStep, setShowStep] = useState(false);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => Math.max(0, prev - step));
  const reset = () => setCount(0);

  const editCount = () => {
    const value = prompt("Masukkan nilai tasbih:", count.toString());
    if (value !== null) {
      const num = parseInt(value);
      if (!isNaN(num) && num >= 0) {
        setCount(num);
      }
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center gap-10 py-24">
        <div className="flex gap-3 relative">
          <button
            onClick={() => setShowStep(!showStep)}
            className="bg-zinc-800 dark:bg-blue-800 text-white px-5 py-2 rounded-full text-sm flex items-center gap-1"
          >
            +{step}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {showStep && (
            <div className="absolute top-12 left-0 bg-zinc-900 dark:bg-blue-800 rounded-xl overflow-hidden shadow-lg">
              {[1, 10, 33, 99].map(v => (
                <button
                  key={v}
                  onClick={() => {
                    setStep(v);
                    setShowStep(false);
                  }}
                  className="block w-full px-6 py-2 text-white text-sm hover:bg-zinc-800"
                >
                  +{v}
                </button>
              ))}
            </div>
          )}

          <button
            onClick={editCount}
            className="bg-zinc-800 dark:bg-blue-800 text-white px-6 py-2 rounded-full text-sm"
          >
            Edit
          </button>

          <button
            onClick={reset}
            className="bg-zinc-800 dark:bg-blue-800 text-white px-6 py-2 rounded-full text-sm"
          >
            Reset
          </button>
        </div>

        <div className="text-blue-950 dark:text-blue-300 text-7xl font-light">
          {count}
        </div>

        <div className="relative flex flex-col items-center">
          <button
            onClick={increment}
            className="w-44 h-44 bg-blue-950 dark:bg-blue-500 rounded-full flex items-center justify-center active:scale-95 transition"
          >
            <svg className="w-16 h-16 text-blue-400 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
              <path d="M4 14l8-8 8 8" />
            </svg>
          </button>

          <button
            onClick={decrement}
            className="absolute -bottom-6 w-14 h-14 bg-blue-950 dark:bg-blue-500 rounded-full flex items-center justify-center border border-black active:scale-95 transition"
          >
            <svg className="w-6 h-6 text-blue-400 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path d="M6 10l6 6 6-6" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Tasbih;
