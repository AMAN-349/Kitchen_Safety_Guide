import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import{
    AssignmentTurnedInOutlined,
    NotificationsOutlined,
    PeopleAltOutlined,
    Search,
} from "@material-ui/icons";
import { Avatar, Button } from '@material-ui/core';
import "./css/QuoraHeader.css";

function QuoraHeader() {
  return (
    <div className="qHeader">
        <div className="qHeader-content">
        <div className="qheader__logo">
            <p1><b>KITCHEN GUIDER</b></p1>
            </div>
            <div className="qHeader__icons">
                <div className="qHeader__icon"><HomeIcon/></div>
                <div className="qHeader__icon"><FeaturedPlayListOutlinedIcon/></div>
                <div className="qHeader__icon"><AssignmentTurnedInOutlined/></div>
                <div className="qHeader__icon"><PeopleAltOutlined/></div>
                <div className="qHeader__icon"><NotificationsOutlined/></div>
            </div>
            <div className='qHeader__input'><Search/>
            <input type="text" placeholder="Search questions"/>
            </div>
            <div className="qHeader__Rem">
                <Avatar />
            </div>
            <Button>Add Question</Button>
        </div>
    </div>

  )
}

export default QuoraHeader
