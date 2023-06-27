import { useState } from 'react';
import './App.css';
import Working from './components/Working';
import Done from './components/Done';

function App() {

  const [workingObj, setWorkingObj] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false
    },
    {
      id: 2,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: true
    }
  ])

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  }

  const clickAddButtonHandler = () => {

    const newObj = {
      id: workingObj.length + 1,
      title,
      content,
      isDone: false
    }

    setWorkingObj([...workingObj, newObj]);

    setTitle('');
    setContent('');
  }

  const clickDoneBtn = (id) => {
    const updatedItems = workingObj.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: true
        };
      }
      return item;
    });
  
    setWorkingObj(updatedItems);

  }

  const clickWonkingBtn = (id) => {
    const updatedItem = workingObj.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: false
        };
      }
      return item;
    });
  
    setWorkingObj(updatedItem);
  }

  const clickRemoveButtonHandler = (id) => {
    const newObjs = workingObj.filter((obj) => obj.id !== id);
    setWorkingObj(newObjs);
  }

  return (
    <div className='app-all'>
      <div className='app-headline'>
        <div className='app-todo'>
          My Todo List
        </div>
        <div className='app-name'>
          React 이승재
        </div>
      </div>
      <br />
      <div className='app-title'>
        <div className='app-inputBox'>
          제목&nbsp;
          <input
            className='app-input'
            value={title}
            onChange={titleChangeHandler}
          >
          </input>
          &nbsp;
          내용&nbsp;
          <input
            className='app-input'
            value={content}
            onChange={contentChangeHandler}
          >
          </input>
        </div>
        <div className='app-add'>
        <button
          className='app-addBtn'
          onClick={clickAddButtonHandler}
        >
          추가하기
        </button>
        </div>
      </div>
      <br />
      <div className='app-text'>
        <h1>Working.. 🔥</h1>
      </div>
      <div className='app-resultBox'>
        {workingObj.map((item) => {
          return (
            (item.isDone === false)
              ? (<Working
                key={item.id}
                item={item}
                clickRemoveButtonHandler={clickRemoveButtonHandler}
                clickDoneBtn={clickDoneBtn}
              />)
              : null
          )
        })}
      </div>
      <br />
      <div className='app-text'>
        <h1>Done..! 🎉</h1>
      </div>
      <div className='app-resultBox'>
        {workingObj.map((item) => {
          return (
            (item.isDone === true)
              ? (<Done
                key={item.id}
                item={item}
                clickRemoveButtonHandler={clickRemoveButtonHandler}
                clickWonkingBtn={clickWonkingBtn}
              />)
              : null
          )
        })}
      </div>
    </div>
  );
}

export default App;
