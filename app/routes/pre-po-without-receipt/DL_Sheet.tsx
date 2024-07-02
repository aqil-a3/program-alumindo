import React, { SetStateAction, useRef } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
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

export default function DetailLotNumberConfig({
  setPrefix,
}: {
  setPrefix: React.Dispatch<SetStateAction<string>>;
}) {
  const prefixRef = useRef<null | HTMLInputElement>(null);

  const savePrefix = () => {
    if (prefixRef && prefixRef.current) {
      return setPrefix( prefixRef.current.value);
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
        <div className="divide-y-2">
          <Label htmlFor="prefix">Kata Depan (Prefix)</Label>
          <Input
            type="text"
            ref={prefixRef}
            placeholder="Contoh: CPB24E.Ahmad"
          />
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
