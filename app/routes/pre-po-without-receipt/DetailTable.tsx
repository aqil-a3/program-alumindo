import {
  DetailLotProps,
  DetailTableProps,
  detailTableHeaders,
  lotNumber,
} from "./data";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";

interface TableCellProps {
  type: "text" | "number";
  name: keyof DetailTableProps;
  index: number;
  value: string;
}

const defaultHeaderData: DetailTableProps = {
  account: "",
  accountCode: "",
  description: "",
  location: "",
  ls: "",
  pack: "",
  partNumber: "",
  qty: "0",
  qtyPack: "0",
  qtyReal: "0",
  remarks: "",
  spectrogram: "",
  um: "",
  umConv: "1",
  weighing: "",
};

// const defaultLotData: DetailLotProps ={
//   ls: ;
// }

const TableCell = ({ index, name, type, value }: TableCellProps) => {
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
  useEffect(() => {
    console.log(headerData);
  }, [headerData]);
  return (
    <div className={isActivated ? "grid grid-cols-2" : "hidden"}>
      <div className="overflow-x-scroll relative px-4 pt-4 pb-8 min-h-[250px]">
        <Button
          className="h-5 relative"
          type="button"
          onClick={() => setHeaderData([...headerData, defaultHeaderData])}
        >
          Tambah
        </Button>
        <div>
          <table>
            <thead>
              <tr>
                {detailTableHeaders.map((d, i) => (
                  <td
                    key={i + 1}
                    className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-orange-500 cursor-default bg-orange-600 text-white"
                  >
                    {d}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {headerData.map((h, i) => (
                <tr key={i + 1}>
                  <TableCell
                    index={i}
                    name={"spectrogram"}
                    type="text"
                    value={h.spectrogram}
                  />
                  <TableCell
                    index={i}
                    name={"weighing"}
                    type="text"
                    value={h.weighing}
                  />
                  <TableCell
                    index={i}
                    name={"partNumber"}
                    type="text"
                    value={h.partNumber}
                  />
                  <TableCell
                    index={i}
                    name={"description"}
                    type="text"
                    value={h.description}
                  />
                  <TableCell index={i} name={"ls"} type="text" value={h.ls} />
                  <TableCell index={i} name={"qty"} type="text" value={h.qty} />
                  <TableCell index={i} name={"um"} type="text" value={h.um} />
                  <TableCell
                    index={i}
                    name={"umConv"}
                    type="text"
                    value={h.umConv}
                  />
                  <TableCell
                    index={i}
                    name={"qtyReal"}
                    type="text"
                    value={h.qtyReal}
                  />
                  <TableCell
                    index={i}
                    name={"qtyPack"}
                    type="text"
                    value={h.qtyPack}
                  />
                  <TableCell
                    index={i}
                    name={"pack"}
                    type="text"
                    value={h.pack}
                  />
                  <TableCell
                    index={i}
                    name={"pack"}
                    type="text"
                    value={h.pack}
                  />
                  <TableCell
                    index={i}
                    name={"accountCode"}
                    type="text"
                    value={h.accountCode}
                  />
                  <TableCell
                    index={i}
                    name={"account"}
                    type="text"
                    value={h.account}
                  />
                  <TableCell
                    index={i}
                    name={"remarks"}
                    type="text"
                    value={h.remarks}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="overflow-x-scroll px-4 pt-4 pb-8 min-h-[250px]">
        <Button className="h-5" type="button">
          Tambah
        </Button>
        <div>
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
    </div>
  );
}
