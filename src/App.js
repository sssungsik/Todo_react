import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
const toDoItems = [
  {
    title : '좋은하루 되세요',
    completed : false
  },
  {
    title : '빨래널기',
    completed : false
  },
  {
    title : '설거지',
    completed : false
  },
  {
    title : '분리수거',
    completed : false
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems
    }
  }

  render() {
    return (
      <div className="container">
        <div class="header">
          <h1>안녕하세요.</h1>
        </div>
        <ToDoList toDoItems={this.state.toDoItems}/>
      </div>
    )
  }
}

export default App;
