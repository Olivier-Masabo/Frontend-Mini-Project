 import Router from "express"
 import{ getList,getListByNum} from "./controllers.js"

 const router = Router();

 router.get('/',getList)
 router.use("/:number",getListByNum)
 

 export default router;