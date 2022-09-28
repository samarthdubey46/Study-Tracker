import {MdOutlineDownloadDone} from "react-icons/md";
import {ImCross} from "react-icons/im";
import React from "react";

export const LabelValue = ({label, value, color, first = false}) => {
    return (
        <div className={"d-flex align-items-center mr-1" + `${first ? '' : ' ml-0'}`}>
            <h6 className="mr-2 sub-sub-head">{label} : </h6>
            <h6 style={{fontSize: '14px'}} className={`text-${color} font-weight-bolder`}>{value}</h6>
        </div>
    )
}
export const StatsRow = ({data = [], first = false, last = false}) => {
    return (
        <div
            className={`d-flex justify-content-between align-items-center ${last ? '' : 'border-bottom'}`}>
            {data.map((item, index) => {
                let color = ''
                if (item.success !== null && item.success !== undefined) {
                    if (item.success) color = 'success'
                    else color = 'danger'
                }
                return (
                    <div
                        className={` p-3 text-center col-${12 / data.length}`}>
                        <div
                            className={`h6 mb-0 ${data.length === 1 ? 'font-weight-bolder' : ''} text-${color}`}>{item.value}</div>
                        <span className="small text-gray">{item.label}</span>
                    </div>
                )
            })}
        </div>
    )
}
export const Legends = ({background, label, value}) => {
    return (
        <div className={'d-flex pt-1 pb-1 align-items-center'}>
            <h6>
                <div className="mr-2" style={{
                    width: '14px',
                    height: '14px',
                    backgroundColor: background
                }}></div>
            </h6>
            <h6 className="mr-2 sub-sub-head">{label}</h6>
            <h6 style={{fontSize: '14px'}} className={`font-weight-bolder`}>{value}</h6>
        </div>
    )
}
export const TableChapter = ({chapters = []}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Chapter Name</th>
                <th scope="col">Theory</th>
                <th scope="col">Revision</th>
                <th scope="col">Total Questions</th>
                <th scope="col">Attempted Questions</th>
                <th scope="col">Correct Questions</th>
                <th scope="col">Difficult Questions</th>
                <th scope="col">Backlog Questions</th>

            </tr>
            </thead>
            <tbody>
            {chapters.map(item => (
                <tr className={`${!item.theory ? '' : ''}`}>
                    <td>{item.name}</td>
                    <td>{item.theory ? <MdOutlineDownloadDone color={'green'} size={20}/> :
                        <ImCross color={'red'} size={16}/>}</td>
                    <td>{item.revision}</td>
                    <td>{item.total}</td>
                    <td>{item.attempted}</td>
                    <td className='text-success'>{item.correct}</td>
                    <td className='text-orange'>{item.difficult}</td>
                    <td className='text-danger'>{item.backlog}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}