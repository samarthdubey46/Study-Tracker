import React from "react";
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useNavigate} from "react-router-dom";

const CardHome = ({label, today, thisWeek, total = 3, unit = 'hr'}) => {
    return (
        <div className="col-xl-3 col-lg-4 mb-4">
            <div className="bg-white rounded-lg shadow p-5">
                <h2 className="h5 font-weight-bold text-center mb-4">{label}</h2>
                <div className="text-center">
                    <CircularProgressbar styles={
                        {
                            root: {height: '9rem'},
                            text: {fill: 'black', fontSize: '1.2rem'}

                        }

                    } value={today} maxValue={total}
                                         text={`${today} ${unit}`}
                                         strokeWidth={2}/>
                </div>
                <div className="row text-center mt-4">
                    <div className="col-6 border-right">
                        <div className="h4 font-weight-bold mb-0">{today}</div>
                        <span className="small text-gray">Today</span>
                    </div>
                    <div className="col-6">
                        <div className="h4 font-weight-bold mb-0">{thisWeek}</div>
                        <span className="small text-gray">Yesterday</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const CardSubject = ({image,subject}) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(subject.toLowerCase())} style={{minWidth: '15vw'}} className="up-effect rounded-lg card text-center card-home col-xl-2 col-lg-4 mb-3 col-sm-12 mr-3 ">
            <div className="d-flex justify-content-center align-items-center card-img-top mb-1 mt-4">
                <img className="" style={{height: 100, width: 100}}
                     src={image} alt=""/>
            </div>
            <div className="card-body">
                <h5 className="card-title h4 text-center font-weight-bolder ">{subject}</h5>
                <p className="card-text"><small className="text-muted">Last studied 1 day ago</small></p>
            </div>
        </div>
    )
}
export default CardHome