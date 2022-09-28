//import useState hook to create menu collapse state
import React, {useEffect, useState} from "react";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent, SubMenu
} from "react-pro-sidebar";

import {GiBlackBook} from 'react-icons/gi'
import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle, FiArrowRightCircle
} from "react-icons/fi";
import {RiPencilLine} from "react-icons/ri";
import "react-pro-sidebar/dist/css/styles.css";
import "./style.css";
import {BsClock} from "react-icons/bs";
import {MdPendingActions} from "react-icons/md";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import {Link, useLocation, useNavigate} from "react-router-dom";

const SideBar = ({collapsed, setCollapsed}) => {
    const [rtl, setRTL] = useState(false)
    const [current, setCurrent] = useState('home')
    const location = useLocation()
    const navigate = useNavigate()
    const menuIconClick = () => {
        collapsed ? setCollapsed(false) : setCollapsed(true);
    };
    useEffect(() => {
        if (location.pathname === '/')
            setCurrent('home')
        else {
            let arr = location.pathname.slice(1)
            setCurrent(arr)
        }
    }, [location]);
    const SideBarItem = ({Icon = <></>,children,path = null}) => {
        let path_ = children.toLowerCase()
        if(path !== null) path_ = path
        return(
        <MenuItem onClick={() => navigate(path_)} active={current === path_}
                  icon={Icon}>{children}</MenuItem>)
    }

    return (
        <>
            <ProSidebar id='header' collapsed={collapsed}>
                <SidebarHeader>
                    <div className="closemenu" onClick={menuIconClick}>
                        {/* changing menu collapse icon on click */}
                        {collapsed ? (
                            <FiArrowRightCircle/>
                        ) : (
                            <FiArrowLeftCircle/>
                        )}
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu subMenuBullets iconShape="square">
                        <SideBarItem Icon={<FiHome size={16}/>}>Home</SideBarItem>
                        <SideBarItem Icon={<BsClock size={16}/>}>Study</SideBarItem>
                        <SideBarItem Icon={<RiPencilLine size={16}/>}>Homework</SideBarItem>
                        <SideBarItem Icon={<MdPendingActions size={16}/>}>Backlog</SideBarItem>
                        <SubMenu style={{background: 'white'}} title="Material"
                                 icon={<GiBlackBook size={16}/>}>
                            <SideBarItem path={'material/book'}>Book</SideBarItem>
                            <SideBarItem path={'material/notes'}>Notes</SideBarItem>
                            <SideBarItem path={'material/solutions'}>Solutions</SideBarItem>

                        </SubMenu>
                        <SideBarItem Icon={<AiOutlineFundProjectionScreen size={16}/>}>Results</SideBarItem>

                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape="square">
                        <MenuItem icon={<FiLogOut/>}>Logout</MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </>
    );
}
export default SideBar