import Shortcut from "./Shortcut";

export default function DashboardBody(){
return(
    <div className="py-8">
        <Shortcut />
        <div className="grid grid-cols-3">
            <div>Live Chat</div>
            <div>Notifikasi</div>
            <div>Aktifitas Terakhir</div>
        </div>
    </div>
)
}