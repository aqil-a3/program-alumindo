import { MenuTrigger } from "./menu";

export default function DashboardHeader(){
    return(
        <div className="grid grid-cols-[5%_auto]">
        <MenuTrigger />
        <h1 className="text-center text-3xl font-bold underline">
          Selamat Datang User!
        </h1>
      </div>
    )
}