import React from "react";
import {AiOutlineEdit, AiOutlineEye} from "react-icons/ai";
import {FaRegLightbulb} from "react-icons/fa";

const MaterialSingle = ({data = {}, name, date, subject}) => {
    return (
        <div className="layout-material-single">
            <div className="single-material-item">
                <div className="material_img">
                    <img
                        src="https://dvvwf08ea9qan.cloudfront.net/student/assets/image/studymaterial.png" alt=""/>
                </div>
                <h6 className="material_name">{name}</h6>

                <h6 className="material_date">{date}</h6>
                <span className="badge mr-2 badge-pill p-2 font-weight-bolder badge-success"
                      style={{fontSize: '12px', maxWidth: '80px'}}>
                        {subject}
                    </span>
                <div className="d-flex justify-content-end">
                        <span
                            className="badge mr-2 d-flex justify-content-center align-items-center badge-pill p-2 font-weight-bolder badge-btn "
                            style={{fontSize: '12px', width: '85px'}}>
                            <AiOutlineEye className="mr-1" style={{fontSize: '12px'}}/>
                            View
                        </span>
                    <span
                        className="badge mr-2 d-flex justify-content-center align-items-center badge-pill p-2 font-weight-bolder badge-btn "
                        style={{fontSize: '12px', width: '85px'}}>
                            <FaRegLightbulb className="mr-1" style={{fontSize: '12px'}}/>
                            Solutions
                        </span>
                    <span
                        className="badge mr-2 d-flex justify-content-center align-items-center badge-pill p-2 font-weight-bolder badge-btn "
                        style={{fontSize: '12px', width: '85px'}}>
                            <AiOutlineEdit className="mr-1" style={{fontSize: '12px'}}/>
                            Edit
                        </span>
                </div>
            </div>

        </div>

    )
}
export default MaterialSingle