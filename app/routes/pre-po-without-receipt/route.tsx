import { ClientOnly } from "remix-utils/client-only"
import PopupAddData from "./PopupAddData"
import { MetaFunction } from "@remix-run/node"

export const meta:MetaFunction = () => [{
    title:"Pre Po Without Receipt"
}]

export default function PrePoWithoutReceipt(){
    return(
        <ClientOnly>
            {() => <PopupAddData /> }
        </ClientOnly>
    )
}