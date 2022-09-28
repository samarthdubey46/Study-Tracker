import React from 'react'
import Layout from "../layout";
import {SiAtom} from "react-icons/si";
import {CardSubject} from "../../components/card";
import CollapseMenu from "../../components/CollapseMenu";

const Study = () => {
    return (
        <div className="ml-1">
            <div className="d-flex justify-content-center pl-3">
                <CardSubject image="https://cdn-icons-png.flaticon.com/512/2847/2847532.png" subject="Maths"/>
                <CardSubject image="https://cdn-icons-png.flaticon.com/512/3081/3081530.png" subject="Physics"/>
                <CardSubject image="https://cdn-icons-png.flaticon.com/512/921/921764.png" subject="IOC"/>
                <CardSubject image="https://cdn-icons-png.flaticon.com/512/995/995344.png" subject="PC"/>
                <CardSubject image="https://cdn-icons-png.flaticon.com/512/1233/1233846.png" subject="OC"/>
            </div>
            <div className="mt-4">
                <h6 className="h2 font-weight-bold">Solved Chapters</h6>
                <div className="mt-3">
                    <div className="pb-4">

                        <CollapseMenu label="Maths">
                            <div className="ml-0 pt-2">
                                <ul>
                                    <li><h5 className='h5 font-weight-bold'>Fundamentals of Maths</h5></li>
                                    <li><h5 className='h5 font-weight-bold'>Quadratic Equations</h5></li>
                                    <li><h5 className='h5 font-weight-bold'>Logarithm</h5></li>
                                    <li><h5 className='h5 font-weight-bold'>Fundamentals of Maths</h5></li>
                                </ul>
                            </div>
                        </CollapseMenu>
                        <CollapseMenu label="Physics">
                            <div className="ml-0 pt-2">
                                <ul>
                                    <li><h5 className='h5 font-weight-bold'>Vector</h5></li>
                                    <li><h5 className='h5 font-weight-bold'>Kinematics</h5></li>
                                    <li><h5 className='h5 font-weight-bold'>NLM</h5></li>
                                </ul>
                            </div>
                        </CollapseMenu>
                        <CollapseMenu label="IOC">
                            <div className="ml-0 pt-2">
                                <ul>
                                    <li><h5 className='h5 font-weight-bold'>Quantum Numbers</h5></li>
                                    <li><h5 className='h5 font-weight-bold'>Periodic Table</h5></li>
                                </ul>
                            </div>
                        </CollapseMenu>
                        <CollapseMenu label="OC">
                            <div className="ml-0 pt-2">
                                <ul>
                                    <li><h5 className='h5 font-weight-bold'>Mole Concept</h5></li>
                                </ul>
                            </div>
                        </CollapseMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Study