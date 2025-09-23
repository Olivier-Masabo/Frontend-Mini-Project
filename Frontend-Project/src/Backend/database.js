import { Pool } from 'pg';

 const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"todolist",
    password:"test",
    port:5432,
 })

 module.exports = pool;

