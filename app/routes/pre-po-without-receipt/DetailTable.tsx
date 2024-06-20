export default function DetailTable({isActivated} : {isActivated:boolean}){
    return(
        <div className={isActivated ? "block": "hidden"}>
            Detail table
        </div>
    )
}