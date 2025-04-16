import React from "react";
import {BiEdit} from 'react-icons/bi';

const ProfileHeader = () => {
    return <div>
        <div className="profile--header">
            <h2 className="header--title"></h2>
            <div className="edit">
                <BiEdit className='icon'/>
            </div>
        </div>
    </div>
};

export default ProfileHeader;
