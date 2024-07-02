import { Button } from "~/components/ui/button";
import { lotNumber } from "./data";
import DetailLotNumberConfig from "./DL_Sheet";

export default function DetailLotNumber() {
  return (
    <div className="overflow-x-scroll px-4 pb-8 pt-4 min-h-[250px]">
      <div className="fixed top-28 items-center flex gap-1 mb-2">
        <Button className="h-5" type="button">
          Tambah
        </Button>
        <DetailLotNumberConfig />
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
        </table>
      </div>
    </div>
  );
}
