import { lotNumber } from "./data";
import { Button } from "~/components/ui/button";
import React, { createContext, useContext, useEffect, useState } from "react";
import { DetailTableProps, TableCellProps } from "~/@types/PPWR";
import DetailMaterial from "./D_Material";
import DetailLotNumber from "./D_LotNumber";

interface DetailTableContextProps {
  headerData: DetailTableProps[];
  setHeaderData: React.Dispatch<React.SetStateAction<DetailTableProps[]>>;
  isDeleteMode: boolean;
  setIsDeleteMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailTableContext = createContext<DetailTableContextProps>(
  {} as DetailTableContextProps
);


export const TableCell = ({ index, name, type, value }: TableCellProps) => {
  return (
    <td className="text-xs font-medium px-4 min-w-[130px] text-center bg-slate-300 cursor-default">
      <input
        type={type}
        className="px-2 bg-transparent focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-none"
        name={`${name}-${index}`}
        id={`${name}-${index}`}
        defaultValue={value}
      />
    </td>
  );
};

export default function DetailTable({ isActivated }: { isActivated: boolean }) {
  const [headerData, setHeaderData] = useState<DetailTableProps[]>([]);
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);

  return (
    <DetailTableContext.Provider
      value={{ headerData, isDeleteMode, setHeaderData, setIsDeleteMode }}
    >
      <div className={isActivated ? "grid grid-cols-2" : "hidden"}>
        <DetailMaterial />
        <DetailLotNumber />
      </div>
    </DetailTableContext.Provider>
  );
}

export function useDetailTableData() {
  return useContext(DetailTableContext);
}
