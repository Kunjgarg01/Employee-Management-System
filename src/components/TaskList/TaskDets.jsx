import React from "react";
import AcceptTask from "./AcceptTask.jsx";
// import { i } from "framer-motion/client";
import FailedTask from "./FailedTask.jsx";
import NextTask from "./NextTask.jsx";
import CompleteTask from "./CompleteTask.jsx";
const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto scroll-smooth py-4 px-6 space-x-6 flex-1"
      style={{ scrollbarWidth: "none" }}>
        {data.tasks.map((e,idx)=>{
        if(e.failed){
            return <FailedTask key={idx} data={e}/>
          }
          if(e.newTask){
            return <NextTask key={idx}  data={e}/>
          }
          if(e.active){
            return <AcceptTask key={idx}  data={e}/>
          }
          if(e.completed){
            return <CompleteTask key={idx}  data={e}/>
          }
        })}

    </div>
  );

};
export default TaskList;
