import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteTask, getTasks } from '../Actions/TaskActions';
import { TaskReducer } from '../Reducers/TaskReducer';
import store from '../store';
import AddTask from './AddTask'
import DeleteTask from './DeleteTask'


 class Tasks extends Component {
    constructor(props){
      super(props);
             
    }
    componentWillMount(){
      this.props.getTasks()
    }    
  render() {
    const tasks=this.props.tasks.map(task=>{
      return (
        <tr key={task.id}>
        <td>{task.task_name}</td>
        <td>{task.task_start}</td>
        <td>{task.task_end}</td>
        <td> {task.status}</td>
        <td>
          <button type="button" className="btn btn-block btn-danger" onClick={()=>this.props.deleteTask(task.id)}>Delete</button>


       


        </td>
      </tr>

      )
    })
    return (
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Tasks</a></li>
                    <li className="breadcrumb-item active">Tasks Dashbord</li>
                    <button type="button" className="btn btn-block btn-info" data-toggle="modal" data-target="#modal-default">New</button>
                    <AddTask />
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <section className="content">
            <div className="container-fluid">

              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Manage your task</h3>
                    </div>
                    <div className="card-body">
                      <table id="example2" className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Full name</th>
                            <th>Spiciality(s)</th>
                            <th>years of exprience</th>
                            <th>L Operations  </th>
                          </tr>
                        </thead>
                        <tbody>
             
                       {tasks}

                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

const MapStateToProps=(state)=>({
  tasks:state.tasks.items
})


export default connect(MapStateToProps,{getTasks,deleteTask},)(Tasks)