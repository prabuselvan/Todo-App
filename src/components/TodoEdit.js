import React from 'react';

class TodoEdit extends React.Component {

    state = {
        editState: this.props.editTaskName
    }
    onEditChange=(e)=> {
        console.log(e.target.value);
        this.setState( {
            editState: e.target.value
        })
    }

    onEditSubmit=(e)=> {
        e.preventDefault();
        const {editState} = this.state;
        this.props.onEditTask(editState);
    }

    onClickCancel=(e)=> {
        e.preventDefault();
        // console.log('onClickCancel');
        this.props.onCancel();
    }
    
    render () {
        const {length:oldState}= this.props.editTaskName;
        const {length: currentState} = this.state.editState;
        return (
            <div className='container'>
                <h2> Task Edit Item </h2>
                {/* <form onSubmit={this.onEditSubmit}> */}
                    <div>
                        <input type='text' className='form-control' placeholder='TaskName' value={this.state.editState} onChange={this.onEditChange}/>
                    </div> <br/>
                    <div>
                        <button className='btn btn-primary' onClick={this.onEditSubmit} disabled={currentState > oldState ? false : true}> Update Task </button>
                        <button className='btn btn-warning m-3' onClick={this.onClickCancel}> Cancel</button>
                    </div> 
                {/* </form> */}
            </div>
        )
    }
}

export default TodoEdit;