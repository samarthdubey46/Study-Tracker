import React, {useState} from 'react'
import Layout from "../layout";
import './index.css'
import {AiOutlinePlusSquare} from "react-icons/ai";
import {CalendarComponent} from "@syncfusion/ej2-react-calendars";
import SingleHomework from "../../components/homeworkComponent";


const Homework = () => {
    const [value, onChange] = useState(new Date());
    const [time, setTime] = useState('afternoon')
    return (
        <div id="Homework" className="homework-container mt-0 ml-0">
            <div className="left-hww border-right p-0">
                <div className="left-top">
                    <div style={{minHeight: '120px'}} className="d-flex p-3 ">
                        <img className="h-50"
                             src="https://dvvwf08ea9qan.cloudfront.net/student/assets/image/sunrise.svg" alt=""/>
                        <div className="ml-3">
                            <h4 className="text-white mr-2 quote mb-0">Good Afternoon</h4>
                            <h4 className="font-weight-bold quote text-white mb-1 mt-0 ">Welcome Samarth</h4>
                            <p className="text-white ml-1 quote">Tuesday 2 September</p>
                        </div>
                    </div>
                </div>
                <div className="left-bottom mt-4">
                    <CalendarComponent onChange={onChange} value={value}/>
                </div>
            </div>
            <div className="right-hww pl-4 pt-3">
                <div className="d-flex border-bottom">
                    <h3 className="font-weight-bold quote mr-2">Homework</h3>
                </div>
                <ul className="list-group ml-0 mt-4">
                    <SingleHomework extras={[]} chapter="Sequence and Series" subject="Maths" questions={30}/>
                    <SingleHomework extras={[]} chapter="Newtons Laws of Motion" subject="Physics" questions={30}/>

                </ul>
            </div>
        </div>
    )
}
export default Homework

// <div className="d-flex align-items-baseline">
//                     <h3 className="text-center font-weight-bold quote mr-2">Today's Homework</h3>
//                     {/*<AiOutlinePlusSquare className="h5" size={20}/>*/}
//                 </div>
//                 <div className="mt-1  bg-white">
//                     <table className="table mb-4 table-bordered">
//                         <thead className="table-dark">
//                         <tr>
//                             <th scope="col">No.</th>
//                             <th scope="col">Chapter</th>
//                             <th scope="col">Exercise</th>
//                             <th scope="col">Total Questions</th>
//                             <th scope="col">Actions</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         <tr>
//                             <th scope="row">1</th>
//                             <td>Sequence and series</td>
//                             <td>O-1</td>
//                             <td>15</td>
//                             <td>
//                                 <button type="submit" className="btn btn-danger">Backlog</button>
//                                 <button type="submit" className="btn btn-success ml-1">Finished</button>
//                             </td>
//                         </tr>
//                         <tr>
//                             <th scope="row">2</th>
//                             <td>Newtons Law of motion</td>
//                             <td>O-1</td>
//                             <td>20</td>
//                             <td>
//                                 <button type="submit" className="btn btn-danger">Backlog</button>
//                                 <button type="submit" className="btn btn-success ml-1">Finished</button>
//                             </td>
//                         </tr>
//                         <tr>
//                             <th scope="row">3</th>
//                             <td>Chemical Bonding</td>
//                             <td>O-1</td>
//                             <td>15</td>
//                             <td>
//                                 <button type="submit" className="btn btn-danger">Backlog</button>
//                                 <button type="submit" className="btn btn-success ml-1">Finished</button>
//                             </td>
//                         </tr>
//                         <tr>
//                             <th scope="row">4</th>
//                             <td>Mole Concept</td>
//                             <td>O-1</td>
//                             <td>15</td>
//                             <td>
//                                 <button type="submit" className="btn btn-danger">Backlog</button>
//                                 <button type="submit" className="btn btn-success ml-1">Finished</button>
//                             </td>
//                         </tr>
//                         </tbody>
//                     </table>
//                 </div>