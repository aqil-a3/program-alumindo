import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { TableModeState } from "./PopupAddData";

export default function Table({
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
      <TabsContent value="Header">Tentukan header dari datanya.</TabsContent>
      <TabsContent value="Detail">Tentukan detail dari datanya.</TabsContent>
    </Tabs>
  );
}
