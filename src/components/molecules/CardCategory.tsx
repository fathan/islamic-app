import Link from 'next/link';

import { ICardCategory } from "@/interfaces/global";

const CardCategory = (props: ICardCategory) => {
  const { icon, name, path } = props;

  return (
    <>
      <Link
        href={ path }
        className="border border-[#ced0d3] rounded-lg p-1 py-4 text-center w-full cursor-pointer hover:bg-blue-100"
      >
        <div className="mb-2 table m-auto text-[#97a4b8]">
          { icon }
        </div>

        <div>
          <span className="font-semibold text-[#6d85a8] text-xs">
            { name }
          </span>
        </div>
      </Link>
    </>
  )
};

export default CardCategory;
