import { ADD_TASK, DELETE_TASK, FETCH_TASKS } from "../Actions/Types"


const initState={
    items:[],
    item:{}
}
export const TaskReducer=(state=initState,action)=>{
      const payload=action.payload

      switch(action.type){
          case FETCH_TASKS:
              return {...state,items:payload}
          case ADD_TASK:
              return {...state,items:[...state.items,payload]}
          case DELETE_TASK:
            return {
                ...state,
                items:state.items.filter(item=>item.id!==action.payload)
            }
          default:
              return state
      }
}


 