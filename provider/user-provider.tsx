"use client"
import React from "react"
import { UserContextProvider } from "@/hooks/userUser"


const UserProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    )
}

export default UserProvider