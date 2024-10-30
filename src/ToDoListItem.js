import React from 'react';
import './App.css';

class ToDoListItem extends React.Component {
    
  render() {
    
    return (
        <div className='list-item'>
            <span className='title'>
                title
            </span>
            <span className='actions'>
                actions
            </span>
        </div>
   
    )
  }
}

export default ToDoListItem;
