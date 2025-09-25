
 const getTaskQuery = "SELECT * FROM list";
 const getTaskByNumber = "SELECT * FROM list WHERE number = $1";
 const checkTaskExistance ="SELECT s FROM list s WHERE s =$1";
 const addTasks = "INSERT INTO list (task) values ($1)"

 export {getTaskQuery,getTaskByNumber,checkTaskExistance,addTasks};