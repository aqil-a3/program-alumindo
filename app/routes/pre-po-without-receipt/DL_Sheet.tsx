import React, { SetStateAction, useRef } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { locationSite } from "~/lib/data/location";

export default function DetailLotNumberConfig({
  setPrefix,
  setLocation,
}: {
  setPrefix: React.Dispatch<SetStateAction<string>>;
  setLocation: React.Dispatch<SetStateAction<string>>;
}) {
  const prefixRef = useRef<null | HTMLInputElement>(null);

  const savePrefix = () => {
    if (prefixRef && prefixRef.current) {
      return setPrefix(prefixRef.current.value);
    }
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Badge>Config</Badge>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Konfigurasi Lot Number</SheetTitle>
          <SheetDescription>
            Konfigurasi ini dapat mempermudah dan mempercepat proses pengisian
            data.
          </SheetDescription>
        </SheetHeader>
        <div className="divide-y-2 flex flex-col gap-4">
          <div>
            <Label htmlFor="prefix">Kata Depan (Prefix)</Label>
            <Input
              type="text"
              id="prefix"
              ref={prefixRef}
              placeholder="Contoh: CPB24E.Ahmad"
            />
          </div>
          <div>
            <Select onValueChange={(e) => setLocation(e)}>
              <SelectTrigger>
                <SelectValue placeholder="Lokasi Default" />
              </SelectTrigger>
              <SelectContent>
                {locationSite.map((ls) => (
                  <SelectItem value={ls.description}>{ls.description}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <SheetFooter>
          <SheetClose>
            <div className="my-2">
              <Button onClick={savePrefix}>Simpan</Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
