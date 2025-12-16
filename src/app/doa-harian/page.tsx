interface IDoa {
  title: string;
  text: string;
  latin: string;
  translation: string;
}

async function getDailyDoa () {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/doa`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function DoaHarian () {
  const response = await getDailyDoa();

  if (!response) {
    return <div className="p-6">Doa tidak ditemukan</div>;
  }

  const data = response;

  return (
    <div className="p-6 space-y-6">
      {data.doaList.map((doa: IDoa, index: number) => (
        <div key={index} className="border pb-4 bg-gray-100 rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-10">{doa.title}</h2>
          <p className="text-3xl mb-2 font-extralight">{doa.text}</p>
          <p className="mb-2">{doa.translation}</p>
        </div>
      ))}

      <div>
        Source: {data.source}
      </div>
    </div>
  );
}
