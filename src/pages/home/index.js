import React, {useState} from "react";
import HeaderLogged from "../../components/headerLogged";
import SideBar from "../../components/sideBar";
import './index.css'
import CardHome from "../../components/card";
import Layout from "../layout";
import {BiTask} from "react-icons/bi";
import {RiBookletLine} from "react-icons/ri";

const Home = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <>
            <div className="container-fluid mt-3 ">
                <div style={{minWidth:'79vw'}} className="d-flex justify-content-center">
                    <CardHome label={'Physics Time'} thisWeek={1} today={2}/>
                    <CardHome label={'Maths Time'} thisWeek={1} today={2}/>
                    <CardHome label={'Chem Time'} thisWeek={2} today={1}/>
                    <CardHome label={'Questions '} total={50} unit={''} thisWeek={15} today={25}/>

                </div>
                <div className="mt-3">
                    <div className="">
                        <h4 className='h2 font-weight-bold mb-4'>Upcoming Tests</h4>
                        <ul className="list-group ml-0">
                            <li className="d-flex align-items-baseline border-bottom pb-3">
                                <div className="left-box">
                                    <p className='h6 font-weight-bolder'>25</p>
                                    <p className='h6 font-weight-bolder'>Sep</p>
                                </div>
                                <div className="ml-4">
                                    <div className="d-flex">
                                        <RiBookletLine size={18} className='mr-2 text-danger'/>
                                        <h6 className='h5 font-weight-bolder'>All India Allen Test (ACT)</h6>
                                    </div>
                                    <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-danger"
                                          style={{fontSize: '.75rem',}}>26 Days remain</span>
                                    <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-tag"
                                          style={{fontSize: '.75rem'}}>JEE Advance</span>
                                    <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-tag"
                                          style={{fontSize: '.75rem'}}>56 Questions</span>
                                    <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-tag"
                                          style={{fontSize: '.75rem'}}>3 hrs</span>

                                </div>
                            </li>
                            {/*<li className="d-flex align-items-baseline border-bottom pt-2 pb-3">*/}
                            {/*    <div className="left-box">*/}
                            {/*        <p className='h6 font-weight-bolder'>25</p>*/}
                            {/*        <p className='h6 font-weight-bolder'>Sep</p>*/}
                            {/*    </div>*/}
                            {/*    <div className="ml-4">*/}
                            {/*        <div className="d-flex">*/}
                            {/*            <RiBookletLine size={18} className='mr-2 text-danger'/>*/}
                            {/*            <h6 className='h5 font-weight-bolder'>All India Allen Test (ACT)</h6>*/}
                            {/*        </div>*/}
                            {/*        <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-danger"*/}
                            {/*              style={{fontSize: '.75rem',}}>26 Days remain</span>*/}
                            {/*        <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-tag"*/}
                            {/*              style={{fontSize: '.75rem'}}>JEE Advance</span>*/}
                            {/*        <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-tag"*/}
                            {/*              style={{fontSize: '.75rem'}}>56 Questions</span>*/}
                            {/*        <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-tag"*/}
                            {/*              style={{fontSize: '.75rem'}}>3 hrs</span>*/}

                            {/*    </div>*/}
                            {/*</li>*/}

                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home
