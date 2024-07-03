import { useState } from "react";
import { DetailLotProps } from "~/@types/PPWR";

export default function DL_TableCell({
  data,
  index,
  isDeleteMode,
}: {
  data: DetailLotProps;
  index: number;
  isDeleteMode: boolean;
}) {
  if (isDeleteMode) return <TableCellDeleteMode data={data} index={index} />;

  return <TableCellNoDeleteMode data={data} index={index} />;
}

function TableCellNoDeleteMode({
  index,
  data,
}: {
  data: DetailLotProps;
  index: number;
}) {
  const { ls, expireDate, location, qty } = data;

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

function TableCellDeleteMode({
  index,
  data,
}: {
  data: DetailLotProps;
  index: number;
}) {
  const dataKeys = Object.keys(data);
  const [rowIndex, setRowIndex] = useState<number | null>(null);
  
  const mouseEnterHandler = () => {
    return setRowIndex(index);
  };

  const mouseLeaveHandler = () => {
    return setRowIndex(null);
  }

  return (
    <>
      {dataKeys.map((d) => {
        const key = d as keyof DetailLotProps;
        return (
          <td
            data-index={index}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-xs cursor-pointer hover:bg-slate-200 font-medium px-4 min-w-[130px] text-center bg-slate-300"
          >
            <p>{data[key]}</p>
          </td>
        );
      })}
    </>
  );
}
