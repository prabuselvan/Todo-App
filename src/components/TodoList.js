import React from 'react';

class TodoList extends React.Component {


    onDelete=(del) => {
        // console.log(del);
        this.props.onDeleteEvent(del);
    }


    onEdit = (task, index)=> {
        console.log(task ,' , ', index);
        this.props.onEditEvent(task, index);
    }

    render () {
    
        const {length: count} = this.props.tasks;
        if (count===0) return <p className='alert alert-danger'> There are no Tasks present in the list </p>
        return (
                <div className='Todolist-items'>
                 {this.props.success ? <div className='alert alert-success'> Successfully Added  </div>: null}
                <h2> Task Lists</h2> <span className='badge badge-warning m-2 p-2'> {count} </span> <span> items in the List</span>

                <ul className='list-group'>
                    {this.props.tasks.map((task,index)=> {
                        // console.log(task)
                        return (
                            <li key={index} className='list-group-item'>
                                    {task}
                                    <div className='icons'>
                                            <i className="fa fa-edit" aria-hidden="true"  onClick={()=> this.onEdit ( task, index)}></i>
                                            <i className="fa fa-trash" aria-hidden="true" onClick={()=> this.onDelete(index)}></i>
                                    </div>    
                            </li>
                        )
                    })}
                </ul>
                </div>
        )
    }
}





export default TodoList;