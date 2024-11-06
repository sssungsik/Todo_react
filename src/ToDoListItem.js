import React from 'react';
import './App.css';

class ToDoListItem extends React.Component {
  handleEdit = () => {
    const newTitle = prompt("새 할 일을 입력하세요:", this.props.title);
    if (newTitle) {
      this.props.editItem(this.props.title, newTitle);
    }
  }

  handleDelete = () => {
    this.props.deleteItem(this.props.title);
  }

  renderTitle() {
    return <span>{this.props.title}</span>;
  }

  renderButtons() {
    return (
      <span>
        <button onClick={this.handleEdit}>수정</button>
        <button onClick={this.handleDelete}>삭제</button>
      </span>
    );
  }

  render() {
    return (
      <div className='list-item'>
        <span className='title'>{this.renderTitle()}</span>
        <span className='actions'>{this.renderButtons()}</span>
      </div>
    );
  }
}

export default ToDoListItem;
