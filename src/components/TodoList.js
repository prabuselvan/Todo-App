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
        return (
                <div className='Todolist-items'>

                    
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