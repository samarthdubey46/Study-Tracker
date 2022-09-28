import React from "react";
import {useParams} from "react-router-dom";
import './index.css'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie, Doughnut} from 'react-chartjs-2';
import {LabelValue, Legends, StatsRow, TableChapter} from "./components";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import BootTooltip from "react-bootstrap/Tooltip";
import {AiOutlinePlus} from "react-icons/ai";
import {BsBook} from "react-icons/bs";
import {BiBookAdd} from "react-icons/bi";

ChartJS.register(ArcElement, Tooltip, Legend);
const HomeworkList = ({tasks = []}) => {
    return (
        <>
            {tasks.map((item, index) => (
                <div className="mt-1 mb-2 hw-single-task-grid border-bottom">
                    <OverlayTrigger placement="top" overlay={
                        <BootTooltip>{item.chapter}</BootTooltip>
                    }>
                        <h6><p className="hw-task-name"><span
                            className="font-weight-bolder">{index + 1}.</span> {item.task}
                        </p></h6>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={
                        <BootTooltip>{item.chapter}</BootTooltip>
                    }>
                        <h6 className=''>{item.exercise}</h6>
                    </OverlayTrigger>
                    <h6 className='text-danger'><p>{item.status}</p></h6>
                    <div className="d-flex align-items-center justify-content-end">
                        <div
                            className="border-0 btn-success badge mr-2 d-flex justify-content-center align-items-center badge-pill p-2 font-weight-bolder badge-btn "
                            style={{fontSize: '12px', width: '75px',}}>
                            Complete
                        </div>
                        <div
                            className="border-0 btn-danger badge mr-2 d-flex justify-content-center align-items-center badge-pill p-2 font-weight-bolder badge-btn "
                            style={{fontSize: '12px', width: '75px'}}>
                            Backlog
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
const Backlog = ({tasks = []}) => {
    return (
        <>
            {tasks.map((item, index) => (
                <div className="mt-1 mb-2 backlog-single-task-grid border-bottom">
                    <h6><p className="hw-task-name"><span
                        className="font-weight-bolder">{index + 1}.</span> {item.task}
                    </p></h6>
                    <h6 data-tip="chapterTip" className=''>{item.chapter}</h6>
                    <h6 className=''>{item.exercise}</h6>
                    <h6 className='text-danger'><p>{item.deadline}</p></h6>

                    <div className="d-flex align-items-center justify-content-end">
                        <div
                            className="border-0 btn-success badge mr-2 d-flex justify-content-center align-items-center badge-pill p-2 font-weight-bolder badge-btn "
                            style={{fontSize: '12px', minWidth: '75px',}}>
                            Complete
                        </div>
                        <div
                            className="border-0 btn-danger badge mr-2 d-flex justify-content-center align-items-center badge-pill p-2 font-weight-bolder badge-btn "
                            style={{fontSize: '12px', minWidth: '75px'}}>
                            Extend Deadline
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
const StudySubject = () => {
    const {subject} = useParams()
    const data = {
        labels: ['Correct', 'Wrong', 'Unattempted',],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3,],
                backgroundColor: [
                    'rgba(2,237,67,.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, .2)',
                ],
                borderColor: [
                    'rgba(2,237,67,1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className="container-layout">
            <div className="card-subject p-3">
                <div className="d-flex align-items-baseline justify-content-between border-bottom">
                    <div className="d-flex align-items-center">
                        <h3 className="font-weight-bolder mr-4">Mathematics</h3>
                        <h4 className="small-date pl-2 border-left mt-1 " style={{height: 20}}>11 September 2022</h4>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="rounded-button btn-large mr-3 pl-3 pr-3">
                            <BiBookAdd size={18} color={'#2d71f1'} className="mr-1"/>
                            <h6 style={{fontSize: '16px', paddingTop: '9px'}}
                                className="ml-1 font-weight-bolder">Add Material</h6>
                        </div>
                        <div className="rounded-button btn-large mr-3 pl-3 pr-3">
                            <BsBook size={18} color={'#2d71f1'} className="mr-1"/>
                            <h6 style={{fontSize: '16px', paddingTop: '9px'}}
                                className="ml-1 font-weight-bolder">Study Session</h6>
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-4 justify-content-between ml-2 mr-2">
                    <LabelValue label="Questions Solved" first value={50} color="success"/>
                    <LabelValue label="Completed Chapter" value={4} color="success"/>
                    <LabelValue label="Questions Attempted" value={80} color="success"/>
                    <LabelValue label="Skipped Questions" value={30} color="danger"/>
                    <LabelValue label="Backlog Chapters" value={2} color="danger"/>
                    <LabelValue label="Backlog Questions" value={15} color="danger"/>
                </div>
            </div>
            <div className="subject-second-row mt-3 mb-3">
                <div className="card-subject grid-col p-3">
                    <h4 className="font-weight-bolder mb-3">Study Statistics</h4>
                    <StatsRow first data={[
                        {value: '3 Hours', label: 'Target Study Time', success: null},
                        {value: '2 Hours', label: 'Today Study Time', success: false},
                        {value: '3.1 Hours', label: 'Average This Week', success: true},
                    ]}/>
                    <StatsRow data={[
                        {value: '5 Questions', label: 'Skipped', success: null},
                        {value: '14 Questions', label: 'Completed Homework', success: true},
                        {value: '5 Questions', label: 'Wrong Homework', success: false},
                    ]}/>
                    <StatsRow last data={[
                        {value: '5', label: 'Completed Chapters', success: null},
                        {value: '3', label: 'Revised Chapters', success: true},
                        {value: '2', label: 'Not Revised', success: false},
                    ]}/>
                </div>
                <div className="card-subject grid-col p-3">
                    <h4 className="font-weight-bolder mb-3">Last Solved</h4>
                    <StatsRow first data={[
                        {value: 'Sequence And Series', label: 'Chapter', success: null},
                    ]}/>
                    <StatsRow first data={[
                        {value: '0-1', label: 'Exercise', success: null},
                    ]}/>
                    <StatsRow last data={[
                        {value: '20 Questions', label: 'Remaining Questions', success: null},
                    ]}/>
                </div>
                <div className="card-subject p-3">
                    <h4 className="font-weight-bolder mb-3">Question Analysis</h4>
                    <Doughnut style={{maxWidth: '600px'}} options={{
                        padding: "0px",
                        responsive: true,
                        maintainAspectRatio: false,
                        defaultFontSize: "14px",
                        legend: {
                            display: true,
                        },
                        plugins: {
                            datalabels: {
                                color: '#000000',
                                anchor: "start",
                                align: "end",
                                formatter: function (value, context) {
                                    return context.chart.data.labels[context.dataIndex];
                                }
                            }
                        }
                    }} data={data}/>
                    <div className="pt-4">
                        <Legends background={'rgba(0,246,255,0.5)'} label={'Accuracy'} value={'54.5%'}/>
                        <Legends background={'rgba(2,237,67,.5)'} label={'Correct Questions'} value={12}/>
                        <Legends background={'rgba(255, 99, 132, 0.5)'} label={'Incorrect Questions'} value={19}/>
                        <Legends background={'rgba(255, 206, 86,.5)'} label={'Unattempted Questions'} value={3}/>
                    </div>
                </div>
            </div>
            <div className="subject-third-row mb-3">
                <div className="card-subject p-3">
                    <div className="d-flex align-items-center border-bottom pb-1 justify-content-between">
                        <div className="d-flex align-items-center">
                            <h4 className="font-weight-bolder mr-3">Today's Homework</h4>
                            <h4 className="chapter-current">Trigonometric Ratios</h4>
                        </div>
                        <div className="rounded-button border- btn-small mr-3">
                            <AiOutlinePlus size={16} style={{marginLeft: -10}} color={'#2d71f1'} className=""/>
                            <h6 style={{fontSize: '13px', paddingTop: '9px'}}
                                className="ml-1 font-weight-bolder">Add</h6>
                        </div>
                    </div>
                    <div className="ml-1 mr-1 mt-3">
                        <HomeworkList tasks={[
                            {
                                task: '1 to 15',
                                status: 'Pending',
                                chapter: 'Trigonometric Ratios',
                                exercise: 'Do yourself 3'
                            },
                            {
                                task: '1 to 20',
                                status: 'Pending',
                                chapter: 'Trigonometric Ratios',
                                exercise: 'Do yourself 5'
                            },
                            {
                                task: '1 to 12',
                                status: 'Pending',
                                chapter: 'Trigonometric Ratios',
                                exercise: 'Exercise O-1'
                            },

                        ]}/>
                    </div>
                </div>
                <div className="card-subject p-3">
                    <div className="d-flex align-items-center border-bottom pb-1">
                        <h4 className="font-weight-bolder mr-3">Backlog Monitor</h4>
                        <h4 className="small-date  ">27 September 2022</h4>
                    </div>
                    <div className="ml-1 mr-1 mt-3">
                        <Backlog tasks={[
                            {
                                task: '1 to 15',
                                chapter: 'Compound Angle',
                                exercise: 'Do Yourself 12',
                                deadline: '30 Sep'
                            },
                            {
                                task: '1 to 20',
                                chapter: 'Sequence And Series',
                                exercise: 'Exercise O-1',
                                deadline: '30 Sep'
                            },
                            {task: '1 to 40', chapter: 'Logarithm', exercise: 'Exercise J-M', deadline: '30 Sep'},

                        ]}/>
                    </div>
                </div>
            </div>
            <div className="card-subject p-3">
                <h4 className="font-weight-bolder mb-3">Chapter Overview</h4>
                <TableChapter chapters={[
                    {
                        name: 'Fundamentals Of Maths',
                        total: 60,
                        attempted: 40,
                        correct: 20,
                        difficult: 5,
                        backlog: 20,
                        theory: true,
                        revision: 1
                    },
                    {
                        name: 'Quadratic Equations',
                        total: 60,
                        attempted: 40,
                        correct: 20,
                        difficult: 6,
                        backlog: 20,
                        theory: true,
                        revision: 1
                    },
                    {
                        name: 'Sequence And Series',
                        total: 60,
                        attempted: 40,
                        correct: 20,
                        difficult: 10,
                        backlog: 20,
                        theory: false,
                        revision: 0
                    },
                ]}/>
            </div>
        </div>
    )
}
export default StudySubject