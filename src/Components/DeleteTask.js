import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../Actions/TaskActions'

 export default class DeleteTask extends Component {
   constructor(props){
     super(props)
     this.onsubmit=this.onsubmit.bind(this)
     this.state={
       style:"",
       overflow:""
     }
   }
 

   onsubmit(e){
     e.preventDefault();
     
     this.props.deleteTask(this.props.id)
     this.setState({
       style:"none",
       overflow:"hidden"
     })

   }
 

  render() {
    return (


      <div className="modal fade" id="modal-danger"     style={{display : this.state.style,overflow:this.state.overflow}}
      >
        <form  onSubmit={this.onsubmit}>
        <div className="modal-dialog">
          <div className="modal-content bg-danger">
            <div className="modal-header">
              <h4 className="modal-title">Delete Task</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>


            <div className="modal-body">
              <p>Delete &hellip; this task</p>

            </div>
            <div className="modal-footer justify-content-between">
              <button type="button" className="btn btn-outline-light" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-outline-light" >Delete</button>
            </div>

          </div>
        </div>
         </form>
      </div>
    )
  }
}


