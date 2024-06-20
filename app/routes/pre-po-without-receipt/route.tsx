import { ClientOnly } from "remix-utils/client-only"
import PopupAddData from "./PopupAddData"

export default function PrePoWithoutReceipt(){
    return(
        <ClientOnly>
            {() => <PopupAddData /> }
        </ClientOnly>
    )
}