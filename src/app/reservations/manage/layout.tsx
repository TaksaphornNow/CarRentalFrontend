import { ReactNode } from "react";

export default function ManageReservation ({children, dashboard, manage}:{children:ReactNode, dashboard:React.ReactNode, manage:React.ReactNode}) {
    return (
        <div className="flex flex-col w-full">
            {children}
            {dashboard}
            {manage}
        </div>
    )
}