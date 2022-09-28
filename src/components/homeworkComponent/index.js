import React, {useState} from 'react'
import {RiBookletLine, RiPencilLine} from "react-icons/ri";
import {AiOutlineArrowDown} from "react-icons/ai";
import './index.css'
import {BsArrowDownCircle, BsArrowUp, BsArrowUpCircle} from "react-icons/bs";

const Exercise = ({name, data, test = 2, backlog}) => {
    return (
        <div className={`${backlog ? 'row' : 'd-flex'} align-items-baseline mb-2`}>
            {!backlog && <h6 className="font-weight-bolder " style={{minWidth: '93px'}}>Exercise {name} =</h6>}
            {new Array(15).fill(0).map((value, index) => {
                let completed = index % test === 0 || index <= test * 2;
                return (
                    <span
                        className={`badge ml-2 rounded-padding mb-2 badge-question badge-pill badge-${completed ? 'success' : 'light'} border`}>{index + 1}</span>)
            })}
        </div>
    )
}

const SingleHomework = ({
                            chapter,
                            subject,
                            date,
                            questions,
                            completed = false,
                            backlog = false,
                            data = {},
                            extras = []
                        }) => {
    const month = 'Sep'
    const date_ = '6'
    const diff = 26
    const [collapsed, setCollapsed] = useState(true)
    return (
        <li className="hww-single-contain align-items-baseline border-bottom pb-3 mb-4">
            <div onClick={() => setCollapsed(prev => !prev)} className="left-box">
                <p className='h6 font-weight-bolder'>{date_}</p>
                <p className='h6 font-weight-bolder'>{month}</p>

            </div>
            <div className="ml-4">
                <div className="">
                    <div className="d-flex">
                        <h6 className='h5 font-weight-bolder'>{chapter}</h6>
                        <RiPencilLine size={18} className='ml-2 down-arrow text-danger'/>
                    </div>

                    <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-danger"
                          style={{fontSize: '.75rem'}}>{completed ? 'Done' : 'Not Done'}</span>
                    <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-tag"
                          style={{fontSize: '.75rem',}}>{diff} Days ago </span>
                    <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-tag"
                          style={{fontSize: '.75rem'}}>{subject}</span>
                    {extras.map(item => (
                        <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-tag"
                              style={{fontSize: '.75rem',}}>{item} </span>
                    ))}
                    <span className="badge  mr-2 badge-pill p-2 font-weight-bolder badge-tag"
                          style={{fontSize: '.75rem'}}>{questions} Questions</span>
                </div>

                <div className={`mt-4 ${collapsed ? 'hw-hide' : 'hw-show'} hw-down`}>
                    <Exercise backlog={backlog} name={'0-1'}/>
                    {!backlog &&
                        <>
                            <Exercise backlog={backlog} test={3} name={'0-2'}/>
                            <Exercise backlog={backlog} test={4} name={'S-1'}/>
                        </>

                    }
                </div>
                <div className="">
                    <div className="float-button-down">
                        {collapsed ?
                            <BsArrowDownCircle className="down-arrow" onClick={() => setCollapsed(prev => !prev)}
                                               size={18}/> :
                            <BsArrowUpCircle className="down-arrow" onClick={() => setCollapsed(prev => !prev)}
                                             size={18}/>}
                    </div>
                </div>
            </div>
        </li>)
}
export default SingleHomework