import { Button } from "~/components/ui/button";
import { lotNumber } from "./data";
import DetailLotNumberConfig from "./DL_Sheet";
import { createContext, useContext, useEffect, useState } from "react";
import DL_TableCell from "./DL_TableCell";
import { DetailLotProps } from "~/@types/PPWR";
import { formatDate } from "~/utils/general";
import { addHandler } from "./utils";

interface DLN_ContextState {
  prefix: string;
  setPrefix: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  lotData: DetailLotProps[];
  setLotData: React.Dispatch<React.SetStateAction<DetailLotProps[]>>;
  isDeleteMode: boolean;
  setIsDeleteMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const LotNumberContext = createContext<DLN_ContextState>(
  {} as DLN_ContextState
);

function LotNumberProvider({ children }: { children: React.ReactNode }) {
  const [prefix, setPrefix] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [lotData, setLotData] = useState<DetailLotProps[]>([]);
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);

  const contextValue: DLN_ContextState = {
    prefix,
    setPrefix,
    location,
    setLocation,
    lotData,
    setLotData,
    isDeleteMode,
    setIsDeleteMode,
  };

  return (
    <LotNumberContext.Provider value={contextValue}>
      {children}
    </LotNumberContext.Provider>
  );
}

export default function DetailLotNumber() {
  const {
    isDeleteMode,
    location,
    lotData,
    prefix,
    setIsDeleteMode,
    setLocation,
    setLotData,
    setPrefix,
  } = useLotNumberData();

  const buttonHandler = () => {
    return addHandler(prefix, location, lotData, setLotData);
  };

  // Ini ada error. Jadi, element masih belum dapat mengambil context dari useLotNumberData()
  // FIX NANTI AJAH

  return (
    <LotNumberProvider>
      <div className="overflow-x-scroll relative px-4 min-h-[250px]">
        <div className="sticky top-0 left-0 items-center flex gap-1 mb-2">
          <Button onClick={buttonHandler} className="h-5" type="button">
            Tambah
          </Button>
          <Button
            onClick={() => setIsDeleteMode(!isDeleteMode)}
            className="h-5"
            variant={"destructive"}
            type="button"
          >
            {isDeleteMode ? "Batal" : "Hapus"}
          </Button>
          <DetailLotNumberConfig
            setLocation={setLocation}
            setPrefix={setPrefix}
          />
        </div>
        <div className="mt-2">
          <table>
            <thead>
              <tr>
                {lotNumber.map((d, i) => (
                  <td
                    className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-orange-500 cursor-default bg-orange-600 text-white"
                    key={i++}
                  >
                    {d}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {lotData.map((ld, i) => (
                <tr key={i + 1}>
                  <DL_TableCell
                    data={ld}
                    index={i + 1}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LotNumberProvider>
  );
}

export const useLotNumberData = () => {
  return useContext(LotNumberContext);
};
