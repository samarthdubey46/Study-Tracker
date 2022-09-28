import React, {useState} from "react";
import {AiFillCaretDown, AiFillCaretRight} from "react-icons/ai";

const CollapseMenu = ({label, children,small = false}) => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div className="">
            <div className="card">
                <div onClick={() => setCollapsed(prev => !prev)} className={`card-header d-flex align-items-baseline ${small ? 'pl-4' : ''}`}
                     id="headingOne">
                    <h4 className={`mb-0 font-weight-bold mr-2 ${small ? 'h5' : ''}`}>{label}</h4>
                    {collapsed ? <AiFillCaretRight/> : <AiFillCaretDown/>}
                </div>

                <div className={`close-table shadow ${collapsed ? '' : 'show'}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default CollapseMenu