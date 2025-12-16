interface IAsmaulHusna {
  id: string;
  arabic: string;
  latin: string;
  meaning: string;
}

async function getDailyDoa () {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/asmaul_husna`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function AsmaulHusna () {
  const response = await getDailyDoa();

  if (!response) {
    return <div className="p-6">Data tidak ditemukan</div>;
  }

  const data = response;

  return (
    <div className="p-6 space-y-4">
      {data.map((doa: IAsmaulHusna, index: number) => (
        <div key={index} className="flex justify-between border pb-4 bg-white rounded-lg p-4 py-2 w-full">
          <div className="flex flex-row gap-2">
            <div className="rounded-full bg-blue-100 text-blue-950 w-12 h-12 flex items-center justify-center font-semibold">
              {index + 1}
            </div>

            <div className="flex-1 w-full">
              <h2 className="text-base font-semibold">
                {doa.latin}
              </h2>
              <div className="text-xs italic">
                {doa.meaning}
              </div>
            </div>
          </div>

          <div className="w-32">
            <div className="text-right text-3xl font-extralight">
              {doa.arabic}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
