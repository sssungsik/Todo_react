import React from 'react';
import './App.css';
import { Plus } from 'react-bootstrap-icons';
import { Minecart } from 'react-bootstrap-icons';

class ToDoCreate extends React.Component {
    
  render() {
    
    return (
       <div className='create-container'>
            <form className='create-form'>
                <input type='text' placeholder='' />
                <button><Plus /></button>
            </form>
       </div>
    )
  }
}

export default ToDoCreate;
