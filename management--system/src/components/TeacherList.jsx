import React from "react";
import "../styles/teacherlist.css";
import Image1 from "../assets/image.png"

const teacher = [
    {
        Image: Image1,
        name: "Prof. Abelon Findal",
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        Image: Image1,
        name: "Prof. Abelon Findal",
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        Image: Image1,
        name: "Prof. Abelon Findal",
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        Image: Image1,
        name: "Prof. Abelon Findal",
        duration: '20 hours lesson',
        cost: '100',
    },
];


const TeacherList = () => {
    return <div className="teacher--list">
        <div className="list--header">
            <h2>Teachers</h2>
            <select>
                <option value="english">English</option>
            </select>
        </div>
        <div className="list--container">
            {teacher.map((teacher) => (
                <div className='list'>
                   <div className="teacher--detail">
                   <img src={teacher.image} alt={teacher.name} />
                   <h2>{teacher.name}</h2>
                   </div>
                   <span>{teacher.duration}</span>
                   <span>{teacher.cost}hr.</span>
                   <span className="teacher--todo">:</span>
                </div>
            ))}
        </div>
    </div>
};

export default TeacherList;