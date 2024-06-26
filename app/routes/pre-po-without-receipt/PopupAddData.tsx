import { useState } from "react";
import HeaderTable from "./HeaderTable";
import DetailTable from "./DetailTable";
import { useFetcher } from "@remix-run/react";

type TableModeState = "Header" | "Detail";
export default function PopupAddData() {
  const [tableMode, setTableMode] = useState<TableModeState>("Header");
  const fetcher = useFetcher();
  console.log("OK")
  return (
    <div>
      <h1>Editable Mode</h1>
      <div className="flex">
        <div>
          <input
            type="radio"
            name="table-mode"
            checked={tableMode ==="Header"}
            id="table-header"
            onChange={() => setTableMode("Header")}
          />
          <label htmlFor="table-header">Header</label>
        </div>
        <div>
          <input
            type="radio"
            name="table-mode"
            id="table-detail"
            onChange={() => setTableMode("Detail")}
          />
          <label htmlFor="table-detail">Detail</label>
        </div>
      </div>
      <fetcher.Form method="POST">
        <HeaderTable isActivated={tableMode === "Header"} />
        <DetailTable isActivated={tableMode === "Detail"} />
      </fetcher.Form>
    </div>
  );
}
