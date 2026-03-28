// export default function ToDo({task}) {
//   return (
//     <li>Task: {task} </li>
//   )
// }

export default function ToDo({task, isDone, time= 0}) {
   if (isDone === true) {
    return <li>Done: {task} Duration: {time} </li>
   } else {
    return <li>To be done: {task}</li>
   }
}