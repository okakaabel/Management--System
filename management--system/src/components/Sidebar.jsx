import React from 'react';
import {Bihome, BiBookAlt,BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle} from "react-icons/bi";
import "../styles/sidebar.css"
const Sidebar = () => {
    return <div className='menu'>
        <div className='log'>
            <BiBookAlt className='logo-icon'/>
            <H2>EduFlex</H2>
        </div>

        <div className='menu--list'></div>
        <a href="#" className='item active'>
            <Bihome className='icon'/>
             Dashboard   
        </a>
        <a href="#" className='item'>
            <BiTask className='icon'/>
            Assignment
        </a>
         <a href="#" className='item'>
            <BiSolidReport className='icon'/>
            Report
        </a>
         <a href="#" className='item'>
            <BiStats className='icon'/>
            Stats
        </a>
        <a href="#" className='item'>
            <BiMessage className='icon'/>
             Message
        </a>
        <a href="#" className='item'>
            <BiHelpCircle className='icon'/>
              Help
        </a>
        <a href="#" className='item'>
            <BiStats className='icon'/>
            Stats
        </a>
    </div>;
};

export default Sidebar