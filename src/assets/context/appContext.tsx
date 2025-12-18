import { useOutletContext } from "react-router"
import type { outletContextProp } from "../../../types/context"

export function appOutletContext(){
    return useOutletContext<outletContextProp>()
}
