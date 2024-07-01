import { useState } from "react";
import HeaderTable from "./HeaderTable";
import DetailTable from "./DetailTable";
import { useFetcher } from "@remix-run/react";
import TableNavigation from "./Tab";

export type TableModeState = "Header" | "Detail";

export default function PopupAddData() {
  const [tableMode, setTableMode] = useState<TableModeState>("Header");
  const fetcher = useFetcher();

  return (
    <div className="p-4">
      <div className="py-2">
        <h1>Editable Mode</h1>
        <TableNavigation setTableMode={setTableMode} />
      </div>
      <div>
        <fetcher.Form method="POST">
          <HeaderTable isActivated={tableMode === "Header"} />
          <DetailTable isActivated={tableMode === "Detail"} />
        </fetcher.Form>
      </div>
    </div>
  );
}
