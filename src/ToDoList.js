import React from 'react';
import './App.css';

class ToDoList extends React.Component {
    renderItems() {
        return this.props.toDoItems.map((item, index) => <p key={index}>{item.title}</p>)
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
