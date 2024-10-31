import React from 'react';
import './App.css';

class ToDoListItem extends React.Component {
    
  renderTitle(){
    return (
      <span>{this.props.title}</span>
    )
  }
  renderButtons(){
    return(
      <span>
      <button>수정</button>
      <button>삭제</button>
      </span>
    )
  }
  render() {
    
    return (
        <div className='list-item'>
            <span className='title'>
                {this.renderTitle()}
            </span>
            <span className='actions'>
                {this.renderButtons()}
            </span>
        </div>
   
    )
  }
}

export default ToDoListItem;
