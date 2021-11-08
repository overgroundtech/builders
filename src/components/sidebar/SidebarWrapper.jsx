import React from 'react';
import Sidebar from "./Sidebar";
import SidebarMobile from "./SiderbarMobile";


export default function SidebarWrapper() {
    return (
        <>
            <Sidebar />
            <SidebarMobile />
        </>
    )
}