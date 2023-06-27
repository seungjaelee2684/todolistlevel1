function Done({ item, clickRemoveButtonHandler, clickWonkingBtn }) {
    return (
      <div className='app-todolist'>
        <div>
          <div className="app-text_title1">
            {item.title}
          </div>
          <br />
          <div className="app-text_title2">
            {item.content}
          </div>
          <br />
          <button className="app-removeBtn" onClick={() => clickRemoveButtonHandler(item.id)}>삭제하기</button>
          &nbsp;
          <button className="app-btn" onClick={() => clickWonkingBtn(item.id)}>취소</button>
        </div>
      </div>
    )
  }
  
  export default Done;
