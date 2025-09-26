 import Router from "express"
 import{ getTask,getTaskByNum,addTask,remove} from "./controllers.js"

 const router = Router();

 router.get('/',getTask);
 router.get("/:number",getTaskByNum);
 router.post("/",addTask);
 router.delete("/:number",remove);
 

 export default router;