 import Router from "express"
 import{ getTask,getTaskByNum,addTask} from "./controllers.js"

 const router = Router();

 router.get('/',getTask);
 router.use("/:number",getTaskByNum);
 router.post("/",addTask);
 

 export default router;