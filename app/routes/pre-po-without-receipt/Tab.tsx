import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TableModeState } from "./PopupAddData";

export default function TableNavigation({
  setTableMode,
}: {
  setTableMode: React.Dispatch<React.SetStateAction<TableModeState>>;
}) {
  return (
    <Tabs defaultValue="Header" className="w-[400px]">
      <TabsList>
        <TabsTrigger onClick={() => setTableMode("Header")} value="Header">
          Header
        </TabsTrigger>
        <TabsTrigger onClick={() => setTableMode("Detail")} value="Detail">
          Detail
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
