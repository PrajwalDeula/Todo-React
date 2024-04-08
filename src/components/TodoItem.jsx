import "bootstrap/dist/css/bootstrap.css"
function TodoItem({todoName, todoDate}){
return(
    <div className="todo-container">
    <div className="row row-container"> 
        <div className="col-6">{todoName} Hello
        </div>
        <div className="col-4">{todoDate} There</div>
        <div className="col-2"><button type="button" className="btn btn-primary">Hit it </button></div>
        </div>
    </div>
)
}

export default TodoItem