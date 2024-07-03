import React, { SetStateAction } from "react";
import { DetailLotProps } from "~/@types/PPWR";
import { formatDate } from "~/utils/general";

export const addHandler = (
  prefix: string,
  location: string,
  lotData: DetailLotProps[],
  setLotData: React.Dispatch<SetStateAction<DetailLotProps[]>>
) => {
  const lotDataDetail: DetailLotProps = {
    ls: prefix,
    expireDate: formatDate(new Date().toISOString()),
    location,
    qty: 0,
  };

  setLotData([...lotData, lotDataDetail]);
};
