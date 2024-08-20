import { BsMenuButtonWideFill } from "react-icons/bs";
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

export function MenuTrigger() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline">
          {" "}
          <BsMenuButtonWideFill />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            PT. Alumindo Alloy Abadi
          </SheetDescription>
        </SheetHeader>
        <div>
            Ini nanti menunya di sini
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Tutup</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
