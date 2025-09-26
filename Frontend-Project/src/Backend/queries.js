
 const getTaskQuery = "SELECT * FROM list";
 const getTaskByNumber = "SELECT * FROM list WHERE number = $1";
 const checkTaskExistance ="SELECT FROM list WHERE task=$1";
 const addTasks = "INSERT INTO list (task) values ($1)"
 const removeTask = "DELETE FROM list where number = $1"

 export {getTaskQuery,getTaskByNumber,checkTaskExistance,addTasks,removeTask};