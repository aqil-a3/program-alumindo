import { Button } from "~/components/ui/button";

export default function Shortcut(){
    return(
        <div className="w-4/5 bg-white h-48 mx-auto rounded-xl">
            <h1 className="text-center font-bold underline">Shortcut</h1>
            <div className="flex justify-center gap-4 flex-wrap p-4">
                <Button>Pre Po Without Receipt</Button>
                <Button>Inventory Report Detail Log</Button>
                <Button>WO Material Request</Button>
                <Button>WO Component Issue</Button>
                <Button>WO Component Return</Button>
                <Button>WO Receipt</Button>
            </div>
        </div>
    )
}