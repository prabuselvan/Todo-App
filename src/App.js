import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoEdit from './components/TodoEdit';

import './App.css';

class App extends Component {

 state= {
   tasks: ['Task1','Task2','Task3','Task4', 'Task5'],
   isError: false,
   errorMsg: '',
   isEdit: false,
   editTaskName :'',
   index :0,
   success: false
 }

 onAddTask=(newTask)=> {
   console.log('new Task ', newTask);
   const {tasks} = this.state;
  if(newTask) {

    if (!tasks.includes(newTask)) {
      this.setState ({
        tasks: [...tasks,newTask],
        success: true
      })
    } else {
      this.setState ( {
        isError: true,
        errorMsg: newTask+ ' is already present in the list'
      })
    }
    
  } else {
    this.setState ( {
      isError: true,
      errorMsg: 'Please Enter the TaskName'
    })
  }
 
 }


 onDeleteEvent=(delEvent)=>{
  const tasks = this.state.tasks.filter((t, i)=> i !== delEvent);
  console.log(tasks);
  this.setState({
    tasks
  })
 }

 onEditEvent=(task, index)=> {
   console.log(task , ' -- ', index);
   this.setState ( {
     isEdit: true,
     editTaskName:task,
     index: index
    })
 }


 onEditTask=(newTask)=> {
   console.log('newTask ', newTask);
   const { index}= this.state;
  let tasks =[...this.state.tasks];
  console.log(tasks);
  tasks[index]=newTask;
    this.setState({
      tasks: tasks,
      isEdit: false
    });
  console.log(this.state.tasks);
}
onCancel=()=> {
  this.setState ( {
    isEdit : !this.state.isEdit
  });
}
  
  render() {
    return (
      <div >
          <h1 style={{textAlign: "center"}}> Welcome to To do App</h1>

        {!this.state.isEdit  ? 
          <TodoForm
               onAddTask={this.onAddTask} 
               isError={this.state.isError}
               errorMsg={this.state.errorMsg} 
               isEdit={this.state.isEdit} 
        
            />
        :   <TodoEdit editTaskName={this.state.editTaskName}
                      onEditTask={this.onEditTask}
                      onCancel={this.onCancel}
                   /> }
     
          <TodoList 
            tasks={this.state.tasks} 
            onDeleteEvent={this.onDeleteEvent} 
            onEditEvent={this.onEditEvent}
            success={this.state.success}/>
      </div>
    );
  }
}

export default App;
