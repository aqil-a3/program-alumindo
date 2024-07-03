import React, { SetStateAction, useState } from "react";
import { DetailLotProps } from "~/@types/PPWR";
import { addHandler } from "./utils";
import { useLotNumberData } from "./D_LotNumber";

export default function DL_TableCell({
  data,
  index,
}: {
  data: DetailLotProps;
  index: number;
}) {
  const { isDeleteMode } = useLotNumberData();
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
  const {prefix, location, lotData, setLotData} = useLotNumberData()
  const dataKeys = Object.keys(data);

  const desiredOrder = ["ls", "qty", "expireDate", "location"];

  dataKeys.sort((a, b) => {
    return desiredOrder.indexOf(a) - desiredOrder.indexOf(b);
  });

  const getLengthChar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    return target.value.length;
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const dataKey = target.getAttribute("data-key");
    if (!dataKey) throw new Error("Attribute data-key belum diatur");

    const splitDataKey = dataKey.split("-");
    const key = splitDataKey[0];
    const index = splitDataKey[1];

    if (e.key === "ArrowDown") {
      return addHandler(prefix, location, lotData, setLotData);
    } else if (e.key === "ArrowLeft") {
    }
  };

  return (
    <>
      {dataKeys.map((d) => {
        const key = d as keyof DetailLotProps;
        return (
          <td className="text-xs font-medium px-4 min-w-[130px] text-center bg-slate-300 cursor-default">
            <input
              type="text"
              data-key={`${key}-${index}`}
              onChange={getLengthChar}
              onKeyDown={keyDownHandler}
              className="px-2 bg-transparent focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-none"
              defaultValue={
                key === "ls" ? `${data[key]}.${index}` : `${data[key]}`
              }
            />
          </td>
        );
      })}
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
  const [rowIndex, setRowIndex] = useState<number | null>(null);
  const dataKeys = Object.keys(data);

  const desiredOrder = ["ls", "qty", "expireDate", "location"];

  dataKeys.sort((a, b) => {
    return desiredOrder.indexOf(a) - desiredOrder.indexOf(b);
  });

  const mouseEnterHandler = () => {
    return setRowIndex(index);
  };

  const mouseLeaveHandler = () => {
    return setRowIndex(null);
  };

  return (
    <>
      {dataKeys.map((d) => {
        const key = d as keyof DetailLotProps;
        return (
          <td
            data-index={index}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className={`text-xs cursor-pointer font-medium px-4 min-w-[130px] ${
              index === rowIndex ? "bg-slate-200" : "bg-slate-300"
            }`}
          >
            {key === "ls" ? (
              <p>
                {data[key]}.{index}
              </p>
            ) : (
              <p>{data[key]}</p>
            )}
          </td>
        );
      })}
    </>
  );
}
