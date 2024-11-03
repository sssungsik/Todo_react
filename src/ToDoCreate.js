import React from 'react';
import './App.css';

class ToDoCreate extends React.Component {
    
  render() {
    
    return (
       <div className='create-container'>
            <form className='create-form'>
                <input type='text' placeholder='입력' />
            </form>
       </div>
    )
  }
}

export default ToDoCreate;
