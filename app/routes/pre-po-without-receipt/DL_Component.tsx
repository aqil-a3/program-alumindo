import { Button } from "~/components/ui/button";
import { useLotNumberData } from "./D_LotNumber";
import { addHandler } from "./utils";
import DetailLotNumberConfig from "./DL_Sheet";
import { lotNumber } from "./data";
import DL_TableCell from "./DL_TableCell";

export default function DL_Component() {
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

  return (
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
            {lotData.map((ld, i) => {
              const indexRow = i + 1;
              const keyIndex = `row-table-${i}`;

              return (
                <tr key={keyIndex} data-row-name="lotData" data-index-row={indexRow}>
                  <DL_TableCell data={ld} index={i + 1} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
