import React from 'react';
import './App.css';

import ToDoList from './ToDoList';
import ToDoCreate from './ToDoCreate';

const toDoItems = [
  { title: '좋은하루 되세요', completed: false },
  { title: '빨래널기', completed: false },
  { title: '설거지', completed: false },
  { title: '분리수거', completed: false },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toDoItems };
  }

  createItem = (item) => {
    const newToDoItems = [{ title: item, completed: false }, ...this.state.toDoItems];
    this.setState({ toDoItems: newToDoItems });
  }

  deleteItem = (title) => {
    const newToDoItems = this.state.toDoItems.filter(item => item.title !== title);
    this.setState({ toDoItems: newToDoItems });
  }

  editItem = (oldTitle, newTitle) => {
    const newToDoItems = this.state.toDoItems.map(item =>
      item.title === oldTitle ? { ...item, title: newTitle } : item
    );
    this.setState({ toDoItems: newToDoItems });
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>안녕하세요.</h1>
        </div>
        <ToDoCreate createItem={this.createItem} />
        <ToDoList
          toDoItems={this.state.toDoItems}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
        />
      </div>
    );
  }
}

export default App;
