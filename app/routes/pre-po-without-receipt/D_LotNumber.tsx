import { Button } from "~/components/ui/button";
import { lotNumber } from "./data";
import DetailLotNumberConfig from "./DL_Sheet";
import { useEffect, useState } from "react";
import DL_TableCell from "./DL_TableCell";
import { DetailLotProps } from "~/@types/PPWR";
import { formatDate } from "~/utils/general";

export default function DetailLotNumber() {
  const [prefix, setPrefix] = useState<string>("");
  const [lotData, setLotData] = useState<DetailLotProps[]>([]);

  const addHandler = () => {
    const lotDataDetail: DetailLotProps = {
      ls: prefix,
      expireDate: formatDate(new Date().toISOString()),
      location: "Gudang Bahan Baku Cibitung",
      qty: 0,
    };

    setLotData([...lotData, lotDataDetail]);
  };

  return (
    <div className="overflow-x-scroll px-4 pb-8 pt-4 min-h-[250px]">
      <div className="fixed top-28 items-center flex gap-1 mb-2">
        <Button onClick={addHandler} className="h-5" type="button">
          Tambah
        </Button>
        <DetailLotNumberConfig setPrefix={setPrefix} />
      </div>
      <div className="mt-8">
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
                <DL_TableCell data={ld} index={i + 1} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
