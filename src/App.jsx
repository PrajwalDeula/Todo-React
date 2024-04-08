import "bootstrap/dist/css/bootstrap.css"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"

function App(){
const todoItems = [
  {name:'Go to College',
  dueDate:'2000/09/12',},
  {
    name:'Go to School',
  dueDate:'2001/09/12',
  },
  {
    name:'Go to School',
  dueDate:'2001/09/12',
  }
]

return(
  <>
  <AppName></AppName>
  <center className="container">
  
    <TodoItems todoItems={todoItems}></TodoItems>
   
  </center>
  </>
)
}
export default App