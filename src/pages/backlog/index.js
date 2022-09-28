import React, {useEffect, useState} from 'react'
import {CalendarComponent} from "@syncfusion/ej2-react-calendars";
import SingleHomework from "../../components/homeworkComponent";
import './index.css'

const Backlog = () => {
    const subjects = [
        "Maths",
        "Physics",
        "IOC",
        "PC",
        "OC"
    ]
    const topics = {
        "Maths": ['FOM', 'Quadratic', 'Logarithm', 'Sequence'],
        "Physics": ['Vector', 'Kinematics 1-D', 'Kinematics 2-D', 'NLM'],
        "IOC": ['Quantum Number', 'Periodic Table', 'Chemical Bonding',],
        "PC": ['Mole Concept',],
        "OC": []

    }
    const [subtopicsSelected, setSelectedSubTopic] = useState([])
    const [currentSub, setCurrentSub] = useState("Maths")
    const OnPressSubTopic = (id) => {
        setSelectedSubTopic(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    useEffect(() => {
        setSelectedSubTopic([])
    }, [currentSub]);

    return (
        <div id="Homework" className="homework-container mt-0 ml-0">
            <div className="left-hww border-right p-0">
                <div className="backlog-left-top">
                    <div style={{minHeight: '120px'}} className="d-flex p-3 ">
                        <img className="h-50"
                             src="https://dvvwf08ea9qan.cloudfront.net/student/assets/image/sunrise.svg" alt=""/>
                        <div className="ml-3">
                            <h4 className="font-weight-bold quote text-white mb-1 mt-0 ">Hola!! Samarth</h4>
                            <p className="text-white ml-1 quote">Tuesday 2 September</p>
                        </div>
                    </div>
                </div>
                <div className="backlog-left-bottom mt-4 ">
                    <h4 className="font-weight-bold  mb-2 ml-1">Subjects</h4>
                    <ul className="list-group pb-2">
                        {subjects.map((item, index) => (
                            <li onClick={() => setCurrentSub(item)}
                                className={`list-group-item cursor-pointer ${item === currentSub ? 'active' : ''} d-flex justify-content-between align-items-center`}>
                                <span className="sub-text">{item}</span>
                                <span className="badge badge-tag badge-pill">{index ** 2 + 15}</span>
                            </li>
                        ))}
                    </ul>
                    <hr/>
                    <div className="mt-2">
                        <h4 className="font-weight-bold  mb-2">Topics</h4>
                        <div className="">
                            {topics[currentSub].map((item, index) => (
                                <div onClick={() => OnPressSubTopic(index)}
                                     className={`badge  badge-pill badge-subject mr-1 mb-2 ${subtopicsSelected.includes(index) ? 'selected-badge' : ''}`}>{item}
                                </div>
                            ))}
                            {topics[currentSub].length === 0 && (
                                <h5 className="ml-1 mt-3">No Topics Started</h5>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-hww pl-4 pt-3">
                <h3 className="font-weight-bold quote mr-2">Backlog</h3>
                <ul className="list-group ml-0 mt-4">
                    <SingleHomework extras={['Sequence and series']} backlog chapter="Exercise 0-1" subject="Maths"
                                    questions={30}/>

                </ul>
            </div>
        </div>
    )
}
export default Backlog