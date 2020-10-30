import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../Actions/TaskActions'

 class AddTask extends Component {
     constructor(props){
       super(props)
       this.state={
             task_name:'',
             task_start:"",
             task_end:"",
             status:"",
             switch:"false"

               
       }
       this.onsubmit=this.onsubmit.bind(this)
       this.onchange=this.onchange.bind(this)

     }
     onsubmit(e){
      e.preventDefault();
       
       this.props.addTask({...this.state})
       this.setState({
        task_name:'',
        task_start:"",
        task_end:"",
        status:"",
        switch:"modal"

       })

    
        
     }

      onchange(e){ 
        this.setState({
          [e.target.name]:e.target.value

        })

     }
  render() {
    return (

      <div className="modal fade" id="modal-default">

        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Create new Task</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

            <form onSubmit={this.onsubmit}>
              <div className="card-body">
                <div className="form-group">
                  <label for="exampleInputEmail1">Task name</label>
                  <input type="text" value={this.state.task_name} onChange={this.onchange} name="task_name" className="form-control" id="exampleInputEmail1" placeholder="task name" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Task start in </label>
                  <input type="date" value={this.state.task_start} name="task_start" className="form-control" onChange={this.onchange} id="exampleInputPassword1" placeholder="date start" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Task end in </label>
                  <input type="date" name="task_end" value={this.state.task_end} className="form-control" onChange={this.onchange} id="exampleInputPassword1" placeholder="date end" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Status </label>
                  <input type="text" name="status" className="form-control" value={this.state.status} onChange={this.onchange} id="exampleInputPassword1" placeholder="status" />

              </div>

              </div>

              <div className="card-footer">
                <button type="submit" className="btn btn-primary" data-dismiss={this.state.switch} >Submit</button>
              </div>

              </form>
            </div>
            <div className="modal-footer justify-content-between">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


export default connect(null,{addTask},)(AddTask)