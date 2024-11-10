import React from 'react';
import { BatteryFull } from 'react-bootstrap-icons';
import { Wifi } from 'react-bootstrap-icons';
import { Reception4 } from 'react-bootstrap-icons';
import './App.css';


class ToDoDate extends React.Component {
    
  render() {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const formattedDate = `${hours}:${minutes}`;

    return (
        <div class="header-date">
            <span class="cDate">{formattedDate}</span>
            <span class="cIcon"><Reception4/><Wifi /><BatteryFull /></span>
        </div>
    );
  }
}

export default ToDoDate;
