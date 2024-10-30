import React from 'react';
import './App.css';
import ToDoListItem from './ToDoListItem';

class ToDoList extends React.Component {
    renderItems() {
        return this.props.toDoItems.map((item, index) => <ToDoListItem key={index} {...item} />)
    }
  render() {
    
    return (
     <div className="list-items">
        {this.renderItems()}
     </div>
    )
  }
}

export default ToDoList;
