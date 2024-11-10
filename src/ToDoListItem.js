import React from 'react';
import './App.css';
import { Trash3Fill } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';

class ToDoListItem extends React.Component {
  handleEdit = () => {
    const newTitle = prompt("메모 수정", this.props.title);
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
      <span class="btns">
        <button class="editBtn" onClick={this.handleEdit}><PencilSquare/></button>
        <button class="delBtn" onClick={this.handleDelete}><Trash3Fill/></button>
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
