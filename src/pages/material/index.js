import React, {useEffect, useState} from 'react'
import Layout from "../layout";
import {useParams} from "react-router-dom";
import {AiOutlinePlus} from "react-icons/ai";
import {GiSettingsKnobs} from "react-icons/gi";
import MaterialSingle from "../../components/MaterialSingle";
import './index.css'

const Material = () => {
    const {type} = useParams()
    const [name,setName] = useState(false)
    useEffect(() => {
       switch (type){
           case "book":
               setName('Book');
               return
           case "notes":
               setName("Notes");
               return;
           case "solutions":
               setName("Solutions");
               return;
       }
    },[type])
    if(name === false){
        return (
            <div>
                Not Found
            </div>
        )
    }
    return (
            <div className="container-layout">
            <div className={"top-bar-mat pb-2"}>
                <h4 className="h3 font-weight-bolder">Study Material - {name}</h4>
                <div className='d-flex'>
                    <div className="rounded-button mr-3">
                        <AiOutlinePlus size={16} style={{marginLeft: -10}} color={'#2d71f1'} className=""/>
                        <h6 style={{fontSize: '13px', paddingTop: '9px'}}
                            className="ml-1 font-weight-bolder">Add</h6>
                    </div>
                    <div className="rounded-button">
                        <GiSettingsKnobs size={16} style={{marginLeft: -10}} color={'#2d71f1'}/>
                        {/*<img className="btn-image"*/}
                        {/*     src="https://dvvwf08ea9qan.cloudfront.net/student/assets/image/filtergrid.svg" alt=""/>*/}
                        <h6 style={{fontSize: '14px', paddingTop: '8px'}}
                            className="ml-1 font-weight-bolder">Filter</h6>
                    </div>
                </div>
            </div>
            <ul className="list-group">
                <MaterialSingle date={'22 Aug-22'} subject="Maths" name="Allen Module 11th 1st"/>
                <MaterialSingle date={'22 Aug-22'} subject="Maths" name="Allen Module 11th 1st"/>
                <MaterialSingle date={'22 Aug-22'} subject="Maths" name="Allen Module 11th 1st"/>
                <MaterialSingle date={'22 Aug-22'} subject="Maths" name="Allen Module 11th 1st"/>
                <MaterialSingle date={'22 Aug-22'} subject="Maths" name="Allen Module 11th 1st"/>
            </ul>
        </div>
    )
}
export default Material