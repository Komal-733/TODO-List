const todolist=[];

function todolistadd(){
  let total_todo='';
  for(let i=0;i<todolist.length;i++){
    const todo=todolist[i];
    const name=todo.name;
    const date=todo.date;
    const time=todo.time;
    const html=`<p>
      <div class="detail">
        <div class="naming">
          <p class="name-text">${name}</p>
        </div>
        <div class="duedate">
          ${date}
        </div>
        <div class="duetime">
          ${time}
        </div>
        <div class="del-button">
          <button onclick="todolist.splice(${i},1);
          todolistadd();" class="delete-button">
            Delete
          </button>
        </div>
      </div>
    </p>`;
    total_todo += html;
  }
  document.querySelector('.js-show').innerHTML=total_todo;
}

function add_func(){
  const name=document.querySelector('.todo-text');
  const date=document.querySelector('.todo-date');
  const time=document.querySelector('.todo-time');
  const name_=name.value;
  const date_=date.value;
  const time_=time.value;
  todolist.push({name:name_,date:date_,time:time_});
  name.value='';date.value='';time.value='';
  todolistadd();
  }


