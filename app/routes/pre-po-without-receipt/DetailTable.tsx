import { Table, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { DetailTableProps, detailTableHeaders } from "./data";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";

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

export default function DetailTable({ isActivated }: { isActivated: boolean }) {
  const [headerData, setHeaderData] = useState<DetailTableProps[]>([]);
  useEffect(() => {
    console.log(headerData);
  }, [headerData]);
  return (
    <div className={isActivated ? "grid grid-cols-2" : "hidden"}>
      <div className="overflow-x-scroll px-4 pt-4 pb-8 min-h-[250px]">
        <Button className="h-5" type="button" 
        onClick={() => setHeaderData([...headerData, defaultHeaderData])}
        >
          Tambah
        </Button>
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
                    <tr key={i+1}>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.spectrogram}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.weighing}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.partNumber}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.ls}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.description}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.ls}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.qty}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.um}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.umConv}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.qtyReal}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.qtyPack}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.location}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.accountCode}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.account}</td>
                    <td className="text-xs font-medium px-4 min-w-[130px] text-center hover:bg-emerald-500 cursor-default bg-emerald-600 text-white">{h.remarks}</td>
                    </tr>
                ))}
          </tbody>
        </table>
      </div>
      <div>Right Side</div>
    </div>
  );
}
