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
      <div className="flex flex-row gap-4 border rounded-lg p-6 shadow-md bg-white">
        <div>
          <div className="rounded-full bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center mb-2">
            {number}
          </div>
        </div>

        <div>
          <div className="font-bold text-lg">
            {name}
          </div>

          <div className="text-base text-gray-600">
            {translation} - {numberOfAyah} Ayat
          </div>
        </div>
      </div>
    </>
  )
};

export default QuranList;