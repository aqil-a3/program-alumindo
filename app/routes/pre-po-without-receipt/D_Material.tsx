import { useEffect } from "react";
import { useDetailTableData } from "./DetailTable";
import TableCell from "./TableCell";
import { defaultHeaderData, detailTableHeaders } from "./data";
import { Button } from "~/components/ui/button";

export default function DetailMaterial() {
  const { headerData, isDeleteMode, setHeaderData, setIsDeleteMode } =
    useDetailTableData();

  useEffect(() => {
    const keyBoardAddData = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        e.preventDefault();
        addData();
      }
    };
    window.addEventListener("keydown", keyBoardAddData);

    return () => {
      window.removeEventListener("keydown", keyBoardAddData);
    };
  }, [headerData]);

  const addData = () => {
    return setHeaderData([...headerData, defaultHeaderData]);
  };

  const activeDeleteMode = () => {
    return setIsDeleteMode(!isDeleteMode);
  };

  return (
    <div className="overflow-x-scroll relative px-4 pt-4 pb-8 min-h-[250px]">
      <div className="fixed top-28 flex gap-1 mb-2">
        <Button className="h-5 relative" type="button" onClick={addData}>
          Tambah
        </Button>
        <Button
          className="h-5 relative bg-red-500"
          type="button"
          onClick={activeDeleteMode}
        >
          {isDeleteMode ? "Batal" : "Hapus"}
        </Button>
      </div>
      <div className="mt-8">
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
              <tr key={i + 1} data-index={i}>
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
                <TableCell index={i} name={"pack"} type="text" value={h.pack} />
                <TableCell index={i} name={"pack"} type="text" value={h.pack} />
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
  );
}
