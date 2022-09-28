import React, {useState} from "react";
import HeaderLogged from "../../components/headerLogged";
import SideBar from "../../components/sideBar";

const Layout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="">
            <HeaderLogged/>
            <div className="layout-main">
                <SideBar collapsed={collapsed} setCollapsed={setCollapsed}/>
                <div style={{marginLeft: collapsed ? 90 : 290}} className="layout-content">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Layout
