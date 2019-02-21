import React from 'react';

class TodoEdit extends React.Component {

    state = {
        editState: ''
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
    
    render () {
        return (
            <div className='container'>
                <form onSubmit={this.onEditSubmit}>

             
                    <div>
                        <input type='text' className='form-control' placeholder='TaskName' value={this.state.editState} onChange={this.onEditChange}/>
                    </div> <br/>
                    <div>
                        <button className='btn btn-primary'> Save Task </button>
                    </div> <br/>
                </form>
            </div>
        )
    }
}

export default TodoEdit;