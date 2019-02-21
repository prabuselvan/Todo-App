import React from 'react';

class TodoForm extends React.Component{

    constructor(props) {
        super(props);
       
        this.state = {
            taskName :'',
            editTaskName: ''
        }
    }

    onHandleChange= (e)=> {
        // console.log(e.target.value);
        const taskName=e.target.value;
        this.setState ( {
            taskName,
            
        });
    }

    onEditHandleChange= (e)=> {
        const editTaskName = e.target.value;
        this.setState( {
            editTaskName
        })
    }
    
    onAddTask=(e)=> {
        e.preventDefault();
        const {taskName} = this.state;
        console.log('TaskName in onAddTask ', taskName);
        this.props.onAddTask(taskName);
    }

    editTask=(e)=> {
        e.preventDefault();
        const {editTaskName}= this.state;
        console.log('state ', editTaskName);
        this.props.onEditSave(editTaskName);
    }

    render( ) {
        return (
            <div className='container'>
              <p> {this.props.isEdit} </p>
                        <form className='form-group' onSubmit={this.onAddTask}>
                        <div>
                            <label> Task Name</label>
                            <input type='text' className='form-control' placeholder='TaskName' value={this.state.taskName} onChange={this.onHandleChange}/>
                        </div> <br/>
                        {this.props.isError ? <div className='error'> {this.props.errorMsg}</div> : null}
                        <div>
                            <button className='btn btn-primary'> Add  Item </button>
                        </div>

                        </form>
                
            </div>
       )
    }
}

export default TodoForm;