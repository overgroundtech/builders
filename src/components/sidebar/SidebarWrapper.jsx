import React, {useContext} from 'react';
import Sidebar from "./Sidebar";
import SidebarMobile from "./SiderbarMobile";
import {CategoryContext} from "../../Context/CategoryContext";

export default function SidebarWrapper() {
    const {catProds} = useContext(CategoryContext);

    return (
        <>
            <Sidebar catProds={catProds} />
            <SidebarMobile catProds={catProds} />
        </>
    )
}