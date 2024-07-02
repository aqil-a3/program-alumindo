import { DetailLotProps } from "~/@types/PPWR";

export default function DL_TableCell({
  data, 
  index,
}: {
  data: DetailLotProps;
  index: number;
}) {
    const {ls, expireDate, location, qty} = data;
  return (
    <>
      <td className="text-xs font-medium px-4 min-w-[130px] text-center bg-slate-300 cursor-default">
        <input
          type="text"
          className="px-2 bg-transparent focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-none"
          defaultValue={`${ls}.${index}`}
        />
      </td>
      <td className="text-xs font-medium px-4 min-w-[130px] text-center bg-slate-300 cursor-default">
        <input
          type="number"
          className="px-2 bg-transparent focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-none"
          defaultValue={qty}
        />
      </td>
      <td className="text-xs font-medium px-4 min-w-[130px] text-center bg-slate-300 cursor-default">
        <input
          type="text"
          className="px-2 bg-transparent focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-none"
          defaultValue={expireDate}
        />
      </td>
      <td className="text-xs font-medium px-4 min-w-[130px] text-center bg-slate-300 cursor-default">
        <input
          type="text"
          className="px-2 bg-transparent focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-none"
          defaultValue={location}
        />
      </td>
    </>
  );
}
