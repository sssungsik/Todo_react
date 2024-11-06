import React from 'react';
import './App.css';
import { Plus } from 'react-bootstrap-icons';
import { Minecart } from 'react-bootstrap-icons';

class ToDoCreate extends React.Component {
    
  handleSubmit = (e) => {
    e.preventDefault();

    if(!this.refs.createNew.value.trim()) { // 공백 처리
      alert('내용을 입력하세요.');
      this.refs.createNew.value = ''; // 값 초기화
      return false;
    }

    this.props.createItem(this.refs.createNew.value);
    this.refs.createNew.value = '';
  }

  render() {
    
    return (
       <div className='create-container'>
            <form className='create-form' onSubmit={this.handleSubmit}>
                <input type='text' placeholder='추가' ref='createNew' />
                <button><Plus /></button>
            </form>
       </div>
    )
  }
}

export default ToDoCreate;
