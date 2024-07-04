import { createContext, useContext, useState } from "react";
import { DetailLotProps } from "~/@types/PPWR";
import { DLN_ContextState } from "~/@types/Provider";
import DL_Component from "./DL_Component";

const LotNumberContext = createContext<DLN_ContextState>(
  {} as DLN_ContextState
);

function LotNumberProvider({ children }: { children: React.ReactNode }) {
  const [prefix, setPrefix] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [lotData, setLotData] = useState<DetailLotProps[]>([]);
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);
  const [indexRow, setIndexRow] = useState<number>(0);
  const [indexCol, setIndexCol] = useState<number>(0);

  const contextValue: DLN_ContextState = {
    prefix,
    setPrefix,
    location,
    setLocation,
    lotData,
    setLotData,
    isDeleteMode,
    setIsDeleteMode,
    indexRow,
    setIndexRow,
    indexCol,
    setIndexCol
  };

  return (
    <LotNumberContext.Provider value={contextValue}>
      {children}
    </LotNumberContext.Provider>
  );
}

export default function DetailLotNumber() {
  return (
    <LotNumberProvider>
      <DL_Component />
    </LotNumberProvider>
  );
}

export const useLotNumberData = () => {
  return useContext(LotNumberContext);
};
