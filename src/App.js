import React from 'react';
import './App.css';

import ToDoList from './ToDoList';
import ToDoCreate from './ToDoCreate';
import ToDoDate from './ToDodate';
const toDoItems = [
  { title: '날짜앱 테스트코드 확인', completed: false },
  { title: '내일 최성철차장 미팅', completed: false },
  { title: '김대리 merge....', completed: false },
  { title: '우유 바나나 삼결살', completed: false },
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
          <ToDoDate/>
        <div className="header">
          <h1>모든 메모</h1>
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
