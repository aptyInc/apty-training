import { useState } from "react";

import { useContext } from "react";
import { TaskContext } from "../App";
import { ADD_TASK } from "./actions/actions";

import "./form.css"


function Form(){
let {tasks,dispatch}=useContext(TaskContext)

 let formsubmit=(e)=>{
    e.preventDefault()
    dispatch(ADD_TASK(e.target[0].value))
    e.target[0].value=""
 }


    return(<>


    <form action="#" onSubmit={formsubmit} className="form" >
      <input type="text" required/>
      <input type="submit"  value="Add Task"/>
    </form>
    
    
    </>)
}


export default Form;


